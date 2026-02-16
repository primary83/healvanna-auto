import { NextRequest, NextResponse } from "next/server";
import {
  calculateEstimate,
  SERVICE_BASE_PRICES,
  VEHICLE_SIZES,
  SEVERITY_LEVELS,
  SERVICE_DISPLAY_NAMES,
  SERVICE_PARENT_SLUGS,
} from "../../lib/pricingData";
import type { VehicleSize, Severity } from "../../lib/pricingData";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Valid values for validation
const VALID_VEHICLE_TYPES = VEHICLE_SIZES.map((v) => v.value);
const VALID_SEVERITIES = SEVERITY_LEVELS.map((s) => s.value);
const VALID_SERVICES = Object.keys(SERVICE_BASE_PRICES);

interface GeminiClassification {
  vehicleType: VehicleSize;
  serviceNeeded: string;
  severity: Severity;
  description: string;
  confidence: "low" | "medium" | "high";
}

// Helper: call Gemini API with a specific model
async function callGemini(
  modelName: string,
  image: string,
  mimeType: string
): Promise<Response> {
  return fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType,
                  data: image,
                },
              },
              {
                text: `You are an automotive service cost estimation assistant. Analyze this vehicle photo and classify it.

Return ONLY a JSON object with these exact fields (no markdown, no explanation):
{
  "vehicleType": one of: "compact", "sedan", "suv", "truck", "luxury", "exotic",
  "serviceNeeded": one of: ${VALID_SERVICES.map((s) => `"${s}"`).join(", ")},
  "severity": one of: "minor", "moderate", "major", "severe",
  "description": "Brief 1-2 sentence description of what you see — the vehicle type and any visible damage or service needs",
  "confidence": one of: "low", "medium", "high"
}

Classification rules:
- vehicleType: Based on the vehicle's size/class. Compact = small cars, Sedan = mid-size, SUV = SUVs/crossovers, Truck = pickups/vans, Luxury = premium brands (Mercedes S-Class, BMW 7), Exotic = supercars (Ferrari, Lamborghini)
- serviceNeeded: Pick the MOST RELEVANT service based on visible damage or the vehicle's condition. If no damage is visible, default to "car-detailing"
- severity: minor = cosmetic/light, moderate = standard, major = significant, severe = structural/extensive
- If you cannot identify a vehicle, set confidence to "low" and make your best guess`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 300,
        },
      }),
    }
  );
}

// Helper: parse Gemini response text into classification
function parseGeminiResponse(responseText: string): GeminiClassification | null {
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return null;
  try {
    return JSON.parse(jsonMatch[0]);
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { image, mimeType } = body;

    if (!image || !mimeType) {
      return NextResponse.json(
        { error: "Missing image or mimeType" },
        { status: 400 }
      );
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error: "AI analysis is not configured. Please use the manual estimator.",
          code: "NO_API_KEY",
        },
        { status: 503 }
      );
    }

    // Try models in order — 1.5-flash first (more stable free tier), then 2.0-flash
    const models = ["gemini-1.5-flash", "gemini-2.0-flash"];
    const errors: { model: string; status: number; errorText: string }[] = [];

    for (const model of models) {
      console.log(`Trying Gemini model: ${model}`);
      let response = await callGemini(model, image, mimeType);

      // If 429 rate limited, retry once after 2s delay
      if (response.status === 429) {
        const retryErrorText = await response.text();
        console.error(`Gemini ${model} rate limited (429):`, retryErrorText);
        errors.push({ model: `${model} (1st)`, status: 429, errorText: retryErrorText });

        await sleep(2000);
        console.log(`Retrying Gemini model: ${model}`);
        response = await callGemini(model, image, mimeType);
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Gemini ${model} error:`, response.status, errorText);
        errors.push({ model, status: response.status, errorText });
        continue; // Try next model
      }

      // Success — parse the response
      const geminiData = await response.json();
      const textContent =
        geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      const classification = parseGeminiResponse(textContent);
      if (!classification) {
        console.error(`Failed to parse ${model} response:`, textContent);
        return NextResponse.json(
          {
            error: "Could not analyze the photo. Please try a clearer image or use the manual estimator.",
            code: "PARSE_ERROR",
          },
          { status: 422 }
        );
      }

      // Validate and sanitize
      const vehicleType = VALID_VEHICLE_TYPES.includes(classification.vehicleType)
        ? classification.vehicleType
        : "sedan";
      const serviceNeeded = VALID_SERVICES.includes(classification.serviceNeeded)
        ? classification.serviceNeeded
        : "car-detailing";
      const severity = VALID_SEVERITIES.includes(classification.severity)
        ? classification.severity
        : "moderate";

      // Calculate estimate
      const estimate = calculateEstimate(
        serviceNeeded,
        vehicleType as VehicleSize,
        severity as Severity
      );

      if (!estimate) {
        return NextResponse.json(
          { error: "Could not calculate estimate for this service" },
          { status: 500 }
        );
      }

      console.log(`Gemini ${model} succeeded — ${serviceNeeded}, ${vehicleType}, ${severity}`);

      return NextResponse.json({
        classification: {
          vehicleType,
          serviceNeeded,
          severity,
          description: classification.description || "Vehicle analyzed",
          confidence: classification.confidence || "medium",
          serviceName: SERVICE_DISPLAY_NAMES[serviceNeeded] || serviceNeeded,
          serviceParentSlug: SERVICE_PARENT_SLUGS[serviceNeeded] || serviceNeeded,
        },
        estimate,
      });
    }

    // All models failed — return error with debug info
    const errorSummary = errors
      .map((e) => `${e.model}: ${e.status}`)
      .join(", ");
    const lastError = errors[errors.length - 1];

    // TODO: Remove debugInfo once Gemini quota issue is resolved
    return NextResponse.json(
      {
        error: "AI analysis failed. Please try the manual estimator instead.",
        code: "GEMINI_ERROR",
        debugInfo: `Models tried: ${errorSummary}. Last error: ${(lastError?.errorText || "").substring(0, 500)}`,
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Estimate API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
