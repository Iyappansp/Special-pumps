'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Cta2 from '@/components/sections/Cta2'
// CSS is imported globally in layout.tsx

export default function ChemicalProcessPumpTemplate({ data }: { data: any }) {
  const [values, setValues] = useState({
    fullName: '',
    mobile: '',
    application: '',
    specifications: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [toast, setToast] = useState<null | { type: 'success' | 'error'; message: string }>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!values.fullName.trim()) next.fullName = 'Enter your name.'
    if (!/^\d{10,15}$/.test(values.mobile.trim())) next.mobile = 'Enter a valid mobile number.'
    if (!values.application.trim()) next.application = 'Enter your application.'
    if (!values.specifications.trim() || values.specifications.length < 20)
      next.specifications = 'Please provide detailed requirements.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setToast({ type: 'error', message: 'Please fix the highlighted fields.' })
      setTimeout(() => setToast(null), 3000)
      return
    }
    setToast({ type: 'success', message: 'Thanks! We will contact you soon.' })
    setValues({ fullName: '', mobile: '', application: '', specifications: '' })
    setTimeout(() => setToast(null), 3000)
  }

  const heroImages = [data?.hero?.mainImage, ...(data?.hero?.gallery || [])].filter(Boolean)

  return (
    <Layout headerStyle={4} footerStyle={4}>
      {/* 🧭 Breadcrumb */}
      <div className="hero-inner-section-area-sidebar">
        <img src="/property/hero-img.webp" alt="Special Pumps" className="hero-img1" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-header-area text-center">
                <Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
                  </path>
                </svg>Product Specifications</Link>
                <div className="space24" />
                <h1>Product Specifications</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#fcfcfc', minHeight: '100vh', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

          {/* 🧩 Hero Section */}
          <div className="chemical-pump-card chemical-pump-hero"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1 1 380px', paddingRight: 20 }}>
              <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: 10 }}>
                {data?.hero?.title}
              </h1>
              <p style={{ color: '#475569', marginBottom: 12 }}>{data?.hero?.subtitle}</p>
              {data?.hero?.badges?.length > 0 && (
                <div className="badge-container">
                  {data.hero.badges.map((badge: string) => (
                    <span key={badge} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div style={{ flex: '1 1 280px', display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              {heroImages.slice(0, 2).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="product"
                  style={{
                    width: 'min(46vw, 260px)',
                    borderRadius: 14,
                    border: '1px solid rgba(15,23,42,.1)',
                    objectFit: 'cover',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ⚙️ Quick Specs */}
          {data?.quickSpecs?.length > 0 && (
            <div className="chemical-pump-card">
              <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Quick Specifications</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 12,
                }}
              >
                {data.quickSpecs.map((spec: any) => (
                  <div
                    key={spec.label}
                    style={{
                      background: '#f8fafc',
                      padding: 12,
                      borderRadius: 12,
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <div style={{ fontSize: '.85rem', color: '#64748b' }}>{spec.label}</div>
                    <div style={{ fontWeight: 600, color: '#0f172a' }}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* General Description */}
          {data?.mainContent?.general && (
            <div className="chemical-pump-card">
              <h3 style={{ marginBottom: 12, color: '#0f172a' }}>Overview</h3>
              <p style={{ color: '#334155', whiteSpace: 'pre-line' }}>
                {data.mainContent.general}
              </p>
            </div>
          )}

          {/* Key Features */}
          {data?.mainContent?.keyFeatures?.length > 0 && (
            <div className="chemical-pump-card">
              <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Key Features</h3>
              <div className="feature-grid">
                {data.mainContent.keyFeatures.map((feature: any, index: number) => (
                  <div key={index} className="feature-item">
                    <h4 style={{ marginBottom: 8, color: '#0f172a', fontSize: '1.1rem' }}>
                      {feature.title}
                    </h4>
                    <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Material Construction Table */}
          {data?.mainContent?.materialConstruction && (
            <div className="chemical-pump-card">
              <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Material of Construction</h3>
              <p style={{ color: '#475569', marginBottom: 20 }}>
                {data.mainContent.materialConstruction.description}
              </p>
              
              {/* Desktop Table */}
              <div className="responsive-table-container">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>Part</th>
                      <th>Material Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.mainContent.materialConstruction.materials.map((material: any, index: number) => (
                      <tr key={index}>
                        <td style={{ fontWeight: 500, color: '#0f172a' }}>
                          {material.part}
                        </td>
                        <td style={{ color: '#475569' }}>
                          {material.materials.join(', ')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="mobile-cards">
                {data.mainContent.materialConstruction.materials.map((material: any, index: number) => (
                  <div key={index} className="mobile-card">
                    <h4>{material.part}</h4>
                    <p>{material.materials.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {data?.mainContent?.applications?.length > 0 && (
            <div className="chemical-pump-card">
              <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Applications & Services</h3>
              <p style={{ color: '#475569', marginBottom: 20 }}>
                These pumps are used across a very wide range of industries:
              </p>
              <div className="application-grid">
                {data.mainContent.applications.map((category: any, index: number) => {
                  // Handle both object and string data structures
                  if (category && typeof category === 'object' && category.category) {
                    return (
                      <div key={index} className="application-category">
                        <h4>{category.category}</h4>
                        {category.items && Array.isArray(category.items) ? (
                          <ul>
                            {category.items.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p style={{ color: '#475569', margin: 0 }}>{category.description || 'N/A'}</p>
                        )}
                      </div>
                    )
                  } else if (typeof category === 'string') {
                    return (
                      <div key={index} className="application-category">
                        <h4>Application</h4>
                        <p style={{ color: '#475569', margin: 0 }}>{category}</p>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          )}

          {/* Filter Press Pumps Section */}
          {data?.mainContent?.keyAdvantages && (
            <div className="chemical-pump-card">
              <h2 style={{ marginBottom: 16, color: '#0f172a', fontSize: '1.5rem' }}>
                Filter Press Pumps (RFP Series)
              </h2>
              <p style={{ color: '#475569', marginBottom: 20 }}>
                {data.mainContent.general}
              </p>

              <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Key Advantages</h3>
              <div className="feature-grid" style={{ marginBottom: 24 }}>
                {data.mainContent.keyAdvantages.map((advantage: string, index: number) => (
                  <div key={index} className="feature-item">
                    <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>

              {/* Specifications Table */}
              {data?.mainContent?.specifications && (
                <div>
                  <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Specifications Overview</h3>
                  
                  {/* Desktop Table */}
                  <div className="responsive-table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Detail</th>
                          <th>Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.mainContent.specifications.map((spec: any, index: number) => (
                          <tr key={index}>
                            <td style={{ fontWeight: 500, color: '#0f172a' }}>
                              {spec.detail}
                            </td>
                            <td style={{ color: '#475569' }}>
                              {spec.specification}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="mobile-cards">
                    {data.mainContent.specifications.map((spec: any, index: number) => (
                      <div key={index} className="mobile-card">
                        <h4>{spec.detail}</h4>
                        <p>{spec.specification}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {data?.mainContent?.applications && Array.isArray(data.mainContent.applications) && (
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Applications</h3>
                  <p style={{ color: '#475569', marginBottom: 16 }}>
                    These pumps are excellent for handling tough mixtures in industrial settings:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 20, color: '#475569' }}>
                    {data.mainContent.applications.map((app: any, index: number) => {
                      // Handle both string arrays and object arrays
                      if (typeof app === 'string') {
                        return (
                          <li key={index} style={{ marginBottom: 8 }}>
                            {app}
                          </li>
                        )
                      } else if (app && typeof app === 'object' && app.item) {
                        return (
                          <li key={index} style={{ marginBottom: 8 }}>
                            {app.item}
                          </li>
                        )
                      } else {
                        return null
                      }
                    })}
                  </ul>
                </div>
              )}

              {/* Construction & Features */}
              {data?.mainContent?.constructionFeatures && (
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Construction & Features</h3>
                  <div className="feature-grid">
                    {data.mainContent.constructionFeatures.map((feature: string, index: number) => (
                      <div key={index} className="feature-item">
                        <p style={{ color: '#475569', margin: 0, lineHeight: 1.5 }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

       
        </div>

        {/* Toast */}
        {toast && (
          <div className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        )}
        <Cta2 />
      </div>
    </Layout>
  )
}
