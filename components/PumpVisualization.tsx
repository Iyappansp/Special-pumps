'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PumpVisualization({ show = true }: { show?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<any[]>([])
  const [performance, setPerformance] = useState({
    flow: 850,
    head: 45,
    efficiency: 78,
    power: 5.2
  })
  useEffect(() => {
    console.log('✅ PumpVisualization mounted')
  }, [])

  useEffect(() => {
    if (!show || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Initialize particles
    const particleSystem = Array.from({ length: 2000 }, (_, i) => ({
      id: i,
      x: 400, // Impeller center
      y: 400,
      vx: 0,
      vy: 0,
      radius: Math.random() * 2 + 1,
      color: `hsl(${190 + Math.random() * 30}, 70%, ${50 + Math.random() * 30}%)`,
      phase: Math.random() * Math.PI * 2,
      pressure: 0,
      velocity: 0
    }))

    let animationId: number

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particleSystem.forEach((particle, index) => {
        // Simulate centrifugal pump physics
        const centerX = 400
        const centerY = 400
        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)

        // Centrifugal force simulation
        const rpm = 1450
        const angularVel = (rpm * 2 * Math.PI) / 60
        const centrifugalForce = distance * angularVel * angularVel * 0.0001

        // Radial acceleration
        particle.vx += Math.cos(angle) * centrifugalForce
        particle.vy += Math.sin(angle) * centrifugalForce

        // Tangential velocity from impeller rotation
        const tangentialVel = distance * angularVel * 0.01
        particle.vx += -Math.sin(angle) * tangentialVel
        particle.vy += Math.cos(angle) * tangentialVel

        // Pressure-based color
        particle.velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        const pressure = Math.min(particle.velocity * 10, 100)
        particle.color = `hsl(${240 - pressure * 1.2}, 80%, ${40 + pressure * 0.4}%)` 

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Reset particles that go out of bounds
        if (distance > 300) {
          particle.x = centerX + (Math.random() - 0.5) * 20
          particle.y = centerY + (Math.random() - 0.5) * 20
          particle.vx = 0
          particle.vy = 0
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.shadowBlur = 3
        ctx.shadowColor = particle.color
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [show])

  if (!show) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      >
        {/* Main Pump Visualization */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* 3D Pump Assembly */}
          <div className="relative">
            
            {/* Pumps Housing with Cooling System */}
            <motion.div
              animate={{ 
                rotateY: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 30px rgba(59,130,246,0.4)",
                  "0 0 50px rgba(59,130,246,0.8)",
                  "0 0 30px rgba(59,130,246,0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -left-32 top-1/2 transform -translate-y-1/2"
            >
              <div className="w-32 h-20 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Cooling fins with depth */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`fin-${i}`}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                    className="absolute top-0 h-full w-1 bg-gradient-to-b from-gray-600 to-gray-800 shadow-inner"
                    style={{ left: `${12 + i * 8}%` }}
                  />
                ))}
                
                {/* Pumps ventilation effect */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`air-${i}`}
                    animate={{
                      y: [-5, -25],
                      opacity: [0, 0.6, 0],
                      scale: [0.5, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                    className="absolute w-1 h-2 bg-white/30 rounded-full"
                    style={{ 
                      left: `${15 + i * 4}%`, 
                      bottom: '100%'
                    }}
                  />
                ))}

                {/* Power indicator with glow */}
                <motion.div
                  animate={{ 
                    scale: [0.8, 1.3, 0.8],
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      "0 0 5px rgba(34,197,94,0.5)",
                      "0 0 15px rgba(34,197,94,1)",
                      "0 0 5px rgba(34,197,94,0.5)"
                    ]
                  }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full"
                />

                {/* Pumps nameplate */}
                <div className="absolute bottom-1 left-2 text-[6px] text-gray-700 font-mono">
                  5HP • 1450RPM
                </div>
              </div>
            </motion.div>

            {/* Drive Shaft with Rotation */}
            <motion.div
              animate={{ 
                rotateZ: 360,
                scaleX: [1, 1.1, 1]
              }}
              transition={{ 
                rotateZ: { duration: 0.8, repeat: Infinity, ease: "linear" },
                scaleX: { duration: 1.5, repeat: Infinity }
              }}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-3 bg-gradient-to-r from-gray-400 via-slate-500 to-gray-400 rounded-full shadow-lg"
            >
              {/* Shaft keyway */}
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-gray-600 rounded-full" />
            </motion.div>

            {/* Pump Casing with Volute Design */}
            <motion.div
              animate={{
                rotateY: [0, 10, -10, 0],
                filter: [
                  "drop-shadow(0 0 20px rgba(6,182,212,0.4))",
                  "drop-shadow(0 0 40px rgba(6,182,212,0.8))",
                  "drop-shadow(0 0 20px rgba(6,182,212,0.4))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-48 h-48 bg-gradient-to-br from-cyan-600 via-blue-700 to-cyan-800 rounded-full shadow-2xl"
            >
              {/* Volute spiral casing */}
              <div className="absolute inset-3 border-4 border-cyan-300/30 rounded-full" />
              <div className="absolute inset-6 border-2 border-cyan-200/20 rounded-full" />
              
              {/* Discharge outlet with flow direction */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-r-lg shadow-lg"
              >
                {/* Discharge flow indicators */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`discharge-${i}`}
                    animate={{
                      x: [0, 20],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      repeat: Infinity
                    }}
                    className="absolute right-0 w-2 h-0.5 bg-cyan-300 rounded-full"
                    style={{ top: `${20 + i * 15}%` }}
                  />
                ))}
              </motion.div>

              {/* Suction inlet */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-6 bg-gradient-to-l from-blue-700 to-cyan-500 rounded-l-lg shadow-lg"
              />

              {/* High-Performance Impeller */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full relative overflow-hidden"
                style={{
                  background: "conic-gradient(from 0deg, #fbbf24, #f59e0b, #d97706, #fbbf24)"
                }}
              >
                {/* Curved impeller vanes with 3D effect */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`vane-${i}`}
                    className="absolute w-1 bg-gradient-to-r from-yellow-200 to-yellow-400 shadow-lg origin-bottom"
                    style={{
                      height: '60%',
                      left: '50%',
                      bottom: '50%',
                      transform: `rotate(${i * 45}deg) translateX(-50%)`,
                      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'
                    }}
                    animate={{
                      boxShadow: [
                        "2px 0 4px rgba(0,0,0,0.3)",
                        "4px 0 8px rgba(0,0,0,0.5)",
                        "2px 0 4px rgba(0,0,0,0.3)"
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                ))}

                {/* Impeller hub with depth */}
                <motion.div
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    boxShadow: [
                      "inset 0 0 10px rgba(0,0,0,0.3)",
                      "inset 0 0 20px rgba(0,0,0,0.5)",
                      "inset 0 0 10px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-1/2 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
                />
              </motion.div>

              {/* Pressure gauge with realistic needle */}
              <motion.div
                className="absolute -top-6 -right-6 w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600 shadow-lg flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 90, 45, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-0.5 h-3 bg-red-500 rounded-full origin-bottom shadow-glow"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[8px] text-white font-mono whitespace-nowrap">
                  {performance.head}m HEAD
                </div>
              </motion.div>

              {/* Temperature sensor */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  backgroundColor: [
                    "rgb(34, 197, 94)",
                    "rgb(252, 211, 77)",
                    "rgb(34, 197, 94)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full border-2 border-gray-300 shadow-lg"
              />
            </motion.div>

            {/* Particle Canvas Overlay */}
            <canvas
              ref={canvasRef}
              width={800}
              height={800}
              className="absolute -inset-48 pointer-events-none opacity-80"
              style={{ mixBlendMode: 'screen' }}
            />

            {/* Performance Dashboard */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-lg p-4 border border-cyan-500/30"
            >
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-cyan-400 text-sm font-mono"
                  >
                    {performance.flow} LPM
                  </motion.div>
                  <div className="text-xs text-gray-400">FLOW</div>
                </div>
                <div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="text-blue-400 text-sm font-mono"
                  >
                    {performance.head}M
                  </motion.div>
                  <div className="text-xs text-gray-400">HEAD</div>
                </div>
                <div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.1, repeat: Infinity }}
                    className="text-green-400 text-sm font-mono"
                  >
                    {performance.efficiency}%
                  </motion.div>
                  <div className="text-xs text-gray-400">EFF</div>
                </div>
                <div>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                    className="text-yellow-400 text-sm font-mono"
                  >
                    {performance.power}HP
                  </motion.div>
                  <div className="text-xs text-gray-400">POWER</div>
                </div>
              </div>
            </motion.div>

            {/* Company Branding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 10px rgba(6,182,212,0.5)",
                    "0 0 30px rgba(6,182,212,1)",
                    "0 0 10px rgba(6,182,212,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-cyan-300 tracking-wider mb-2"
              >
                SPECIAL PUMPS
              </motion.div>
              <div className="text-sm text-gray-400 tracking-wide">
                INDUSTRIAL FLUID DYNAMICS IN ACTION
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  )
}
