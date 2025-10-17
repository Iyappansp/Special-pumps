import { processStainlessSteelPump } from "../process-pump/data"

export const pumpsData = {
  "process-pump": processStainlessSteelPump,

  "chemical-process-pumps": {
    seo: {
      title: "Chemical Process Pumps | Special Pumps",
      description: "Built to handle aggressive and corrosive liquids safely and reliably in chemical and petrochemical plants. Meets high standards for dependable, easy operation.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Chemical Process Pumps"],
      title: "Chemical Process Pumps",
      subtitle: "Built to handle aggressive and corrosive liquids safely and reliably in chemical and petrochemical plants",
      mainImage: "/images/chemical-process-hero.svg",
      badges: ["High Temperature", "Corrosion Resistant", "Easy Maintenance", "Back Pull-out Design"],
    },
    quickSpecs: [
      { label: "Design", value: "Horizontal, Axially Split Casing", icon: "settings" },
      { label: "Max Temperature", value: "105°C", icon: "temperature" },
      { label: "Maintenance", value: "Back Pull-out Design", icon: "maintenance" },
      { label: "Sealing", value: "Mechanical Seal or Packing", icon: "seal" },
    ],
    mainContent: {
      general: "These pumps are built to handle aggressive and corrosive liquids safely and reliably in chemical and petrochemical plants. They meet high standards (like Indian Standards) for dependable, easy operation.",
      keyFeatures: [
        {
          title: "Design",
          description: "Horizontal, Axially Split Casing, Single Stage"
        },
        {
          title: "Easy Maintenance",
          description: "The complete rotating element can be removed easily (called Back Pull-out) without taking the piping or motor out."
        },
        {
          title: "High Temperature Use",
          description: "Designed for temperatures up to 105°C (The casing is foot-mounted)."
        },
        {
          title: "Shaft Seal Options",
          description: "Can be used with a mechanical seal or packing (gland box) depending on your needs."
        },
        {
          title: "Modular Design",
          description: "Parts are made for maximum interchangeability, which means fewer spare parts are needed."
        },
        {
          title: "Durability",
          description: "Heavy-duty bearings for long life and dynamically balanced impellers for high efficiency."
        }
      ],
      materialConstruction: {
        description: "These pumps use tough materials to resist corrosion:",
        materials: [
          { part: "Casing, Impeller, Back Plate", materials: ["SS-316/CF8M", "SS-304/CF-8", "Alloy-20", "Cast Steel", "Bronze", "CI"] },
          { part: "Shaft", materials: ["SS-316/AISI-410"] },
          { part: "Stuffing Box (All Liquid-Contact Parts)", materials: ["Hastelloy", "Cast Steel", "Bronze", "CI"] },
          { part: "Bearing Housing", materials: ["Cast Iron"] },
          { part: "Stuffing Box Seal", materials: ["Mechanical Seal or Gland Packing"] }
        ]
      },
      applications: [
        {
          category: "Chemical & Refining",
          items: ["Fertilizer Plants", "Chemical Plants", "Petrochemical Plants"]
        },
        {
          category: "Industrial Use",
          items: ["Effluent Treatment", "Brewing", "Textile Industries", "Paper Industries", "General Industries"]
        },
        {
          category: "Water Services",
          items: ["Primary & Auxiliary Water Supply", "Circulation Water Systems", "Fire Fighting", "Municipal Water Supply"]
        },
        {
          category: "Power",
          items: ["Power Generations", "Cooling Water", "Boiler make-up water"]
        }
      ]
    }
  },

  "filter-press-pumps-rfp": {
    seo: {
      title: "Filter Press Pumps (RFP Series) | Special Pumps",
      description: "Specifically designed for demanding jobs like pumping sludges, slurries, and liquids with a high percentage of solids. Delivers smooth flow perfect for filter press applications.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Filter Press Pumps (RFP Series)"],
      title: "Filter Press Pumps (RFP Series)",
      subtitle: "Specifically designed for demanding jobs like pumping sludges, slurries, and liquids with a high percentage of solids",
      mainImage: "/images/filter-press-hero.svg",
      badges: ["High Pressure Capability", "Robust Construction", "Reduced Maintenance", "Excellent Wear Resistance"],
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 150 m³/hr", icon: "flow" },
      { label: "Head", value: "Up to 100 meters", icon: "pressure" },
      { label: "Size", value: "25 mm to 150 mm", icon: "settings" },
      { label: "Temperature", value: "Up to 120°C", icon: "temperature" },
    ],
    mainContent: {
      general: "These pumps are specifically designed for demanding jobs like pumping sludges, slurries, and liquids with a high percentage of solids. They deliver a smooth flow that is perfect for filter press applications.",
      keyFeatures: [
        {
          title: "High Pressure Capability",
          description: "Designed to handle high pressure applications with excellent performance."
        },
        {
          title: "Robust Construction",
          description: "Heavy duty design ensures long-lasting operation in demanding conditions."
        },
        {
          title: "Reduced Maintenance",
          description: "Open impeller design and easy maintenance features minimize downtime."
        },
        {
          title: "Excellent Wear Resistance",
          description: "Replaceable wear parts provide extended service life."
        },
        {
          title: "Versatile Applications",
          description: "Suitable for various industrial applications requiring reliable pumping."
        }
      ],
      materialConstruction: {
        description: "These pumps use high-quality materials for optimal performance:",
        materials: [
          { part: "Casing", materials: ["Cast Iron", "Cast Steel", "SS-304", "SS-316"] },
          { part: "Impeller", materials: ["Cast Iron", "Bronze", "SS-304", "SS-316"] },
          { part: "Shaft", materials: ["SS-410", "SS-304", "SS-316"] },
          { part: "Gland Packing", materials: ["PTFE", "Graphite", "Asbestos"] },
          { part: "Mechanical Seal", materials: ["Carbon", "Ceramic", "Silicon Carbide"] }
        ]
      },
      specifications: [
        { detail: "Capacity", specification: "Up to 150 m³/hr" },
        { detail: "Head", specification: "Up to 100 meters" },
        { detail: "Size", specification: "25 mm to 150 mm" },
        { detail: "Temperature", specification: "Up to 120°C" }
      ],
      applications: [
        "Pumping to Filter Presses, Tiles & Marbles",
        "High Pressure Pumping", 
        "Pumping Sludges for General De-Watering",
        "Transferring various kinds of liquid slurry in Industrial and Textile Dyeing applications"
      ],
      constructionFeatures: [
        "Heavy duty design for demanding applications",
        "Open impeller for handling solids and slurries",
        "Easy maintenance with accessible components",
        "Replaceable wear parts for extended life",
        "Robust bearing housing for reliable operation"
      ]
    }
  },

  "thermic-fluid-hot-oil-pump": {
    seo: {
      title: "Thermic Fluid Hot Oil Pump | Special Pumps",
      description: "High-temperature pumps for efficient transfer of thermic fluids in industrial heating systems.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Thermic Fluid Pumps"],
      title: "Thermic Fluid Pumps",
      subtitle: "High-temperature pumps for efficient transfer of thermic fluids in industrial heating systems",
      mainImage: "/images/thermic-fluid-hero.svg",
      badges: ["High Temperature Capability", "Robust Construction", "Efficient Heat Transfer", "Low Maintenance"],
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 100 m³/hr", icon: "flow" },
      { label: "Head", value: "Up to 80 meters", icon: "pressure" },
      { label: "Size", value: "25 mm to 100 mm", icon: "settings" },
      { label: "Temperature", value: "Up to 350°C", icon: "temperature" },
    ],
    mainContent: {
      general: "Manufactured for heat oil transfer circulation with admissible temperature up to 320°C, internal pump pressure 10 bar, supply pressure 5 bar. NPSH available must exceed pump NPSH required.",
      keyFeatures: [
        {
          title: "High Temperature Capability",
          description: "Designed to handle temperatures up to 350°C for demanding applications."
        },
        {
          title: "Robust Construction",
          description: "Heavy duty design ensures reliable operation in high-temperature environments."
        },
        {
          title: "Efficient Heat Transfer",
          description: "Optimized design maximizes heat transfer efficiency."
        },
        {
          title: "Low Maintenance",
          description: "Simple design and quality components minimize maintenance requirements."
        },
        {
          title: "Reliable Operation",
          description: "Proven design ensures consistent performance in critical applications."
        }
      ],
      materialConstruction: {
        description: "These pumps use high-temperature resistant materials:",
        materials: [
          { part: "Casing", materials: ["Cast Steel", "SS-304", "SS-316"] },
          { part: "Impeller", materials: ["Cast Steel", "SS-304", "SS-316"] },
          { part: "Shaft", materials: ["SS-410", "SS-304", "SS-316"] },
          { part: "Mechanical Seal", materials: ["Carbon", "Ceramic", "Silicon Carbide"] }
        ]
      },
      specifications: [
        { detail: "Capacity", specification: "Up to 100 m³/hr" },
        { detail: "Head", specification: "Up to 80 meters" },
        { detail: "Size", specification: "25 mm to 100 mm" },
        { detail: "Temperature", specification: "Up to 350°C" }
      ],
      applications: [
        "Thermic fluid circulation",
        "Heat transfer systems",
        "Boiler loops",
        "Process heating"
      ],
      constructionFeatures: [
        "Volute casing, end-suction, back-pullout, center-line top discharge",
        "Enclosed impeller with back vanes for pressure reduction",
        "Graphite packing with cooling chamber",
        "Reinforced bearing assemblies for high temperature",
        "Throat ring/bush for stuffing box pressure reduction"
      ]
    }
  },

  "polypropylene-pump": {
    seo: {
      title: "Polypropylene Chemical Pump | Special Pumps",
      description: "Corrosion-resistant pumps for handling aggressive chemicals, acids, and alkalis in various industries.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Polypropylene Pumps"],
      title: "Polypropylene Pumps",
      subtitle: "Corrosion-resistant pumps for handling aggressive chemicals, acids, and alkalis in various industries",
      mainImage: "/images/polypropylene-hero.svg",
      badges: ["Corrosion Resistant", "Robust Construction", "High Efficiency", "Leak-proof Design"],
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 150 m³/h", icon: "flow" },
      { label: "Head", value: "Up to 50 m", icon: "pressure" },
      { label: "Temperature", value: "Up to 90°C", icon: "temperature" },
      { label: "Speed", value: "1450/2900 rpm", icon: "settings" },
    ],
    mainContent: {
      general: "Corrosion-resistant pumps for handling aggressive chemicals, acids, and alkalis in various industries.",
      keyFeatures: [
        {
          title: "Corrosion Resistant",
          description: "Non-metallic wetted parts resist aggressive chemicals and acids."
        },
        {
          title: "Robust Construction",
          description: "Heavy duty design ensures reliable operation in harsh environments."
        },
        {
          title: "High Efficiency",
          description: "Optimized design provides excellent performance and energy savings."
        },
        {
          title: "Leak-proof Design",
          description: "Advanced sealing technology prevents leaks and contamination."
        },
        {
          title: "Easy Maintenance",
          description: "Simple design allows for quick and easy maintenance procedures."
        }
      ],
      materialConstruction: {
        description: "These pumps use specialized materials for chemical resistance:",
        materials: [
          { part: "Casing", materials: ["PP", "UHMW-PE"] },
          { part: "Impeller", materials: ["PP", "UHMW-PE"] },
          { part: "Shaft", materials: ["SS-316", "Hastelloy"] },
          { part: "Mechanical Seal", materials: ["Ceramic", "Silicon Carbide"] }
        ]
      },
      applications: [
        "Chemical processing",
        "Pharmaceutical",
        "Electroplating",
        "Effluent treatment",
        "Dyes & pigments",
        "Paper & pulp",
        "Petrochemical"
      ]
    }
  },

  "stainless-steel-pump": {
    seo: {
      title: "Stainless Steel Pumps (Type: SS-304 / SS-316) | Special Pumps",
      description: "Industrial pumps made from SS304/SS316 for hygienic and corrosive applications.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Stainless Steel Pumps (Type: SS-304 / SS-316)"],
      title: "Stainless Steel Pumps (Type: SS-304 / SS-316)",
      subtitle: "Industrial pumps made from SS304/SS316 for hygienic and corrosive applications",
      mainImage: "/images/stainless-steel-hero.svg",
      badges: ["Corrosion Resistance", "Hygienic Design", "High Efficiency", "Robust Construction"],
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 200 m³/hr", icon: "flow" },
      { label: "Head", value: "Up to 80 meters", icon: "pressure" },
      { label: "Size", value: "25 mm to 150 mm", icon: "settings" },
      { label: "Temperature", value: "Up to 120°C", icon: "temperature" },
    ],
    mainContent: {
      general: "Industrial pumps made from SS304/SS316 for hygienic and corrosive applications.",
      keyFeatures: [
        {
          title: "Corrosion Resistance",
          description: "SS304/SS316 construction provides excellent resistance to corrosive media."
        },
        {
          title: "Hygienic Design",
          description: "Smooth surfaces and easy cleaning for food and pharmaceutical applications."
        },
        {
          title: "High Efficiency",
          description: "Optimized design provides excellent performance and energy savings."
        },
        {
          title: "Robust Construction",
          description: "Heavy duty design ensures reliable operation in demanding conditions."
        },
        {
          title: "Versatile Applications",
          description: "Suitable for various industrial applications requiring reliable pumping."
        }
      ],
      materialConstruction: {
        description: "These pumps use high-quality stainless steel materials:",
        materials: [
          { part: "Casing", materials: ["SS-304", "SS-316"] },
          { part: "Impeller", materials: ["SS-304", "SS-316"] },
          { part: "Shaft", materials: ["SS-304", "SS-316"] },
          { part: "Mechanical Seal", materials: ["Carbon", "Ceramic", "Silicon Carbide"] }
        ]
      },
      applications: [
        "Food processing",
        "Pharmaceutical",
        "Chemical processing",
        "Water treatment",
        "Beverage industry",
        "Cosmetic industry"
      ]
    }
  },

  "horizontal-non-clog-pump": {
    seo: {
      title: "Horizontal Non-Clog Slurry Pump | Special Pumps",
      description: "Heavy-duty slurry and sewage pumps with double-ducted vaneless impeller for solids handling.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Non-Clog Pumps"],
      title: "Non-Clog Pumps",
      subtitle: "Heavy-duty non-clog pumps designed to handle solids in suspension and slurry duties",
      mainImage: "/images/non-clog-hero.svg",
      badges: ["Solids Handling", "Robust Construction", "High Efficiency", "Easy Maintenance"],
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 200 m³/hr", icon: "flow" },
      { label: "Head", value: "Up to 60 meters", icon: "pressure" },
      { label: "Size", value: "25 mm to 200 mm", icon: "settings" },
      { label: "Solids", value: "Up to 50mm", icon: "water" },
    ],
    mainContent: {
      general: "Heavy-duty non-clog pumps designed to handle solids in suspension and slurry duties.",
      keyFeatures: [
        {
          title: "Solids Handling",
          description: "Designed to handle large solids and fibrous materials without clogging."
        },
        {
          title: "Robust Construction",
          description: "Heavy duty design ensures reliable operation in demanding conditions."
        },
        {
          title: "High Efficiency",
          description: "Optimized impeller design provides excellent performance and energy savings."
        },
        {
          title: "Easy Maintenance",
          description: "Simple design allows for quick and easy maintenance procedures."
        },
        {
          title: "Versatile Applications",
          description: "Suitable for various industrial applications requiring reliable pumping."
        }
      ],
      materialConstruction: {
        description: "These pumps use durable materials for solids handling:",
        materials: [
          { part: "Casing", materials: ["Cast Iron", "Cast Steel", "SS-304", "SS-316"] },
          { part: "Impeller", materials: ["Cast Iron", "Bronze", "SS-304", "SS-316"] },
          { part: "Shaft", materials: ["SS-410", "SS-304", "SS-316"] },
          { part: "Mechanical Seal", materials: ["Carbon", "Ceramic", "Silicon Carbide"] }
        ]
      },
      applications: [
        "Apartment sewage pumping",
        "Farm fibrous water",
        "Settling tank mud",
        "Textile dyeing sludge",
        "Food processing mashes",
        "Brewery solids removal"
      ]
    }
  },

  "vacuum-pump": {
    seo: {
      title: "Vacuum Pumps | Special Pumps",
      description: "Reliable vacuum pumps for various industrial applications requiring efficient air and gas evacuation.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Vacuum Pumps"],
      title: "Vacuum Pumps",
      subtitle: "Reliable vacuum pumps for various industrial applications requiring efficient air and gas evacuation",
      mainImage: "/images/vacuum-hero.svg",
      badges: ["High Vacuum Capability", "Robust Construction", "Efficient Operation", "Low Noise"],
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 500 m³/hr", icon: "flow" },
      { label: "Vacuum", value: "Up to 700 mmHg", icon: "pressure" },
      { label: "Size", value: "25 mm to 200 mm", icon: "settings" },
      { label: "Power", value: "Up to 15 kW", icon: "power" },
    ],
    mainContent: {
      general: "Reliable vacuum pumps for various industrial applications requiring efficient air and gas evacuation.",
      keyFeatures: [
        {
          title: "High Vacuum Capability",
          description: "Designed to achieve high vacuum levels for demanding applications."
        },
        {
          title: "Robust Construction",
          description: "Heavy duty design ensures reliable operation in industrial environments."
        },
        {
          title: "Efficient Operation",
          description: "Optimized design provides excellent performance and energy efficiency."
        },
        {
          title: "Low Noise",
          description: "Advanced design minimizes noise levels for comfortable operation."
        },
        {
          title: "Easy Maintenance",
          description: "Simple design allows for quick and easy maintenance procedures."
        }
      ],
      materialConstruction: {
        description: "These pumps use high-quality materials for reliable operation:",
        materials: [
          { part: "Casing", materials: ["Cast Iron", "Cast Steel", "SS-304", "SS-316"] },
          { part: "Rotor", materials: ["Cast Iron", "Steel", "SS-304", "SS-316"] },
          { part: "Shaft", materials: ["SS-410", "SS-304", "SS-316"] },
          { part: "Bearings", materials: ["Ball Bearings", "Roller Bearings"] }
        ]
      },
      specifications: [
        { detail: "Capacity", specification: "Up to 500 m³/hr" },
        { detail: "Vacuum", specification: "Up to 700 mmHg" },
        { detail: "Size", specification: "25 mm to 200 mm" },
        { detail: "Power", specification: "Up to 15 kW" }
      ],
      applications: [
        "Evacuation",
        "Filtration assistance",
        "Priming",
        "Process vacuum",
        "Packaging"
      ]
    }
  },

  "filter-press-pump": {
    seo: {
      title: "Filter Press Pump | Special Pumps",
      description:
        "Heavy-duty filter press pumps with solid handling up to 40mm for filtration, sludge pumping, and dewatering.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Filter Press Pump"],
      title: "Filter Press Pump",
      subtitle: "Reliable press-feed pumping for filtration lines",
      mainImage: "/images/filter-press-hero.svg",
    },
    quickSpecs: [
      { label: "Solid Handling", value: "Up to 40mm", icon: "settings" },
      { label: "Casing", value: "CI FG200 (SS option)", icon: "material" },
      { label: "Bearings", value: "Heavy duty anti-friction", icon: "bearing" },
      { label: "Applications", value: "Press feed, sludge, dewatering", icon: "water" },
    ],
    mainContent: {
      general:
        "Heavy-duty pumps designed for filter press applications with solid handling capability. Precision machined components with easy interchangeability and high efficiency open impellers.",
      applications: [
        "Filter press pumping",
        "High pressure filtration",
        "Sludge & mud pumping",
        "General dewatering",
        "Textile dyeing industries",
      ],
    },
  },

  "high-pressure-multistage-pump": {
    seo: {
      title: "High Pressure Multistage Pump | Special Pumps",
      description:
        "Multistage centrifugal pumps for high head clear liquid applications with serviceable bearing blocks.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "High Pressure Multistage Pump"],
      title: "High Pressure Multistage Pump",
      subtitle: "Clear-liquid high head with serviceable design",
      mainImage: "/images/multistage-hero.svg",
    },
    quickSpecs: [
      { label: "Design", value: "Multistage centrifugal", icon: "pump" },
      { label: "Service", value: "Bearing change without pipe disconnection", icon: "maintenance" },
      { label: "Applications", value: "Water supply, clear liquids", icon: "water" },
      { label: "Construction", value: "Rigid heavy-duty blocks", icon: "settings" },
    ],
    mainContent: {
      general:
        "Heavy-duty multistage pumps suitable for continuous operation. Separate bearing blocks allow maintenance without disturbing pipelines. Adequate stuffing box space for easy packing replacement.",
      applications: [
        "Water supply systems",
        "Clear liquid transfer",
        "High pressure applications",
        "Industrial water systems",
      ],
    },
  },

  "rotary-gear-pump": {
    seo: {
      title: "Rotary External Gear Pump | Special Pumps",
      description:
        "Positive displacement gear pumps for viscous fluids, oils, syrups with noiseless operation.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Rotary Gear Pump"],
      title: "Rotary Gear Pump",
      subtitle: "Smooth positive displacement for viscous fluids",
      mainImage: "/images/gear-pump-hero.svg",
    },
    quickSpecs: [
      { label: "Type", value: "External gear positive displacement", icon: "pump" },
      { label: "Viscosity Range", value: "Very low to very high", icon: "fluid" },
      { label: "Materials", value: "Cast Iron, Cast Steel, SS", icon: "material" },
      { label: "Operation", value: "Continuous/intermittent heavy duty", icon: "settings" },
    ],
    mainContent: {
      general:
        "External gear pumps designed for handling liquids with wide viscosity range. Special gear profile ensures efficient transfer with noiseless operation. Close clearances maintain high volumetric efficiency.",
      applications: [
        "Oil firing systems",
        "Rolling mill lubrication",
        "Thermic fluid circulation",
        "Viscous liquid transfer",
      ],
      typicalLiquids: [
        "Glucose",
        "Mineral oil",
        "Molasses",
        "Paints",
        "Caustic lye",
        "Transformer oil",
        "Furnace oil",
        "Adhesives",
        "Sodium silicate",
      ],
    },
  },

  "dewatering-mud-pump": {
    seo: {
      title: "Dewatering/Mud Pump | Special Pumps",
      description:
        "Rugged dewatering pumps for construction sites, utilities, and industrial pit drainage.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Dewatering/Mud Pump"],
      title: "Dewatering / Mud Pump",
      subtitle: "Rugged site dewatering for tough conditions",
      mainImage: "/images/dewatering-hero.svg",
    },
    quickSpecs: [
      { label: "Duty", value: "Site dewatering, pit drainage", icon: "water" },
      { label: "Construction", value: "Heavy-duty, wear-resistant", icon: "settings" },
      { label: "Applications", value: "Construction, utilities, ETP", icon: "industrial" },
      { label: "Features", value: "Continuous operation capable", icon: "pump" },
    ],
    mainContent: {
      general:
        "Heavy-duty pumps designed for dewatering applications in construction sites, utilities, and industrial facilities. Built to handle muddy water and demanding site conditions.",
      applications: [
        "Construction site dewatering",
        "Utility pit drainage",
        "ETP and industrial dewatering",
        "Emergency water removal",
      ],
    },
  },

}