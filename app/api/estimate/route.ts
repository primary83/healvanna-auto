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

    // Call Gemini 2.0 Flash with the image
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
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

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("Gemini API error:", geminiResponse.status, errorText);
      return NextResponse.json(
        {
          error: "AI analysis failed. Please try the manual estimator instead.",
          code: "GEMINI_ERROR",
        },
        { status: 502 }
      );
    }

    const geminiData = await geminiResponse.json();

    // Extract the text response
    const textContent =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Parse JSON from the response (handle potential markdown wrapping)
    let classification: GeminiClassification;
    try {
      const jsonMatch = textContent.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }
      classification = JSON.parse(jsonMatch[0]);
    } catch {
      console.error("Failed to parse Gemini response:", textContent);
      return NextResponse.json(
        {
          error:
            "Could not analyze the photo. Please try a clearer image or use the manual estimator.",
          code: "PARSE_ERROR",
        },
        { status: 422 }
      );
    }

    // Validate and sanitize the classification
    const vehicleType = VALID_VEHICLE_TYPES.includes(classification.vehicleType)
      ? classification.vehicleType
      : "sedan";

    const serviceNeeded = VALID_SERVICES.includes(classification.serviceNeeded)
      ? classification.serviceNeeded
      : "car-detailing";

    const severity = VALID_SEVERITIES.includes(classification.severity)
      ? classification.severity
      : "moderate";

    // Calculate estimate using our deterministic pricing engine
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
  } catch (error) {
    console.error("Estimate API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
