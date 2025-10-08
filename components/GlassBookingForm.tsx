"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import styles from "./GlassBookingForm.module.css"

interface GlassBookingFormProps {
  backgroundImage?: string
  heading?: string
}

type FormData = {
  firstName: string
  lastName: string
  phone: string
  inquiry: string
}

export default function GlassBookingForm({
  backgroundImage = "/assets/img/all-images/hero/hero-img1.png",
  heading = "Get in Touch",
}: GlassBookingFormProps) {
  const [data, setData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    inquiry: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: integrate API or email logic here
    alert("Form submitted!")
  }

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 className={styles.title}>{heading}</h2>

        <div className={styles.group}>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            placeholder=" "
            required
            autoComplete="given-name"
          />
          <label>First Name</label>
        </div>

        <div className={styles.group}>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            placeholder=" "
            required
            autoComplete="family-name"
          />
          <label>Last Name</label>
        </div>

        <div className={styles.group}>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder=" "
            required
            autoComplete="tel"
          />
          <label>Phone Number</label>
        </div>

        <div className={`${styles.group} ${styles.full}`}>
          <textarea
            name="inquiry"
            value={data.inquiry}
            onChange={handleChange}
            rows={4}
            placeholder=" "
            required
            maxLength={500}
          />
          <label>Your Inquiry</label>
          <div className={styles.charCount}>{data.inquiry.length}/500</div>
        </div>

        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  )
}
