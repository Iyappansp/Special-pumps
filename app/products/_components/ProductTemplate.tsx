'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

export default function ProductTemplate({ data }: { data: any }) {
  type FormValues = {
    fullName: string
    mobile: string
    application: string
    specifications: string
  }
  type FormErrors = Partial<Record<keyof FormValues, string>>

  const [values, setValues] = useState<FormValues>({
    fullName: '',
    mobile: '',
    application: '',
    specifications: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [toast, setToast] = useState<null | { type: 'success' | 'error'; message: string }>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    let v = value
    if (name === 'mobile') v = v.replace(/\D/g, '')
    setValues((prev) => ({ ...prev, [name]: v }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!values.fullName.trim() || values.fullName.trim().length < 2)
      next.fullName = 'Please enter a valid name.'
    if (!values.mobile.trim() || !/^[0-9]{10,15}$/.test(values.mobile.trim()))
      next.mobile = 'Enter a valid mobile number.'
    if (!values.application.trim() || values.application.trim().length < 2)
      next.application = 'Please enter application/industry.'
    if (!values.specifications.trim() || values.specifications.trim().length < 20)
      next.specifications = 'Please provide key technical details.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setToast({ type: 'error', message: 'Please check the highlighted fields.' })
      setTimeout(() => setToast(null), 3500)
      return
    }
    setToast({ type: 'success', message: 'Thanks! We will contact you shortly.' })
    setTimeout(() => setToast(null), 3500)
    setValues({ fullName: '', mobile: '', application: '', specifications: '' })
  }

  const heroImages = [data?.hero?.mainImage, ...(data?.hero?.gallery || [])].filter(Boolean)

  return (
    <Layout headerStyle={4} footerStyle={4}>
      <div className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
        {/* Breadcrumbs */}
        {Array.isArray(data?.hero?.breadcrumbs) && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 12 }}>
            <ol style={{ display: 'flex', gap: 8, flexWrap: 'wrap', color: '#334155' }}>
              {data.hero.breadcrumbs.map((bc: string, idx: number) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {idx > 0 && <span>/</span>}
                  {idx < data.hero.breadcrumbs.length - 1 ? (
                    <Link href={idx === 0 ? '/' : '/products'}>{bc}</Link>
                  ) : (
                    <span style={{ color: '#0f172a' }}>{bc}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Hero */}
        <div className="row align-items-center" style={{ marginBottom: 20 }}>
          <div className="col-lg-7">
            <h1 className="text-anime-style-2" style={{ marginBottom: 8 }}>{data?.hero?.title}</h1>
            {data?.hero?.subtitle && (
              <p style={{ color: '#475569', fontSize: '1.05rem' }}>{data.hero.subtitle}</p>
            )}
            {!!data?.hero?.badges?.length && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                {data.hero.badges.map((b: string) => (
                  <span key={b} style={{
                    padding: '6px 10px',
                    borderRadius: 999,
                    background: 'rgba(15,23,42,.06)',
                    border: '1px solid rgba(15,23,42,.12)',
                    fontSize: '.9rem'
                  }}>{b}</span>
                ))}
              </div>
            )}
          </div>
          <div className="col-lg-5">
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              {heroImages.slice(0, 2).map((src: string, idx: number) => (
                <img
                  key={idx}
                  src={src}
                  alt="product"
                  style={{ width: 'min(46vw, 260px)', height: 'auto', borderRadius: 12, border: '1px solid rgba(15,23,42,.08)' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Specs */}
        {!!data?.quickSpecs?.length && (
          <div className="row" style={{ rowGap: 12, marginBottom: 24 }}>
            {data.quickSpecs.map((s: any) => (
              <div className="col-6 col-md-3" key={s.label}>
                <div style={{
                  border: '1px solid rgba(15,23,42,.1)',
                  borderRadius: 12,
                  padding: 12,
                  background: 'white',
                  boxShadow: '0 4px 14px rgba(2,8,23,.06)'
                }}>
                  <div style={{ fontSize: '.8rem', color: '#64748b' }}>{s.label}</div>
                  <div style={{ fontWeight: 600, color: '#0f172a' }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="row" style={{ gap: 0 }}>
          {/* Main Content */}
          <div className="col-lg-8">
            {data?.mainContent?.general && (
              <section style={{ marginBottom: 24 }}>
                <h3>General</h3>
                <p style={{ whiteSpace: 'pre-line', color: '#334155' }}>{data.mainContent.general}</p>
              </section>
            )}

            {!!data?.mainContent?.applications?.length && (
              <section style={{ marginBottom: 24 }}>
                <h3>Industrial Applications</h3>
                <ul style={{ columns: 2, paddingLeft: 18 }}>
                  {data.mainContent.applications.map((a: string) => (
                    <li key={a} style={{ marginBottom: 6 }}>{a}</li>
                  ))}
                </ul>
              </section>
            )}

            {!!data?.mainContent?.pumpTypes?.length && (
              <section style={{ marginBottom: 24 }}>
                <h3>Available Types</h3>
                <ul style={{ paddingLeft: 18 }}>
                  {data.mainContent.pumpTypes.map((t: string) => (
                    <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                  ))}
                </ul>
              </section>
            )}

            {!!data?.mainContent?.specialFeatures?.length && (
              <section style={{ marginBottom: 32 }}>
                <h3>Special Features</h3>
                <ul style={{ paddingLeft: 18 }}>
                  {data.mainContent.specialFeatures.map((t: string) => (
                    <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                  ))}
                </ul>
              </section>
            )}

            {!!data?.mainContent?.constructionFeatures?.length && (
              <section style={{ marginBottom: 24 }}>
                <h3>Construction Features</h3>
                <ul style={{ paddingLeft: 18 }}>
                  {data.mainContent.constructionFeatures.map((t: string) => (
                    <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                  ))}
                </ul>
              </section>
            )}

            {!!data?.mainContent?.materials && (
              <section style={{ marginBottom: 24 }}>
                <h3>Materials</h3>
                {Array.isArray(data.mainContent.materials) ? (
                  <ul style={{ paddingLeft: 18 }}>
                    {data.mainContent.materials.map((t: string) => (
                      <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="row" style={{ rowGap: 12 }}>
                    {Object.entries(data.mainContent.materials).map(([k, v]) => (
                      <div className="col-md-6" key={k}>
                        <div style={{
                          border: '1px solid rgba(15,23,42,.1)',
                          borderRadius: 10,
                          padding: 12,
                          background: 'white'
                        }}>
                          <div style={{ fontSize: '.85rem', color: '#64748b' }}>{k}</div>
                          <div style={{ fontWeight: 600, color: '#0f172a' }}>{String(v)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {!!data?.specifications && (
              <section style={{ marginBottom: 36 }}>
                <h3>Technical Specifications</h3>
                <div className="row" style={{ rowGap: 12 }}>
                  {Object.entries(data.specifications).map(([k, v]: any) => (
                    <div className="col-md-6" key={k}>
                      <div style={{
                        border: '1px solid rgba(15,23,42,.1)',
                        borderRadius: 10,
                        padding: 12,
                        background: 'white'
                      }}>
                        <div style={{ fontSize: '.85rem', color: '#64748b' }}>{k}</div>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{String(v)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {!!data?.relatedProducts?.length && (
              <section>
                <h3>Related Products</h3>
                <div className="row" style={{ rowGap: 12 }}>
                  {data.relatedProducts.map((p: any) => (
                    <div className="col-md-4" key={p.slug}>
                      <Link href={`/products/${p.slug}`} style={{ textDecoration: 'none' }}>
                        <div style={{
                          border: '1px solid rgba(15,23,42,.1)',
                          borderRadius: 12,
                          padding: 12,
                          height: '100%',
                          background: 'white'
                        }}>
                          <div style={{ fontWeight: 700, color: '#0f172a' }}>{p.name}</div>
                          <div style={{ fontSize: '.85rem', color: '#64748b' }}>Explore</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <aside className="quoteCard">
              <form onSubmit={handleSubmit} noValidate>
                <div className="field" data-animate>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    className="input"
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    aria-invalid={!!errors.fullName}
                    aria-describedby="fullName-error"
                  />
                  {errors.fullName && (
                    <div id="fullName-error" style={{ color: '#fca5a5' }}>{errors.fullName}</div>
                  )}
                </div>
                <div className="field" data-animate>
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    className="input"
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\s+()\-]*"
                    placeholder="+91 Mobile Number"
                    value={values.mobile}
                    onChange={handleChange}
                    aria-invalid={!!errors.mobile}
                    aria-describedby="mobile-error"
                  />
                  {errors.mobile && (
                    <div id="mobile-error" style={{ color: '#fca5a5' }}>{errors.mobile}</div>
                  )}
                </div>
                <div className="field" data-animate>
                  <label htmlFor="application">Application/Industry</label>
                  <input
                    className="input"
                    id="application"
                    name="application"
                    type="text"
                    placeholder="Application/Industry"
                    value={values.application}
                    onChange={handleChange}
                    aria-invalid={!!errors.application}
                    aria-describedby="application-error"
                  />
                  {errors.application && (
                    <div id="application-error" style={{ color: '#fca5a5' }}>{errors.application}</div>
                  )}
                </div>
                <div className="field" data-animate>
                  <label htmlFor="specifications">Technical Requirements</label>
                  <textarea
                    className="textarea"
                    id="specifications"
                    name="specifications"
                    placeholder="Flow rate (m³/hr), Head (m), Temperature (°C), Fluid type, Pressure"
                    value={values.specifications}
                    onChange={handleChange}
                    aria-invalid={!!errors.specifications}
                    aria-describedby="specifications-error"
                  />
                  {errors.specifications && (
                    <div id="specifications-error" style={{ color: '#fca5a5' }}>{errors.specifications}</div>
                  )}
                </div>
                <div className="btnRow">
                  <button className="btnPrimary" type="submit">Send Enquiry</button>
                  <Link href="/contact" className="btnGhost">Contact Sales</Link>
                </div>
                <p className="note">Response within 1 business day</p>
              </form>
            </aside>
          </div>
        </div>
      </div>

      {toast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            background: toast.type === 'success' ? '#16a34a' : '#dc2626',
            color: '#fff',
            padding: '10px 14px',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 9999,
          }}
        >
          {toast.message}
        </div>
      )}
    </Layout>
  )
}
