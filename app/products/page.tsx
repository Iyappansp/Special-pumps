import Link from 'next/link'
import { allowedProductSlugs, curatedProductsData } from './_data/curated'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Our Pump Range</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {allowedProductSlugs.map((slug) => {
          const product: any = (curatedProductsData as any)[slug]
          return (
          <Link key={slug} href={`/products/${slug}`} className="product-card" style={{ textDecoration: 'none' }}>
            {/* image */}
            {product?.hero?.mainImage && (
              <img
                src={product.hero.mainImage}
                alt={product.hero.title}
                style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid rgba(15,23,42,.08)' }}
              />
            )}
            <h3 style={{ marginTop: 10 }}>{product.hero.title}</h3>
            {product?.hero?.subtitle && (
              <p style={{ color: '#475569' }}>{product.hero.subtitle}</p>
            )}
          </Link>
        )})}
      </div>
    </div>
  )
}
