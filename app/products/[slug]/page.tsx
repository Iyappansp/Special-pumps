import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductTemplate from '../_components/ProductTemplate'
import { pumpsData } from '../_data'

export function generateStaticParams() {
  return Object.keys(pumpsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product: any = (pumpsData as any)[slug]
  if (!product) return {}
  return {
    title: product.seo?.title,
    description: product.seo?.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product: any = (pumpsData as any)[slug]
  if (!product) {
    notFound()
  }
  return <ProductTemplate data={product} />
}
