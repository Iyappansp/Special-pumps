'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Loading from '@/components/Loading'

const INITIAL_MS = 1600
const NAV_MS = 700

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPathRef = useRef<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('[ClientProvider] hydrated: initial loader show')
    const t = setTimeout(() => {
      setLoading(false)
      console.log('[ClientProvider] initial loader hide')
    }, INITIAL_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname
      return
    }
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname
      console.log('[ClientProvider] route change:', pathname)
      setLoading(true)
      const t = setTimeout(() => {
        setLoading(false)
        console.log('[ClientProvider] route loader hide')
      }, NAV_MS)
      return () => clearTimeout(t)
    }
  }, [pathname])

  // Prevent scroll while overlay is visible
  useEffect(() => {
    if (!loading) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [loading])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Loading show={true} />
        </motion.div>
      ) : (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.28 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
