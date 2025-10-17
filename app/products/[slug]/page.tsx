import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductTemplate from '../_components/ProductTemplate'
import ChemicalProcessPumpTemplate from '../_components/ChemicalProcessPumpTemplate'
import { allowedProductSlugs, curatedProductsData, siteUrl } from '../_data/curated'

export function generateStaticParams() {
  return allowedProductSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product: any = (curatedProductsData as any)[slug]
  if (!product) return {}
  const title = product.seo?.title
  const description = product.seo?.description
  const canonical = product.seo?.canonical || `${siteUrl}/products/${slug}`
  const ogImage = product?.hero?.mainImage || '/assets/img/logo/logo5.png'
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product: any = (curatedProductsData as any)[slug]
  if (!product) {
    notFound()
  }
  
  // Use the new ChemicalProcessPumpTemplate for all enhanced pump products
  if (['chemical-process', 'filter-press', 'non-clog', 'polypropylene', 'stainless-steel', 'thermic-fluid', 'vacuum'].includes(slug)) {
    return <ChemicalProcessPumpTemplate data={product} />
  }
  
  return <ProductTemplate data={product} />
}
