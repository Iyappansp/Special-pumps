import type { MetadataRoute } from 'next'
import { allowedProductSlugs, siteUrl } from './products/_data/curated'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPaths = [
    '/',
    '/about-us',
    '/our-service',
    '/product-gallery',
    '/products',
    '/installation-methods',
    '/contact',
  ]
  const items: MetadataRoute.Sitemap = [
    ...staticPaths.map((p) => ({ url: `${siteUrl}${p}`, lastModified: now })),
    ...allowedProductSlugs.map((slug) => ({ url: `${siteUrl}/products/${slug}`, lastModified: now })),
  ]
  return items
}
