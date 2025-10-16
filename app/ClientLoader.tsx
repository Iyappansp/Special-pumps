'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Loading from '@/components/Loading'

export default function ClientLoader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loading show={loading} />
      <div style={{ opacity: loading ? 0 : 1 }}>
        {children}
      </div>
    </>
  )
}
