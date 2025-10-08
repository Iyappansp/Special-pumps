'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import styles from './BookingForm.module.css'

interface FormState {
  fullName: string
  mobile: string
  message: string
}

interface BookingFormProps {
  bgColor?: string
}

type Errors = Partial<Record<keyof FormState, string>>

type CSSPropertiesWithVars = React.CSSProperties & { [key: string]: string | number }

export default function BookingForm({ bgColor = '#fcfcf7' }: BookingFormProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    mobile: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})

  const validate = () => {
    const errs: Errors = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required'
    if (!/^\+?\d{7,15}$/.test(form.mobile)) errs.mobile = 'Enter a valid phone number'
    if (form.message.length > 500) errs.message = 'Max 500 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) validate()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validate()) return
    // TODO: integrate API call here
    alert('Request submitted!')
  }

  const formStyle: CSSPropertiesWithVars = {
    backgroundColor: bgColor,
    '--booking-bg': bgColor,
  }

  return (
    <form className={styles.bookingForm} style={formStyle} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label>Full Name</label>
        {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
      </div>

      <div className={styles.formGroup}>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="+91 XXXXX XXXXX"
          required
        />
        <label>Mobile Number</label>
        {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
      </div>

      <div className={styles.formGroup}>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          maxLength={500}
          placeholder=" "
          required
        />
        <label>Message</label>
        <div className={styles.charCount}>{form.message.length}/500</div>
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={styles.btnSubmit}>
        Request Quote
      </button>
    </form>
  )
}
