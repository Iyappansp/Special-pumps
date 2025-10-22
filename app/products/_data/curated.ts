import { pumpsData as allProducts } from './index'

export const allowedProductSlugs = [
  'chemical-process',
  'filter-press',
  'non-clog',
  'polypropylene',
  'stainless-steel',
  'thermic-fluid',
  'vacuum',
] as const

export type CuratedSlug = typeof allowedProductSlugs[number]

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://special-pumps.vercel.app'

// Map curated slugs to exact files under public/images/Pumpss (filenames preserved as-is)
const heroImageBySlug: Record<CuratedSlug, string> = {
  'chemical-process': '/property/Rotomech_chemical_process_pumps_2.webp',
  'filter-press': '/new-filter-pumps.jpg',
  'non-clog': '/property/Rotomech_non_clog_pumps_2.webp',
  'polypropylene': '/property/Rotomech_polypropylene_pumps_2.webp',
  'stainless-steel': '/property/Rotomech_stainless_steel_pumps_2.webp',
  'thermic-fluid': '/property/Rotomech_thermic_fluid_pumps_2.webp',
  'vacuum': '/property/Rotomech_vaccum_pumps_2.webp',
}

function mapSlug(slug: CuratedSlug): { key: string | null; title: string; description?: string } {
  switch (slug) {
    case 'chemical-process':
      return { key: 'chemical-process-pumps', title: 'Chemical Process Pumps', description: 'Built to handle aggressive and corrosive liquids safely and reliably in chemical and petrochemical plants.' }
    case 'filter-press':
      return { key: 'filter-press-pumps-rfp', title: 'Filter Press Pumps (RFP Series)', description: 'Specifically designed for demanding jobs like pumping sludges, slurries, and liquids with a high percentage of solids.' }
    case 'stainless-steel':
      return { key: 'stainless-steel-pump', title: 'Stainless Steel Pumps (Type: SS-304 / SS-316)', description: 'Industrial pumps made from SS304/SS316 for hygienic and corrosive applications.' }
    case 'non-clog':
      return { key: 'horizontal-non-clog-pump', title: 'Non-Clog Pumps', description: 'Heavy-duty non-clog pumps designed to handle solids in suspension and slurry duties.' }
    case 'polypropylene':
      return { key: 'polypropylene-pump', title: 'Polypropylene Pumps', description: 'Non-metallic polypropylene pumps for acids, alkalis and corrosive media with robust construction.' }
    case 'thermic-fluid':
      return { key: 'thermic-fluid-hot-oil-pump', title: 'Thermic Fluid Pumps', description: 'High-temperature thermic fluid circulation up to 320°C with reinforced bearings and cooling.' }
    case 'vacuum':
      return { key: 'vacuum-pump', title: 'Vacuum Pumps', description: 'Reliable vacuum pumps for various industrial applications requiring efficient air and gas evacuation.' }
  }
}

export function buildCuratedProduct(slug: CuratedSlug) {
  const info = mapSlug(slug)
  let base: any = info.key ? (allProducts as any)[info.key] : null

  if (!base && slug === 'vacuum') {
    base = {
      seo: {
        title: `${info.title} | Special Pumps — Specifications & Models`,
        description: info.description,
      },
      hero: {
        breadcrumbs: ['Home', 'Products', info.title],
        title: info.title,
        subtitle: 'Reliable vacuum generation for process and industrial applications',
        mainImage: '/images/vacuum-hero.jpg',
        gallery: [],
      },
      quickSpecs: [
        { label: 'Type', value: 'Liquid ring / Rotary vane', icon: 'pump' },
        { label: 'Capacity', value: 'Up to 500 m³/hr', icon: 'flow' },
        { label: 'Vacuum', value: 'Down to 33 mbarA', icon: 'pressure' },
        { label: 'Materials', value: 'CI / SS options', icon: 'material' },
      ],
      mainContent: {
        general:
          'Vacuum pumps engineered for reliable rough-vacuum service across filtration, priming, packaging and process utilities. Designed for continuous operation with low vibration and ease of maintenance.',
        applications: ['Evacuation', 'Filtration assistance', 'Priming', 'Process vacuum', 'Packaging'],
      },
      specifications: {
        'Typical Flow Range (m³/hr)': 'Up to 500',
        'Typical Head Range (m)': '—',
        'Typical Power Range (kW / HP)': '2–55 kW',
        'Max Working Pressure (bar)': 'Ambient',
        'Max Temp (°C)': '80',
        'RPM (nominal)': '1450/2900',
        'Seal Type(s)': 'Mechanical seal',
        'Construction Materials': 'CI / SS304 / SS316',
      },
    }
  }

  if (!base && info.key) return null

  // Ensure default spec fields
  const defaultSpecs: Record<string, string> = {
    'Typical Flow Range (m³/hr)': '—',
    'Typical Head Range (m)': '—',
    'Typical Power Range (kW / HP)': '—',
    'Max Working Pressure (bar)': '—',
    'Max Temp (°C)': '—',
    'RPM (nominal)': '1450/2900',
    'Solids Handling (mm / %)': '—',
    'Viscosity Range (cP)': '—',
    'Seal Type(s)': 'Mechanical seal / Gland packing',
    'Construction Materials': '—',
  }

  const merged = {
    ...base,
    seo: {
      ...base?.seo,
      title: `${info.title} | Special Pumps — Specifications & Models`,
      description: base?.seo?.description || info.description,
      canonical: `${siteUrl}/products/${slug}`,
    },
    hero: {
      ...base?.hero,
      breadcrumbs: ['Home', 'Products', info.title],
      title: info.title,
    },
    specifications: {
      ...defaultSpecs,
      ...(base?.specifications || {}),
    },
    slug,
  }

  // Override hero image per curated slug if provided in mapping
  const overrideHero = heroImageBySlug[slug]
  if (overrideHero) {
    merged.hero = { ...merged.hero, mainImage: overrideHero }
  }

  return merged
}

export const curatedProductsData: Record<CuratedSlug, any> = Object.fromEntries(
  allowedProductSlugs.map((s) => [s, buildCuratedProduct(s)!])
) as Record<CuratedSlug, any>
