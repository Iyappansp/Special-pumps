'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

export default function ProductTemplate({ data }: { data: any }) {
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
    setToast({ type: 'success', message: 'Thanks! We’ll contact you soon.' })
    setValues({ fullName: '', mobile: '', application: '', specifications: '' })
    setTimeout(() => setToast(null), 3000)
  }

  const heroImages = [data?.hero?.mainImage, ...(data?.hero?.gallery || [])].filter(Boolean)

  return (
    <Layout headerStyle={4} footerStyle={4}>
       {/* 🧭 Breadcrumb */}
       <div className="hero-inner-section-area-sidebar">
						<img src="/assets/img/all-images/hero/hero-img1.png" alt="Special Pumps" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
											</path>
										</svg> Listing <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
												</path>
											</svg>Product Specifications</Link>
										<div className="space24" />									<h1>Product Specifications</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
      <div style={{ background: '#fcfc7', minHeight: '100vh', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

         


          {/* 🧩 Hero Section */}
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 24,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
            }}
          >
            <div style={{ flex: '1 1 380px', paddingRight: 20 }}>
              <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: 10 }}>
                {data?.hero?.title}
              </h1>
              <p style={{ color: '#475569', marginBottom: 12 }}>{data?.hero?.subtitle}</p>
              {data?.hero?.badges?.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {data.hero.badges.map((badge: string) => (
                    <span
                      key={badge}
                      style={{
                        background: '#f1f5f9',
                        borderRadius: 20,
                        padding: '6px 12px',
                        fontSize: '.85rem',
                        color: '#0f172a',
                      }}
                    >
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
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 20,
                boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
              }}
            >
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
          {/* Full-width General */}
          {data?.mainContent?.general && (
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 20,
                boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ marginBottom: 12, color: '#0f172a' }}>General</h3>
              <p style={{ color: '#334155', whiteSpace: 'pre-line' }}>
                {data.mainContent.general}
              </p>
            </div>
          )}

          {/* Full-width Industrial Applications */}
          {!!data?.mainContent?.applications?.length && (
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: 20,
                boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ marginBottom: 16, color: '#0f172a' }}>Industrial Applications</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: 12,
                }}
              >
                {data.mainContent.applications.map((app: string) => (
                  <div
                    key={app}
                    style={{
                      background: '#f8fafc',
                      padding: 12,
                      borderRadius: 12,
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <div style={{ fontSize: '.85rem', color: '#64748b' }}>Application</div>
                    <div style={{ fontWeight: 600, color: '#0f172a' }}>{app}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Toast */}
        {toast && (
          <div
            style={{
              position: 'fixed',
              top: 20,
              right: 20,
              padding: '10px 14px',
              borderRadius: 10,
              background: toast.type === 'success' ? '#16a34a' : '#dc2626',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            {toast.message}
          </div>
        )}
      </div>
    </Layout>
  )
}
