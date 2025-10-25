'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import PageLoader from '@/components/ui/PageLoader'

export default function GlobalLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  // Initial mount loader
  useEffect(() => {
    setLoading(true)
    const t = window.setTimeout(() => {
      setLoading(false)
      setIsInitialLoad(false)
    }, 1500)
    return () => window.clearTimeout(t)
  }, [])

  // Show loader on navigation changes
  useEffect(() => {
    if (!isInitialLoad) {
      setLoading(true)
      const t = window.setTimeout(() => setLoading(false), 600)
      return () => window.clearTimeout(t)
    }
  }, [pathname, searchParams, isInitialLoad])

  return <PageLoader isLoading={loading} autoDismissMs={null} />
}
