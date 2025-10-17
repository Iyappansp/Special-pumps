'use client'
import React, { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

type ContactFormValues = {
  name: string;
  phone: string;
  message: string;
}

type ContactFormErrors = {
  name?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  // Contact form state and handlers
  const [values, setValues] = useState<ContactFormValues>({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const nextErrors: ContactFormErrors = {}
    const name = values.name.trim()
    if (!name || name.length < 2) nextErrors.name = 'Please enter a valid name.'
    const phone = values.phone.trim()
    if (!phone || !/^[0-9]{10,15}$/.test(phone)) nextErrors.phone = 'Enter a valid mobile number.'
    const msg = values.message.trim()
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
        setValues({ name: '', phone: '', message: '' })
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

			<Layout headerStyle={4} footerStyle={4}>
				<div>
					<div className="hero-inner-section-area-sidebar">
						<img src="/property/hero-img.webp" alt="Special Pumps" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
										</svg> Contact Us </Link>
										<div className="space24" />
										<h1>Contact Us </h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== CONTACT AREA STARTS =======*/}
					<div className="contact-inner-section sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="heading1">
										<h5>Contact Us</h5>
										<div className="space32" />
										<h2>Let’s Start the Conversation</h2>
										<div className="space24" />
										<p>At Special Pumps, clear communication drives reliable performance. Whether you need help selecting a non‑clog sewage pump, sizing a thermic fluid unit for high‑temperature service, specifying corrosion‑resistant polypropylene or stainless‑steel construction, or optimizing an existing process line, the engineering team is ready to assist end‑to‑end. Share your duty conditions—flow, head, temperature, viscosity, solids handling, and NPSH—and receive an application‑matched recommendation, performance data, and a transparent quote. From RFQs and site surveys to installation, commissioning, spares, and maintenance.</p>
										<div className="space40" />
										<div className="number-address-area">
											<div className="phone-number">
												<div className="img1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
														<path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z" />
													</svg>
												</div>
												<div className="content">
													{/* <p>Phone Number</p> */}
													<div className="content">
														<Link href="/tel:123-456-7890">91 98430 18058</Link>
													</div>
												</div>
											</div>
											<div className="phone-number m-0">
												<div className="img1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
														<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z" />
													</svg>
												</div>
												<div className="content">
													{/* <p>Email Address</p> */}
													<Link href="/mailto:Infoseoc@gmail.com"> info@specialpumps.com</Link>
												</div>
											</div>
										</div>
										<div className="space32" />
										<div className="number-address-area2">
											<div className="phone-number">
												<div className="img1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
														<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
													</svg>
												</div>
												<div className="content">
													<Link href="/#">5/593-B, Kuppanaickanpalayam Road,Thadagam Road,<br className="d-lg-block d-none" />  Kanuvai Post,Tamil Nadu, India.</Link>
												</div>
											</div>
											{/* <div className="phone-number">
												<Link href="/https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">View Our Map</Link>
											</div> */}
										</div>
										<div className="space40" />
										{/* <div className="social no-left-padding">
											<ul no-left-padding>
												<li><Link href="/#"><i className="fa-brands fa-facebook-f" /></Link></li> 
												<li><Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link></li>
												<li><Link href="/#"><i className="fa-brands fa-instagram" /></Link></li>
												<li><Link href="/#"><i className="fa-brands fa-youtube" /></Link></li>
											</ul>
										</div> */}
									</div>
								</div>
								<div className="col-lg-1" />
								<div className="col-lg-5">
									<div className="contact-form-area">
										<h4>Get In Touch</h4>
										<form onSubmit={handleSubmit} noValidate>
											<div className="row">
												<div className="col-lg-12">
													<div className="input-area">
														<input 
															type="text" 
															name="name"
															placeholder="Full Name" 
															value={values.name}
															onChange={handleChange}
															aria-invalid={errors.name ? 'true' : 'false'}
															aria-describedby="name-error"
															autoComplete="name"
															required 
														/>
														{errors.name && <div id="name-error" style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>{errors.name}</div>}
													</div>
												</div>
												<div className="col-lg-12">
													<div className="input-area">
														<input 
															type="tel" 
															name="phone"
															inputMode="tel"
															pattern="[0-9\s+()\-]*"
															placeholder="Phone Number" 
															value={values.phone}
															onChange={handleChange}
															aria-invalid={errors.phone ? 'true' : 'false'}
															aria-describedby="phone-error"
															autoComplete="tel"
															required 
														/>
														{errors.phone && <div id="phone-error" style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>{errors.phone}</div>}
													</div>
												</div>
												<div className="col-lg-12">
													<div className="input-area">
														<textarea 
															name="message"
															placeholder="Your Message" 
															value={values.message}
															onChange={handleChange}
															aria-invalid={errors.message ? 'true' : 'false'}
															aria-describedby="message-error message-counter"
															maxLength={500}
															required 
														/>
														<div id="message-counter" style={{ fontSize: '0.75rem', color: '#6b7280', textAlign: 'right', marginTop: '4px' }} aria-live="polite" aria-atomic="true">{values.message.length}/500</div>
														{errors.message && <div id="message-error" style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '4px' }}>{errors.message}</div>}
													</div>
												</div>
												<div className="col-lg-12">
													<div className="input-area">
														<button type="submit" className="theme-btn5" disabled={submitting}>
															{submitting ? 'Sending...' : 'Send Now'} 
															<span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
																<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
															</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
																<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
															</svg></span>
														</button>
													</div>
												</div>
											</div>
										</form>
										{toast && (
											<div role="status" aria-live="polite" style={{ position: 'fixed', top: 20, right: 20, background: toast.type === 'success' ? '#16a34a' : '#dc2626', color: '#fff', padding: '10px 14px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 9999 }}>
												{toast.message}
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="location-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center space-margin60">
										<h5>Location</h5>
										<div className="space20" />
										<h2>Our Location</h2>
									</div>
								</div>
							</div>
							{/* <div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="location-boxes">
										<div className="img1">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
											</svg>
										</div>
										<div className="space32" />
										<Link href="/#">San Francisco <br className="d-lg-block d-none" />
											1446 Vorwuw Parkway</Link>
										<div className="space24" />
										<p>Phone Number</p>
										<Link href="/tel:123-456-7890">123-456-7890</Link>
										<div className="space32" />
										<Link href="/https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">View Our Map</Link>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="location-boxes">
										<div className="img1">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
											</svg>
										</div>
										<div className="space32" />
										<Link href="/#">Chicago <br className="d-lg-block d-none" />
											1849 Usavom View</Link>
										<div className="space24" />
										<p>Phone Number</p>
										<Link href="/tel:123-456-7890">123-456-7890</Link>
										<div className="space32" />
										<Link href="/https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">View Our Map</Link>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="location-boxes">
										<div className="img1">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z" />
											</svg>
										</div>
										<div className="space32" />
										<Link href="/#">Boston <br className="d-lg-block d-none" />
											1660 Dodgig Place</Link>
										<div className="space24" />
										<p>Phone Number</p>
										<Link href="/tel:123-456-7890">123-456-7890</Link>
										<div className="space32" />
										<Link href="/https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu" className="map" target="_blank">View Our Map</Link>
									</div>
								</div>
							</div> */}
						</div>
					</div>
					<div className="mapouter text-center">
						<div className="gmap_canvas">
							<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7054506334853!2d76.9157491!3d11.060696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f5fbdca3fb6b%3A0xa71c81020d929109!2sRotomech%20Industries!5e0!3m2!1sen!2sin!4v1760693189632!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

						</div>
					</div>
					{/*===== CONTACT AREA ENDS =======*/}
					{/*===== WORKS AREA STARTS =======*/}
					<div className="faq-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center space-margin60">
										<h5>FAQ</h5>
										<div className="space20" />
										<h2>Frequently Asked Question</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="faq-area">
										<div className="accordion" id="accordionExample">
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
														How do I start the process of buying a home with Special Pumps?
													</button>
												</h2>
												<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
														How does Special Pumps help with selling my property?
													</button>
												</h2>
												<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
														Can I find rental Products on Special Pumps?
													</button>
												</h2>
												<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
														How do I know my property is priced correctly?
													</button>
												</h2>
												<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
														Does Special Pumps assist with home financing?
													</button>
												</h2>
												<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
														How can I schedule a property viewing?
													</button>
												</h2>
												<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
														Is there a fee for using Special Pumps services?
													</button>
												</h2>
												<div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
													<div className="accordion-body">
														<p>We charge a transparent fee for our services, which will be discussed upfront depending on whether you’re buying, selling, renting, or managing a property.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== WORKS AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
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
				</div>


			</Layout>
		</>
	)
}