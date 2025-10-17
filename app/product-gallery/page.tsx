'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import { allowedProductSlugs, curatedProductsData } from '@/app/products/_data/curated'

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(
    allowedProductSlugs.map((slug) => [slug, (curatedProductsData as any)[slug]]) as any
  )

  const categories = ['All', 'Process', 'Chemical', 'Slurry']

  useEffect(() => {
    const query = selectedCategory.toLowerCase()
    if (selectedCategory === 'All') {
      setFilteredProducts(allowedProductSlugs.map((slug) => [slug, (curatedProductsData as any)[slug]]) as any)
    } else {
      const filtered = allowedProductSlugs
        .map((slug) => [slug, (curatedProductsData as any)[slug]])
        .filter(([slug, product]: any) => {
        const title = product?.hero?.title?.toLowerCase?.() || ''
        const subtitle = product?.hero?.subtitle?.toLowerCase?.() || ''
        const seoTitle = product?.seo?.title?.toLowerCase?.() || ''
        const seoDesc = product?.seo?.description?.toLowerCase?.() || ''
        const applications: string = (product?.mainContent?.applications || []).join(' ').toLowerCase()
        const specValues: string = (product?.quickSpecs || [])
          .map((s: any) => `${s?.label || ''} ${s?.value || ''}`)
          .join(' ')
          .toLowerCase()
        const haystack = `${title} ${subtitle} ${seoTitle} ${seoDesc} ${applications} ${specValues}`
        return haystack.includes(query)
      }) as any
      setFilteredProducts(filtered)
    }
  }, [selectedCategory])

  return (
    <Layout headerStyle={4} footerStyle={4}>
      {/* Hero Section */}
      <div className="hero-inner-section-area-sidebar">
						<img src="/property/hero-img.webp" alt="Special Pumps" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
												</path>
											</svg>Product Gallery</Link>
										<div className="space24" />
										<h1>Product Gallery</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
<br /><br />
      {/* Filter Categories */}
      <motion.section
        className="filter-section py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`pg-filter-btn ${selectedCategory === category ? 'pg-active' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="products-grid py-16">
        <div className="container mx-auto px-4">
          <motion.div className="grid" layout>
            {filteredProducts.map(([slug, product]: any, index: number) => (
              <ProductCard key={slug} slug={slug} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <div className="cta1-section-area">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="cta-bg-area" style={{ backgroundImage: 'url(assets/img/all-images/bg/cta-bg1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
										<div className="row align-items-center">
											<div className="col-lg-5">
												<div className="cta-header">
													<h2 className="text-anime-style-3">Step Into Your Home with Special Pumps</h2>
													<div className="space16" />
													<p data-aos="fade-left" data-aos-duration={1000}>At Special Pumps, we believe your next home is more than just a place – it’s where your future begins you’re buy.</p>
												</div>
											</div>
											<div className="col-lg-2" />
											<div className="col-lg-5" data-aos="zoom-in" data-aos-duration={1000}>
												<div className="btn-area1 text-center">
													<Link href="/sidebar-grid" className="theme-btn5">Find Your Perfect Pump <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg></span></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    </Layout>
  )
}

// Product Card Component with Advanced Animations
function ProductCard({ slug, product, index }: { slug: string; product: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
    <div>
    <motion.div
      className="product-card group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/products/${slug}`}>
        <div className="pg-card relative overflow-hidden">
          {/* Image Container with Overlay */}
          <div className="pg-image">
            <motion.div className="pg-image-inner" whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
              {product?.hero?.mainImage ? (
                <Image
                  src={product.hero.mainImage}
                  alt={product?.hero?.title || 'product'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="loading-shimmer" style={{ width: '100%', height: '100%' }} />
              )}
            </motion.div>

            {/* Animated Overlay */}
            <motion.div
              className="pg-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover Content */}
            <motion.div
              className="pg-hover-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pg-overlay-content">
                <motion.div
                  className="pg-action-circle"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className="pg-action-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </motion.div>
                <p className="font-semibold">View Details</p>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="pg-content">
            <motion.h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors" layoutId={`title-${slug}`}>
              {product?.hero?.title}
            </motion.h3>

            <motion.p className="line-clamp-2" layoutId={`subtitle-${slug}`}>
              {product?.hero?.subtitle}
            </motion.p>

            {/* Specs Pills */}
            <div className="pg-specs">
              {product?.quickSpecs?.slice?.(0, 2)?.map((spec: any, idx: number) => (
                <motion.span
                  key={idx}
                  className="pg-spec-pill"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  {spec.label}
                </motion.span>
              ))}
            </div>

            {/* Action Button */}
            <motion.button
              className="pg-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Specifications
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
    </div>



    </>

 
    
  )
  
}
