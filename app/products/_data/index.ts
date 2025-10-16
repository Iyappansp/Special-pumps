import { processStainlessSteelPump } from "../process-pump/data"

export const pumpsData = {
  "process-pump": processStainlessSteelPump,

  "thermic-fluid-hot-oil-pump": {
    seo: {
      title: "Thermic Fluid Hot Oil Pump | Special Pumps",
      description:
        "High-temperature thermic fluid pumps up to 320°C with back-pullout design, cooled stuffing box, and reinforced bearings.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Thermic Fluid Hot Oil Pump"],
      title: "Thermic Fluid Hot Oil Pump",
      subtitle: "High-temperature heat transfer circulation up to 320°C",
      mainImage: "/images/thermic-fluid-hero.svg",
    },
    quickSpecs: [
      { label: "Max Temperature", value: "320°C", icon: "temperature" },
      { label: "Pressure", value: "10 bar internal / 5 bar supply", icon: "pressure" },
      { label: "Construction", value: "Back-pullout, center-line discharge", icon: "settings" },
      { label: "Sealing", value: "Graphite packing with cooling", icon: "seal" },
    ],
    mainContent: {
      general:
        "Manufactured for heat oil transfer circulation with admissible temperature up to 320°C, internal pump pressure 10 bar, supply pressure 5 bar. NPSH available must exceed pump NPSH required.",
      applications: [
        "Thermic fluid circulation",
        "Heat transfer systems",
        "Boiler loops",
        "Process heating",
      ],
      constructionFeatures: [
        "Volute casing, end-suction, back-pullout, center-line top discharge",
        "Enclosed impeller with back vanes for pressure reduction",
        "Graphite packing with cooling chamber",
        "Reinforced bearing assemblies for high temperature",
        "Throat ring/bush for stuffing box pressure reduction",
      ],
    },
  },

  "polypropylene-pump": {
    seo: {
      title: "Polypropylene Chemical Pump | Special Pumps",
      description:
        "Non-metallic polypropylene pumps for corrosive chemicals, acids, alkalis with ceramic/SS316/Hastelloy sleeve options.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Polypropylene Pump"],
      title: "Polypropylene Pump",
      subtitle: "Non-metallic wetted parts for corrosive applications",
      mainImage: "/images/polypropylene-hero.svg",
    },
    quickSpecs: [
      { label: "Capacity", value: "Up to 150 m³/h", icon: "flow" },
      { label: "Head", value: "Up to 50 m", icon: "pressure" },
      { label: "Temperature", value: "Up to 90°C", icon: "temperature" },
      { label: "Speed", value: "1450/2900 rpm", icon: "settings" },
    ],
    mainContent: {
      general:
        "High quality horizontal pumps with all liquid-contact parts non-metallic. Designed for corrosive and reactive service in chemical & process industries. Handles acids, alkalis, effluents, solvents, slurries.",
      applications: [
        "Chemical processing",
        "Pharmaceutical",
        "Electroplating",
        "Effluent treatment",
        "Dyes & pigments",
        "Paper & pulp",
        "Petrochemical",
      ],
      materials: {
        "Wetted parts": "Polypropylene",
        Shaft: "SS304",
        Sleeve: "Ceramic/SS316/Hastelloy/Alloy-20",
        Housing: "Cast Iron FG200",
      },
    },
  },

  "back-pullout-process-pump": {
    seo: {
      title: "Back Pullout Process Pump | Special Pumps",
      description:
        "End-suction volute pump with easy back-pullout maintenance for chemical, refineries, textile, and general industry.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Back Pullout Process Pump"],
      title: "Back Pullout Process Pump",
      subtitle: "Easy maintenance with vertically split casing",
      mainImage: "/images/back-pullout-hero.svg",
      // gallery: ["/images/back-pullout-1.jpg", "/images/back-pullout-2.jpg"],
    },
    quickSpecs: [
      { label: "Type", value: "End-suction volute", icon: "pump" },
      { label: "Casing", value: "Vertically split", icon: "settings" },
      { label: "Materials", value: "SS316/304, Alloy-20, Hastelloy", icon: "material" },
      { label: "Sealing", value: "Teflon packing or mechanical seal", icon: "seal" },
    ],
    mainContent: {
      general:
        "Horizontal centrifugal pumps offering complete corrosion/erosion resistance to aggressive liquids. Easy installation, operation and maintenance with interchangeable parts. End-suction volute with closed or semi-open impeller.",
      applications: [
        "Effluent treatment",
        "Refineries & chemical",
        "Textile",
        "Rubber",
        "Paper",
        "Food processing",
        "General industry",
        "Corrosive acids & alkalis",
      ],
      materials: [
        "SS316/CF8M",
        "SS304/CF8",
        "Alloy-20",
        "Hastelloy",
        "Cast Steel",
        "Bronze",
        "CI",
      ],
    },
  },

  "horizontal-non-clog-pump": {
    seo: {
      title: "Horizontal Non-Clog Slurry Pump | Special Pumps",
      description:
        "Heavy-duty slurry and sewage pumps with double-ducted vaneless impeller for solids handling.",
    },
    hero: {
      breadcrumbs: ["Home", "Products", "Horizontal Non-Clog Pump"],
      title: "Horizontal Non-Clog Pump",
      subtitle: "Handles solids in suspension with ease and Good in Long terms",
      mainImage: "/images/non-clog-hero.svg",
    },
    quickSpecs: [
      { label: "Design", value: "Double-ducted, vaneless impeller", icon: "pump" },
      { label: "Drive", value: "Close-coupled or belt drive", icon: "Pumps" },
      { label: "Materials", value: "Grey cast iron with steel shaft", icon: "material" },
      { label: "Applications", value: "Sewage, slurry, contaminated liquids", icon: "water" },
    ],
    mainContent: {
      general:
        "Horizontal end-suction centrifugal pumps for heavily contaminated liquids with solids in suspension. Double-ducted vaneless impeller design runs in axially symmetrical casing. Particle size handling depends on impeller duct cross-section.",
      applications: [
        "Apartment sewage pumping",
        "Farm fibrous water",
        "Settling tank mud",
        "Textile dyeing sludge",
        "Food processing mashes",
        "Brewery solids removal",
      ],
    },
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