export interface FAQ {
  question: string;
  answer: string;
}

export const SERVICE_FAQS: Record<string, FAQ[]> = {
  "car-detailing": [
    {
      question: "How much does professional car detailing cost?",
      answer:
        "Professional car detailing typically costs between $150-$500 depending on vehicle size and services. A basic exterior wash and wax starts around $50-$100, while a full interior and exterior detail ranges from $200-$400. Premium services like paint correction or ceramic coating can cost $500-$2,000+.",
    },
    {
      question: "How often should I get my car detailed?",
      answer:
        "Most experts recommend a full detail every 4-6 months to maintain your vehicle's appearance and protect its value. However, if you drive frequently, park outdoors, or live in harsh weather conditions, every 2-3 months is ideal. Regular washes between details help extend the results.",
    },
    {
      question: "What is the difference between car washing and car detailing?",
      answer:
        "Car washing removes surface dirt and grime, while detailing is a thorough cleaning and restoration process. Detailing includes paint correction, clay bar treatment, interior deep cleaning, leather conditioning, and protective coatings. It restores the vehicle closer to its original condition.",
    },
    {
      question: "Is ceramic coating worth it?",
      answer:
        "Ceramic coating provides long-lasting paint protection for 2-5+ years, offering superior hydrophobic properties, UV protection, and scratch resistance compared to traditional wax. While the upfront cost is higher ($500-$2,000), it reduces ongoing maintenance costs and preserves resale value.",
    },
  ],
  "car-wrapping": [
    {
      question: "How much does a car wrap cost?",
      answer:
        "A full vehicle wrap typically costs $2,500-$6,000 depending on vehicle size, wrap material, and design complexity. Partial wraps and accent wraps start around $500-$1,500. Premium materials like color-shifting or chrome wraps can cost $6,000-$10,000+.",
    },
    {
      question: "How long does a car wrap last?",
      answer:
        "A quality vinyl car wrap lasts 5-7 years with proper care. Factors affecting longevity include sun exposure, climate, washing habits, and material quality. Garaging your vehicle and hand washing extend wrap life. Paint protection film (PPF) can last up to 10 years.",
    },
    {
      question: "Does wrapping a car damage the paint?",
      answer:
        "No, a professionally installed vinyl wrap actually protects the original paint underneath. When removed properly, the paint should be in the same condition as when the wrap was applied. This makes wrapping an excellent option for leased vehicles or preserving factory paint.",
    },
    {
      question: "Can you wrap a car with bad paint?",
      answer:
        "Wrapping over damaged paint is possible but not recommended. Chips, peeling, or rust will show through the wrap and can cause adhesion issues. Minor imperfections may be hidden, but significant paint damage should be repaired first for the best results.",
    },
  ],
  "body-shops": [
    {
      question: "How do I choose the right body shop?",
      answer:
        "Look for shops with manufacturer certifications (OEM certified), positive reviews, insurance company partnerships, written warranties, and modern equipment. Ask about their paint matching technology and whether they use OEM or aftermarket parts. A reputable shop will provide a detailed written estimate.",
    },
    {
      question: "How long does body work take?",
      answer:
        "Minor dent repairs take 1-3 days, while moderate collision damage typically requires 1-2 weeks. Major structural repairs can take 3-4 weeks or more. Factors include parts availability, insurance approval timelines, paint curing, and shop workload.",
    },
    {
      question: "Should I use the body shop my insurance recommends?",
      answer:
        "You have the legal right to choose any body shop, not just insurance-recommended ones. While insurer-preferred shops may streamline the claims process, independently choosing a certified shop ensures repairs meet your quality standards. Research reviews and certifications regardless.",
    },
  ],
  "collision-repair": [
    {
      question: "What should I do after a car accident?",
      answer:
        "After ensuring safety, document the scene with photos, exchange insurance information, and file a police report. Contact your insurance company promptly. Get multiple repair estimates from certified collision repair shops. Don't sign anything from the at-fault party's insurer without consulting your own.",
    },
    {
      question: "Can frame damage be repaired safely?",
      answer:
        "Yes, modern frame straightening technology can safely repair most frame damage. Certified collision repair shops use computerized measuring systems to restore frames to factory specifications. However, severe frame damage may make the vehicle a total loss if repair costs exceed the vehicle's value.",
    },
    {
      question: "Will collision repair affect my car's value?",
      answer:
        "Any accident history can affect resale value, but quality repairs minimize the impact. Choosing a certified shop that uses OEM parts and follows manufacturer repair procedures helps maintain value. Keep all repair documentation as proof of quality workmanship for future buyers.",
    },
  ],
  "auto-glass": [
    {
      question: "Can a windshield crack be repaired or does it need replacement?",
      answer:
        "Chips smaller than a quarter and cracks under 6 inches can usually be repaired. However, damage in the driver's line of sight, near the edges, or involving multiple cracks typically requires full replacement. Most insurance covers windshield repair at no cost to you.",
    },
    {
      question: "Does insurance cover windshield replacement?",
      answer:
        "Many comprehensive auto insurance policies cover windshield repair or replacement with no deductible. Some states require insurers to waive the deductible for windshield repairs. Check your policy or call your insurer to confirm your specific coverage.",
    },
    {
      question: "How long does windshield replacement take?",
      answer:
        "Windshield replacement typically takes 1-2 hours for the installation itself. However, the adhesive needs 1-6 hours to fully cure before the vehicle is safe to drive. Many shops offer mobile service and can replace your windshield at your home or workplace.",
    },
  ],
  "auto-painting": [
    {
      question: "How much does it cost to paint a car?",
      answer:
        "A basic single-stage paint job starts around $500-$1,000. A mid-range paint job with proper prep and basecoat/clearcoat runs $1,500-$3,500. High-end custom paint jobs with extensive bodywork, multiple coats, and premium materials can cost $5,000-$20,000+.",
    },
    {
      question: "How long does a car paint job last?",
      answer:
        "A quality paint job lasts 10-15 years with proper care. Regular washing, waxing or ceramic coating, and garage parking extend paint life. Factory paint typically lasts the lifetime of the vehicle, while aftermarket paint longevity depends on material quality and application technique.",
    },
    {
      question: "Can you color match car paint perfectly?",
      answer:
        "Modern computerized color matching systems can achieve near-perfect matches using spectrophotometers that analyze the existing paint. Factory paint codes provide the base formula, which technicians then adjust for fading and environmental effects. Quality shops blend adjacent panels for seamless results.",
    },
  ],
  "car-washing": [
    {
      question: "Is hand washing better than automatic car wash?",
      answer:
        "Hand washing is gentler on paint and allows for more thorough cleaning of specific areas. Automatic brushless/touchless washes are convenient and safe for most vehicles. Avoid brush-type automatic washes as they can cause swirl marks. For premium vehicles, hand washing is recommended.",
    },
    {
      question: "How often should I wash my car?",
      answer:
        "Wash your car every 1-2 weeks under normal conditions. Increase frequency if exposed to road salt, bird droppings, tree sap, or heavy pollen. Regular washing prevents contaminant buildup that can damage paint. In winter, weekly washes help remove corrosive road salt.",
    },
    {
      question: "Can car washing scratch the paint?",
      answer:
        "Improper washing techniques can cause micro-scratches and swirl marks. Use the two-bucket method, a quality microfiber wash mitt, and pH-neutral car wash soap. Avoid dish soap, sponges, and dirty towels. Always wash from top to bottom and dry with clean microfiber towels.",
    },
  ],
};

export function getServiceFAQs(serviceSlug: string): FAQ[] {
  return SERVICE_FAQS[serviceSlug] || [];
}
