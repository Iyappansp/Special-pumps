'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loading({ show = true }: { show?: boolean }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
          role="alert"
          aria-busy="true"
          aria-live="polite"
          data-test-id="pump-loader"
        >
          {/* Pumps Housing (subtle pulse) */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-8 bg-gray-300 rounded mr-4 shadow-sm"
          />

          {/* Rotating Impeller */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 border-4 border-blue-400 rounded-full relative shadow-md"
          >
            <div className="absolute inset-2 border-2 border-blue-300 rounded-full" />
          </motion.div>

          {/* Fluid Flow Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: [0, 80], opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
              className="absolute w-1 h-3 bg-cyan-400 rounded-full"
              style={{ left: '48%', top: '48%' }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
