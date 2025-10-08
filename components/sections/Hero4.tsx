
'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type EnquiryFormValues = {
  name: string;
  phone: string;
  message: string;
  email?: string;
  company?: string;
}

type EnquiryFormErrors = {
  name?: string;
  phone?: string;
  message?: string;
  email?: string;
}

export default function Hero4() {
  // Enquiry form state and handlers
  const [values, setValues] = useState<EnquiryFormValues>({ name: '', phone: '', message: '', email: '', company: '' })
  const [errors, setErrors] = useState<EnquiryFormErrors>({})
  const [showOptional, setShowOptional] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const validate = (): boolean => {
    const nextErrors: EnquiryFormErrors = {}
    const name = values.name.trim()
    if (!name || name.length < 2) nextErrors.name = 'Please enter a valid name.'
    const phone = values.phone.trim()
    if (!phone || !/^[0-9]{10,15}$/.test(phone)) nextErrors.phone = 'Enter a valid mobile number.'
    const msg = values.message.trim()
    if (!msg || msg.length < 20 || msg.length > 500) nextErrors.message = 'Please add basic duty details.'
    if (values.email && values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Enter a valid email.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    let v = value
    if (name === 'phone') v = v.replace(/\D/g, '')
    setValues(prev => ({ ...prev, [name]: v }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setToast({ message: 'Please check the highlighted fields.', type: 'error' })
      setTimeout(() => setToast(null), 3500)
      return
    }
    // Here you could POST to your API endpoint
    setToast({ message: 'Thanks! The team will contact you shortly.', type: 'success' })
    setTimeout(() => setToast(null), 3500)
    setValues({ name: '', phone: '', message: '', email: '', company: '' })
    setShowOptional(false)
  }

  return (
    <>

      <div>
        <div className="hero4-section-area sp1" style={{ backgroundImage: 'url(assets/img/all-images/hero/hero4-img1.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-header">
                  <h5 data-aos="fade-left" data-aos-duration={800}>
                    Premium Pumps for Industrial Excellence</h5>
                  <div className="space20" />
                  <h1 className="text-anime-style-2">Industrial Pump Solutions for Every Industry</h1>
                  <div className="space20" />
                  <div className="btn-are1" data-aos="fade-left" data-aos-duration={1000}>
                    <Link href="/sidebar-grid" className="theme-btn5">Enquiry Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg></span></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-4">
                {/* Enquiry Form */}
                <aside className="quoteCard" role="form" aria-labelledby="quoteTitle">
                  <h3 id="quoteTitle" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>Request Quote</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="field" data-animate>
                      <label className="label" htmlFor="name">Full Name</label>
                      <input className="input" id="name" name="name" type="text" placeholder="Enter full name" value={values.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby="name-error" autoComplete="name" required />
                      {errors.name && <div id="name-error" style={{ color: '#dc2626' }}>Please enter a valid name.</div>}
                    </div>
                    <div className="field" data-animate>
                      <label className="label" htmlFor="phone">Mobile Number</label>
                      <input className="input" id="phone" name="phone" type="tel" inputMode="tel" pattern="[0-9\s+()\-]*" placeholder="+91 XXXXX XXXXX" value={values.phone} onChange={handleChange} aria-invalid={!!errors.phone} aria-describedby="phone-help phone-error" autoComplete="tel" required />
                      {/* <span className="helper" id="phone-help">WhatsApp number preferred</span> */}
                      {errors.phone && <div id="phone-error" style={{ color: '#dc2626' }}>Enter a valid mobile number.</div>}
                    </div>
                    <div className="field" data-animate>
                      <label className="label" htmlFor="message">Message</label>
                      <textarea className="textarea" id="message" name="message" rows={4} placeholder="Describe fluid, flow (m³/hr), head (m), temperature (°C), and application" value={values.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby="message-error message-counter" maxLength={500} required />
                      <div id="message-counter" className="char-counter">{values.message.trim().length}/500</div>
                      {errors.message && <div id="message-error" style={{ color: '#dc2626' }}>Please add basic duty details.</div>}
                    </div>
                    {showOptional && (
                      <div className="optional-fields" style={{ marginBottom: 12 }}>
                        <div className="form-group" style={{ marginBottom: 12 }}>
                          <label htmlFor="email" className="text-4 fw-6" style={{ display: 'block', marginBottom: 6 }}>Email</label>
                          <input id="email" name="email" type="email" placeholder="name@company.com" value={values.email || ''} onChange={handleChange} style={{ width: '100%', padding: 12, border: '1px solid #e2e8f0', borderRadius: 8 }} aria-invalid={!!errors.email} aria-describedby="email-error" />
                          {errors.email && <div id="email-error" style={{ color: '#dc2626', marginTop: 6 }}>Enter a valid email.</div>}
                        </div>
                        <div className="form-group" style={{ marginBottom: 12 }}>
                          <label htmlFor="company" className="text-4 fw-6" style={{ display: 'block', marginBottom: 6 }}>Company</label>
                          <input id="company" name="company" type="text" placeholder="Company / Plant name" value={values.company || ''} onChange={handleChange} style={{ width: '100%', padding: 12, border: '1px solid #e2e8f0', borderRadius: 8 }} />
                        </div>
                      </div>
                    )}
                    <div className="btnRow">
                      <button className="btnPrimary" type="submit">Request Quote</button>
                      {/* <Link href="/contact" className="btnGhost">Contact Sales</Link> */}
                    </div>
                    <p className="note">Reponse in ASAP!</p>
                  </form>
                  {toast && (
                    <div role="status" aria-live="polite" style={{ position: 'fixed', top: 20, right: 20, background: toast.type === 'success' ? '#16a34a' : '#dc2626', color: '#fff', padding: '10px 14px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 9999 }}>
                      {toast.message}
                    </div>
                  )}
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/*===== HERO AREA ENDS =======*/}
        <div className="space100 d-lg-block d-none" />
        <div className="space50 d-lg-none d-block" />
      </div>
    </>
  )
}
