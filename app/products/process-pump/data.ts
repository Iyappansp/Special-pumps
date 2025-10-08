export const processStainlessSteelPump = {
  seo: {
    title: "Process Pump and Stainless Steel Pump | Special Pumps",
    description:
      "Industrial process pumps with SS316/304 construction for chemical, petrochemical, and pharmaceutical applications. Stable parallel operation.",
  },

  hero: {
    breadcrumbs: ["Home", "Products", "Process Pump and Stainless Steel Pump"],
    title: "Process Pump and Stainless Steel Pump",
    subtitle: "International standard design for chemical and petrochemical industries",
    mainImage: "/images/process-pump-hero.jpg",
    gallery: ["/images/process-pump-1.jpg", "/images/process-pump-2.jpg"],
    badges: ["SS316/304", "Mechanical Seal", "Parallel Operation"],
  },

  quickSpecs: [
    { label: "Materials", value: "SS316/CF8M, SS304/CF8", icon: "material" },
    { label: "Sealing", value: "Mechanical seal/Gland packing", icon: "seal" },
    { label: "Operation", value: "Parallel operation capable", icon: "settings" },
    { label: "Lubrication", value: "Oil/Grease lubricated", icon: "oil" },
  ],

  mainContent: {
    general:
      '"Rotomech" Chemical and process pumps have been developed according to international standards to meet diversified applications in chemical and petrochemical industries.\n\nThe hydraulic design provides stable head-capacity characteristics enabling satisfactory parallel operation of two or more pumps. Higher suction lift compared to conventional pumps. Auxiliary vanes on impeller back reduce axial thrust and eliminate gland leakage.',

    applications: [
      "Chemical & Petrochemical",
      "Pharmaceutical",
      "Textile Industries",
      "Paper & Pulp",
      "Sugar Industries",
      "Refineries & Cracking Plants",
      "Solvent & Distillation Plants",
    ],

    pumpTypes: [
      "Standard General Purpose Chemical Pump",
      "Pump with Water cooled Stuffing Box",
      "Semi-open impeller with replaceable wearing plate",
      "Mechanical seal or Gland Packing options",
      "Double Mechanical Seal with Water Cooling for high temperature",
    ],

    specialFeatures: [
      "Cooling jackets for stuffing box & bearing housing",
      "Centre Lined support for Thermic Fluid circulation",
      "Mechanical seals with centre line support",
    ],
  },

  sidebar: {
    form: {
      title: "Get Technical Quote",
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        { name: "mobile", label: "Mobile Number", type: "tel", required: true },
        { name: "application", label: "Application/Industry", type: "text" },
        {
          name: "specifications",
          label: "Technical Requirements",
          type: "textarea",
          placeholder:
            "Flow rate (m³/hr), Head (m), Temperature (°C), Fluid type, Pressure",
        },
      ],
      submitText: "Send Enquiry",
    },
  },

  specifications: {
    Construction: "SS316/CF8M, SS304/CF8",
    Impeller: "Closed/Semi-open with auxiliary vanes",
    Sealing: "Mechanical seal or gland packing",
    Lubrication: "Oil or grease (depends on duty)",
    "Special Features": "Water-cooled stuffing box available",
  },

  relatedProducts: [
    { name: "Back Pullout Process Pump", slug: "back-pullout-process-pump" },
    { name: "Thermic Fluid Hot Oil Pump", slug: "thermic-fluid-hot-oil-pump" },
    { name: "Polypropylene Pump", slug: "polypropylene-pump" },
  ],
}
