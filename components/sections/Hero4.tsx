
'use client'
import React, { useState } from 'react'
import Link from 'next/link'

type EnquiryFormValues = {
  name: string;
  phone: string;
  message: string;
  company?: string;
}

type EnquiryFormErrors = {
  name?: string;
  phone?: string;
  message?: string;
}

export default function Hero4() {
  // Enquiry form state and handlers
  const [values, setValues] = useState<EnquiryFormValues>({ name: '', phone: '', message: '', company: '' })
  const [errors, setErrors] = useState<EnquiryFormErrors>({})
  const [showOptional, setShowOptional] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const nextErrors: EnquiryFormErrors = {}
    const name = values.name.trim()
    if (!name || name.length < 2) nextErrors.name = 'Please enter a valid name.'
    const phone = values.phone.trim()
    if (!phone || !/^[0-9]{10,15}$/.test(phone)) nextErrors.phone = 'Enter a valid mobile number.'
    const msg = values.message.trim()
    // Up to 500 chars, must not be empty
    if (!msg || msg.length > 500) nextErrors.message = 'Please add a short message (max 500 characters).'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setToast({ message: 'Please check the highlighted fields.', type: 'error' })
      setTimeout(() => setToast(null), 3500)
      return
    }
    try {
      setSubmitting(true)
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          message: values.message,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && (data as any)?.success) {
        setToast({ message: 'Message sent successfully ✅', type: 'success' })
        setValues({ name: '', phone: '', message: '', company: '' })
        setShowOptional(false)
      } else {
        setToast({ message: 'Failed to send message. Try again.', type: 'error' })
      }
    } catch (err) {
      setToast({ message: 'Something went wrong.', type: 'error' })
    } finally {
      setTimeout(() => setToast(null), 3500)
      setSubmitting(false)
    }
  }

  return (
    <>

      <div>
        <div className="hero4-section-area sp1" style={{ backgroundImage: 'url(/property/hero-img.webp)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-header">
              
                  <div className="space20" />
                  <h1 className="text-anime-style-2">Power to Precision <span style={{ color: '#ff9800' }}>Special Pumps </span>Delivers Industrial Excellence</h1>
                       <h5><span style={{ color: '#ff9800' }}>Premium Pumps for Industrial Excellence</span></h5>
                  <div className="space20" />
                  {/* <div className="btn-are1" data-aos="fade-left" data-aos-duration={1000}>
                    <Link href="/sidebar-grid" className="theme-btn5">Enquiry Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                      <path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
                    </svg></span></Link>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-4">
                {/* Enquiry Form */}
                <aside className="quoteCard" role="form" aria-labelledby="quoteTitle" style={{ fontSize: '0.95rem', padding: 16 }}>
                  <h3 id="quoteTitle" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>Request Quote</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="field" data-animate style={{ marginBottom: 10 }}>
                      <label className="label" htmlFor="name">Full Name</label>
                      <input className="input py-2" id="name" name="name" type="text" placeholder="Enter full name" value={values.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby="name-error" autoComplete="name" required />
                      {errors.name && <div id="name-error" style={{ color: '#dc2626' }}>Please enter a valid name.</div>}
                    </div>
                    <div className="field" data-animate style={{ marginBottom: 10 }}>
                      <label className="label" htmlFor="phone">Mobile Number</label>
                      <input className="input py-2" id="phone" name="phone" type="tel" inputMode="tel" pattern="[0-9\s+()\-]*" placeholder="+91 XXXXX XXXXX" value={values.phone} onChange={handleChange} aria-invalid={!!errors.phone} aria-describedby="phone-help phone-error" autoComplete="tel" required />
                      {/* <span className="helper" id="phone-help">WhatsApp number preferred</span> */}
                      {errors.phone && <div id="phone-error" style={{ color: '#dc2626' }}>Enter a valid mobile number.</div>}
                    </div>
                    {/* <div className="field" data-animate style={{ marginBottom: 10 }}>
                      <label className="label" htmlFor="email">Email</label>
                      <input className="input" id="email" name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby="email-error" autoComplete="email" required />
                      {errors.email && <div id="email-error" style={{ color: '#dc2626' }}>Enter a valid email.</div>}
                    </div> */}
                    <div className="field" data-animate style={{ marginBottom: 10 }}>
                      <label className="label py-2" htmlFor="message">Message</label>
                      <textarea className="textarea" id="message" name="message" rows={3} placeholder="Descriptions" value={values.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby="message-error message-counter" maxLength={500} required />
                      <div id="message-counter" className="char-counter" aria-live="polite" aria-atomic="true">{values.message.length}/500</div>
                      {errors.message && <div id="message-error" style={{ color: '#dc2626' }}>{errors.message}</div>}
                    </div>
                    {showOptional && (
                      <div className="optional-fields" style={{ marginBottom: 12 }}>
                        <div className="form-group" style={{ marginBottom: 12 }}>
                          <label htmlFor="company" className="text-4 fw-6" style={{ display: 'block', marginBottom: 6 }}>Company</label>
                          <input id="company" name="company" type="text" placeholder="Company / Plant name" value={values.company || ''} onChange={handleChange} style={{ width: '100%', padding: 12, border: '1px solid #e2e8f0', borderRadius: 8 }} />
                        </div>
                      </div>
                    )}
                    <div className="btnRow">
                      <button className="btnPrimary" type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Request Quote'}</button>
                      {/* <Link href="/contact" className="btnGhost">Contact Sales</Link> */}
                    </div>
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

