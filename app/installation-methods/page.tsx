'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout/Layout'
import ComponentDetails from '@/components/ComponentDetails'
import { div } from 'framer-motion/client'
import Link from "next/link"

import Cta2 from '@/components/sections/Cta2'
export default function InstallationMethodsPage() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isFlowing, setIsFlowing] = useState<boolean>(false)
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const diagramRef = useRef<HTMLElement | null>(null)
  const steps = [
    { 
      id: 'silicate', 
      title: 'Silicate Pump Setup', 
      description: 'Main pump assembly with tank connection',
      duration: '15 min',
      complexity: 'Basic'
    },
    { 
      id: 'caustic', 
      title: 'Caustic Soda Lye System', 
      description: '3HP pump with bypass configuration',
      duration: '25 min', 
      complexity: 'Intermediate'
    },
    { 
      id: 'quartz', 
      title: 'Quartz Powder Transfer', 
      description: '5HP high-capacity slurry pump',
      duration: '35 min',
      complexity: 'Advanced'
    }
  ]

  const handleStepChange = async (index: number) => {
    if (index === activeStep) return
     setIsLoading(true)
     setIsFlowing(false)
     setTimeout(() => {
      setActiveStep(index)
      setIsLoading(false)
    }, 600)
  }

  // Toggle flow and, when starting, smoothly scroll to diagram
  const handleFlowToggle = () => {
    if (isLoading) return
    const willFlow = !isFlowing
    setIsFlowing(willFlow)
    if (willFlow) {
      // slight delay to ensure layout is stable before scrolling
      setTimeout(() => {
        diagramRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }
  return (
    <Layout headerStyle={4} footerStyle={4}>
      {/* Hero Section with Integrated Controls */}
        <div className="hero-inner-section-area-sidebar">
						<img src="/property/hero-img.webp" alt="Special Pumps" className="hero-img1" />
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="hero-header-area text-center">
										<Link href="/">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z">
												</path>
											</svg>Installation Methods</Link>
										<div className="space24" />
										<h1>Installation Methods</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
      <section className="installation-hero">
        <div className="hero-background">
          <div className="hero-overlay" />
        </div>
        
        <div className="container">
          <div className="installation-header">
            {/* Hero Content */}
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              <span className="hero-badge">Installation Methods</span>
              <h1 className="hero-title">
                Interactive Pump &
                Installation Guide
                <span className="title-highlight"> </span>
              </h1>
              <p className="hero-description">
                Step-by-step visual guide for industrial pump installation with real-time simulation and technical specifications.
              </p>
            </motion.div>

            {/* Integrated Control Panel */}
            <motion.div 
              className="hero-controls"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="controls-card">
                <div className="controls-header">
                  <h3>Installation Control</h3>
                  <div className="status-badge">
                    <div className={`status-dot ${isFlowing ? 'active' : ''}`} />
                    <span>{isFlowing ? 'Active' : 'Idle'}</span>
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="step-navigation">
                  {steps.map((step, index) => (
                    <motion.button
                      key={step.id}
                      onClick={() => handleStepChange(index)}
                      className={`nav-step ${activeStep === index ? 'active' : ''}`}
                      disabled={isLoading}
                      whileHover={{ scale: activeStep !== index ? 1.02 : 1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="step-indicator">{index + 1}</div>
                      <div className="step-info">
                        <span className="step-name">{step.title}</span>
                        <div className="step-meta">
                          <span className="duration">{step.duration}</span>
                          <span className={`complexity ${step.complexity.toLowerCase()}`}>
                            {step.complexity}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Flow Control */}
                <div className="flow-control">
                  <motion.button
                    onClick={handleFlowToggle}
                    className={`flow-btn ${isFlowing ? 'active' : ''}`}
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="flow-icon"
                      animate={{ rotate: isFlowing ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {isFlowing ? '⏸️' : '▶️'}
                    </motion.div>
                    <span>{isFlowing ? 'Stop Flow' : 'Start Flow'}</span>
                  </motion.button>

                  <div className="metrics">
                    <div className="metric">
                      <span className="label">Flow</span>
                      <span className="value">{isFlowing ? '150' : '0'} m³/h</span>
                    </div>
                    <div className="metric">
                      <span className="label">Pressure</span>
                      <span className="value">{isFlowing ? '2.5' : '0.0'} Bar</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Installation Diagram */}
      <section className="installation-diagram" ref={diagramRef}>
        <div className="container">
          <motion.div 
            className="diagram-wrapper"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="diagram-header">
              <h2>{steps[activeStep].title}</h2>
              <p>{steps[activeStep].description}</p>
            </div>

            <div className="diagram-container">
              <AnimatePresence mode="wait">
                {/* <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="svg-container"
                > */}
                  <AnimatedInstallationSVG 
                    activeStep={activeStep}
                    isFlowing={isFlowing}
                    onComponentClick={setSelectedComponent}
                    steps={steps}
                    isLoading={isLoading}
                  />
                {/* </motion.div> */}
              </AnimatePresence>

              {/* Instructions */}
              <div className="diagram-instructions">
                <div className="instruction-item">
                  <span className="icon">🎯</span>
                  <span>Click components for details</span>
                </div>
                <div className="instruction-item">
                  <span className="icon">⚡</span>
                  <span>Use flow control to simulate</span>
                </div>
                <div className="instruction-item">
                  <span className="icon">📊</span>
                  <span>Monitor real-time metrics</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component Details Panel */}
      <AnimatePresence>
        {selectedComponent && (
          <motion.div
            className="component-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedComponent(null)}
          >
            <motion.div
              className="component-panel"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ComponentDetails 
                component={selectedComponent} 
                onClose={() => setSelectedComponent(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="loading-spinner" />
            <p>Loading {steps[activeStep]?.title}...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <Cta2 />

    </Layout>
  )
}

// Ultra-clean, spacious and accurate installation SVG (new primary)
// Temporarily disabled block (we'll re-add the ultra-clean version in smaller patches)

type AnimatedProps = {
  activeStep: number
  isFlowing: boolean
  onComponentClick: (name: string) => void
  steps: Array<{ id: string; title: string; description: string }>
  isLoading: boolean
}

// Temporary wrapper: use existing implementation while we finalize the ultra-clean block
function AnimatedInstallationSVG(props: AnimatedProps) {
  return <AnimatedInstallationSVG_Clean {...props} />
}

// Ultra-clean, spacious and accurate installation SVG (new clean implementation - PART 1)
function AnimatedInstallationSVG_Clean({
  activeStep,
  isFlowing,
  onComponentClick,
  steps,
  isLoading,
}: AnimatedProps) {
  const configs = [
    { title: 'Silicate Pump Setup', flowRate: isFlowing ? '100' : '0', pressure: isFlowing ? '2.0' : '0.0', color: '#3b82f6' },
    { title: 'Caustic Soda Lye System', flowRate: isFlowing ? '150' : '0', pressure: isFlowing ? '2.5' : '0.0', color: '#f59e0b' },
    { title: 'Quartz Powder Transfer', flowRate: isFlowing ? '120' : '0', pressure: isFlowing ? '3.5' : '0.0', color: '#8b5cf6' },
  ] as const

  const config = configs[activeStep] ?? configs[0]

  return (
    <motion.svg
      viewBox="0 0 1000 500"
      className="installation-svg-clean"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0.3 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={config.color} stopOpacity="0.3" />
          <stop offset="50%" stopColor={config.color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={config.color} stopOpacity="0.3" />
        </linearGradient>

        <g id="pumpImpeller">
          <circle cx="0" cy="0" r="18" fill="#2d3748" stroke="#4a5568" strokeWidth="3" />
          <path d="M-12,-12 L12,12 M-12,12 L12,-12" stroke="#63b3ed" strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="0" r="8" fill="#4a5568" />
          {isFlowing && (
            <animateTransform attributeName="transform" type="rotate" values="0;360" dur="1s" repeatCount="indefinite" />
          )}
        </g>

        <filter id="shadowFilter">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern id="cleanGrid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f7fafc" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Clean Background */}
      <rect width="100%" height="100%" fill="#ffffff" />
      <rect width="100%" height="100%" fill="url(#cleanGrid)" />

      {/* Technical Header Bar */}
      <rect x="50" y="30" width="900" height="50" fill="rgba(255,255,255,0.95)" stroke={config.color} strokeWidth="2" rx="12" filter="url(#shadowFilter)" />
      <text x="80" y="58" className="tech-header" fill={config.color}>Flow Rate: {config.flowRate} m³/h</text>
      <text x="300" y="58" className="tech-header" fill={config.color}>Pressure: {config.pressure} Bar</text>
      <text x="500" y="58" className="tech-header" fill={config.color}>{activeStep === 0 ? 'BASIC SYSTEM' : activeStep === 1 ? 'BYPASS SYSTEM' : 'SLURRY SYSTEM'}</text>

      {/* STEP 1 - Silicate System (Ultra-clean) */}
      {activeStep === 0 && (
        <g className="silicate-clean-system">
          {/* Storage Tank */}
          <rect x="100" y="150" width="120" height="140" fill="white" stroke={config.color} strokeWidth="4" rx="10" filter="url(#shadowFilter)" />
          
          {/* Water Level */}
          <motion.rect x="110" y="230" width="100" fill="url(#waterGradient)" initial={{ height: 0 }} animate={{ height: isFlowing ? 50 : 30 }} transition={{ duration: 2, ease: 'easeInOut' }} rx="5" />

          {/* Tank Label */}
          <text x="160" y="135" textAnchor="middle" className="tank-title">Silicate Tank</text>

          {/* Level Indicator */}
          <rect x="240" y="150" width="15" height="140" fill="white" stroke="#718096" strokeWidth="2" rx="7" />
          <motion.rect x="243" y="230" width="9" fill={config.color} initial={{ height: 0 }} animate={{ height: isFlowing ? 50 : 30 }} transition={{ duration: 2, ease: 'easeInOut' }} rx="4" />
          <text x="270" y="170" className="level-label">Level</text>

          {/* Pump Assembly */}
          <rect x="350" y="200" width="100" height="60" fill="#2d3748" stroke="#4a5568" strokeWidth="3" rx="8" filter="url(#shadowFilter)" />
          <use href="#pumpImpeller" x="400" y="230" />

          {/* Pumps */}
          <rect x="480" y="190" width="80" height="80" fill="#4a5568" stroke="#2d3748" strokeWidth="3" rx="8" filter="url(#shadowFilter)" />
          {[...Array(6)].map((_, i) => (
            <line key={i} x1={490 + i * 12} y1="195" x2={490 + i * 12} y2="265" stroke="#718096" strokeWidth="2" />
          ))}
          <text x="400" y="180" textAnchor="middle" className="pump-label">Pump 2HP</text>
          <text x="520" y="175" textAnchor="middle" className="Pumps-label">Pumps 1450 RPM</text>

          {/* Suction and Discharge Lines */}
          <path d="M 220 230 L 350 230" stroke={config.color} strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M 450 230 L 600 230 L 600 170 L 750 170" stroke={config.color} strokeWidth="12" strokeLinecap="round" fill="none" />

          {/* Valves */}
          <circle cx="280" cy="230" r="15" fill={isFlowing ? '#48bb78' : '#f56565'} stroke="white" strokeWidth="3" filter="url(#shadowFilter)" />
          <path d="M 272 222 L 288 238 M 272 238 L 288 222" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <text x="280" y="255" textAnchor="middle" className="valve-text">{isFlowing ? 'OPEN' : 'CLOSED'}</text>

          <circle cx="600" cy="200" r="15" fill={isFlowing ? '#48bb78' : '#f56565'} stroke="white" strokeWidth="3" filter="url(#shadowFilter)" />
          <path d="M 592 192 L 608 208 M 592 208 L 608 192" stroke="white" strokeWidth="3" strokeLinecap="round" />

          {/* Flow Animation */}
          {isFlowing && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="6"
                  fill={config.color}
                  opacity="0.7"
                  initial={{ cx: 220, opacity: 0.7 }}
                  animate={{ cx: 600, opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: 'linear' }}
                  cy="230"
                />
              ))}
            </>
          )}

          {/* Pressure Gauge */}
          <circle cx="700" cy="170" r="25" fill="white" stroke="#2d3748" strokeWidth="3" filter="url(#shadowFilter)" />
          <motion.path d="M 685 185 L 700 160 L 715 185" fill="none" stroke="#e53e3e" strokeWidth="4" strokeLinecap="round" animate={{ rotate: isFlowing ? [0, 25, 0] : 0 }} transition={{ duration: 2, repeat: isFlowing ? Infinity : 0 }} style={{ transformOrigin: '700px 170px' }} />
          <text x="700" y="140" textAnchor="middle" className="gauge-label">{config.pressure} Bar</text>
        </g>
      )}

      {/* STEP 2 - Caustic System with Bypass (Ultra-clean) */}
      {activeStep === 1 && (
        <g className="caustic-clean-system">
          {/* Main Tank */}
          <rect x="80" y="150" width="120" height="140" fill="white" stroke={config.color} strokeWidth="4" rx="10" filter="url(#shadowFilter)" />

          <motion.rect x="90" y="230" width="100" fill="url(#waterGradient)" initial={{ height: 0 }} animate={{ height: isFlowing ? 50 : 30 }} transition={{ duration: 2 }} rx="5" />

          <text x="140" y="135" textAnchor="middle" className="tank-title">Caustic Tank</text>

          {/* Reactor Tank */}
          <rect x="750" y="120" width="100" height="120" fill="white" stroke={config.color} strokeWidth="4" rx="10" filter="url(#shadowFilter)" />
          <motion.rect x="760" y="190" width="80" fill={config.color} opacity="0.6" initial={{ height: 0 }} animate={{ height: isFlowing ? 40 : 20 }} transition={{ duration: 2 }} rx="5" />
          <text x="800" y="110" textAnchor="middle" className="tank-title">Reactor Tank</text>

          {/* 3HP Pump */}
          <rect x="320" y="190" width="110" height="70" fill="#2d3748" stroke="#4a5568" strokeWidth="3" rx="8" filter="url(#shadowFilter)" />
          <use href="#pumpImpeller" x="375" y="225" />

          {/* 3HP Pumps */}
          <rect x="460" y="180" width="90" height="90" fill="#4a5568" stroke="#2d3748" strokeWidth="3" rx="8" filter="url(#shadowFilter)" />
          <text x="375" y="175" textAnchor="middle" className="pump-label">Pump 3HP</text>
          <text x="505" y="165" textAnchor="middle" className="Pumps-label">Pumps 1450 RPM</text>

          {/* Main Process Line */}
          <path d="M 200 225 L 320 225" stroke={config.color} strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M 430 225 L 600 225 L 600 180 L 750 180" stroke={config.color} strokeWidth="12" strokeLinecap="round" fill="none" />

          {/* Bypass Line */}
          <path d="M 430 225 Q 520 200 610 225 Q 680 250 750 225" stroke="#e53e3e" strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray="15,8" />
          <text x="590" y="270" textAnchor="middle" className="bypass-text">Bypass Line</text>

          {/* Valves */}
          <circle cx="260" cy="225" r="15" fill={isFlowing ? '#48bb78' : '#f56565'} stroke="white" strokeWidth="3" />
          <path d="M 252 217 L 268 233 M 252 233 L 268 217" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <circle cx="600" cy="200" r="15" fill={isFlowing ? '#48bb78' : '#f56565'} stroke="white" strokeWidth="3" />
          <path d="M 592 192 L 608 208 M 592 208 L 608 192" stroke="white" strokeWidth="3" strokeLinecap="round" />

          {/* Bypass Valve */}
          <circle cx="610" cy="240" r="12" fill="#3182ce" stroke="white" strokeWidth="2" />
          <text x="630" y="245" className="valve-small">BP</text>

          {/* Flow Animation */}
          {isFlowing && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.circle key={`main-${i}`} r="6" fill={config.color} opacity="0.8" initial={{ cx: 200, opacity: 0.8 }} animate={{ cx: 750, opacity: 0 }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.7, ease: 'linear' }} cy="225" />
              ))}
              {[...Array(2)].map((_, i) => (
                <motion.circle key={`bypass-${i}`} r="4" fill="#e53e3e" opacity="0.6" initial={{ cx: 430, opacity: 0.6 }} animate={{ cx: 750, opacity: 0 }} transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: 'linear' }} cy="235" />
              ))}
            </>
          )}
        </g>
      )}

      {/* STEP 3 - Quartz Slurry System with Filter Press (Ultra-clean) */}
      {activeStep === 2 && (
        <g className="quartz-clean-system">
          {/* Feed Tank */}
          <rect x="60" y="140" width="130" height="150" fill="white" stroke={config.color} strokeWidth="4" rx="10" filter="url(#shadowFilter)" />
          <motion.rect x="70" y="230" width="110" fill="url(#waterGradient)" initial={{ height: 0 }} animate={{ height: isFlowing ? 50 : 30 }} transition={{ duration: 2 }} rx="5" />
          <text x="125" y="125" textAnchor="middle" className="tank-title">Quartz Tank</text>
br
          {/* Collection Tank */}
          <rect x="700" y="100" width="110" height="140" fill="white" stroke={config.color} strokeWidth="4" rx="10" filter="url(#shadowFilter)" />
          <motion.rect x="710" y="180" width="90" fill={config.color} opacity="0.7" initial={{ height: 0 }} animate={{ height: isFlowing ? 50 : 25 }} transition={{ duration: 2 }} rx="5" />
          {/* <text x="755" y="85" textAnchor="middle" className="tank-title">Collection Tank</text> */}

          {/* Filter Press */}
          <rect x="650" y="320" width="160" height="80" fill="#f7fafc" stroke="#718096" strokeWidth="3" rx="8" filter="url(#shadowFilter)" />
          {[...Array(6)].map((_, i) => (
            <rect key={i} x={665 + i * 22} y={330} width={18} height={60} fill="#e2e8f0" stroke="#a0aec0" strokeWidth="1" />
          ))}
          <text x="730" y="310" textAnchor="middle" className="tank-title">Filter Press</text>

          {/* 5HP Pump and Pumps */}
          <rect x="280" y="180" width="120" height="80" fill="#2d3748" stroke="#4a5568" strokeWidth="4" rx="8" filter="url(#shadowFilter)" />
          <use href="#pumpImpeller" x="340" y="220" />
          <rect x="430" y="170" width="100" height="100" fill="#4a5568" stroke="#2d3748" strokeWidth="4" rx="8" filter="url(#shadowFilter)" />
          <text x="340" y="165" textAnchor="middle" className="pump-label">Pump 5HP</text>
          <text x="480" y="155" textAnchor="middle" className="Pumps-label">1450 RPM Pumps</text>

          {/* Lines */}
          <path d="M 190 220 L 280 220" stroke={config.color} strokeWidth="14" strokeLinecap="round" fill="none" />
          <path d="M 400 220 L 580 220 L 580 160 L 700 160" stroke={config.color} strokeWidth="14" strokeLinecap="round" fill="none" />
          <path d="M 755 240 L 755 320" stroke={config.color} strokeWidth="10" strokeLinecap="round" fill="none" />

          {/* Ball Valve */}
          <circle cx="755" cy="280" r="18" fill="#3182ce" stroke="white" strokeWidth="3" filter="url(#shadowFilter)" />
          <circle cx="755" cy="280" r="10" fill="white" />
          <text x="785" y="285" className="valve-text">Ball Valve (B)</text>

          {/* Main Valve */}
          <circle cx="230" cy="220" r="15" fill={isFlowing ? '#48bb78' : '#f56565'} stroke="white" strokeWidth="3" />
          <path d="M 222 212 L 238 228 M 222 228 L 238 212" stroke="white" strokeWidth="3" strokeLinecap="round" />

          {/* Flow Animation */}
          {isFlowing && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.circle key={`slurry-${i}`} r="8" fill={config.color} opacity="0.9" initial={{ cx: 190, opacity: 0.9 }} animate={{ cx: 700, opacity: 0.3 }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.8, ease: 'linear' }} cy="220" />
              ))}
              {[...Array(3)].map((_, i) => (
                <motion.circle key={`filter-${i}`} r="5" fill={config.color} opacity="0.7" initial={{ cy: 240, opacity: 0.7 }} animate={{ cy: 320, opacity: 0.3 }} transition={{ duration: 3, repeat: Infinity, delay: i * 1.2, ease: 'linear' }} cx="755" />
              ))}
            </>
          )}

          {/* High Pressure Gauge */}
          <circle cx="630" cy="160" r="30" fill="white" stroke="#2d3748" strokeWidth="4" filter="url(#shadowFilter)" />
          <motion.path d="M 610 180 L 630 140 L 650 180" fill="none" stroke="#e53e3e" strokeWidth="4" strokeLinecap="round" animate={{ rotate: isFlowing ? [0, 35, 0] : 0 }} transition={{ duration: 1.5, repeat: isFlowing ? Infinity : 0 }} style={{ transformOrigin: '630px 160px' }} />
          <text x="630" y="125" textAnchor="middle" className="gauge-label">{config.pressure} Bar</text>
        </g>
      )}

      {/* Interactive Hotspots (Ultra-clean) */}
      <g className="interactive-hotspots">
        {/* Tank */}
        <motion.circle className="clean-hotspot" cx={activeStep === 0 ? 160 : activeStep === 1 ? 140 : 125} cy={215} r={12} fill="rgba(56, 178, 172, 0.3)" stroke="#38b2ac" strokeWidth={3} whileHover={{ r: 18, fill: 'rgba(56, 178, 172, 0.6)' }} onClick={() => onComponentClick('tank')} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} />
        {/* Pump */}
        <motion.circle className="clean-hotspot" cx={activeStep === 0 ? 400 : activeStep === 1 ? 375 : 340} cy={activeStep === 0 ? 230 : activeStep === 1 ? 225 : 220} r={12} fill="rgba(56, 178, 172, 0.3)" stroke="#38b2ac" strokeWidth={3} whileHover={{ r: 18, fill: 'rgba(56, 178, 172, 0.6)' }} onClick={() => onComponentClick('pump')} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: 'spring' }} />
        {/* Pumps */}
        <motion.circle className="clean-hotspot" cx={activeStep === 0 ? 520 : activeStep === 1 ? 505 : 480} cy={activeStep === 0 ? 230 : activeStep === 1 ? 225 : 220} r={12} fill="rgba(56, 178, 172, 0.3)" stroke="#38b2ac" strokeWidth={3} whileHover={{ r: 18, fill: 'rgba(56, 178, 172, 0.6)' }} onClick={() => onComponentClick('Pumps')} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: 'spring' }} />
      </g>

      {/* Smooth Bubble Effects inside tank */}
      {isFlowing && (
        <g className="bubble-effects">
          {[...Array(4)].map((_, i) => (
            <motion.circle key={i} r={3} fill="#81e6d9" opacity={0.6} cx={activeStep === 0 ? 160 : activeStep === 1 ? 140 : 125} initial={{ cy: 260, opacity: 0.6 }} animate={{ cy: 200, opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.7, ease: 'easeOut' }} />
          ))}
        </g>
      )}
    </motion.svg>
  )
}

// Perfect, technically accurate installation SVG
function AnimatedInstallationSVG_Oldv2({ 
  activeStep, 
  isFlowing, 
  onComponentClick, 
  steps, 
  isLoading 
}: AnimatedProps) {
  const configs = [
    {
      title: 'Silicate Pump Setup',
      systemType: 'BASIC SYSTEM',
      flowRate: isFlowing ? '100 m³/h' : '0 m³/h',
      pressure: isFlowing ? '2.0 Bar' : '0 Bar',
      color: '#3b82f6',
    },
    {
      title: 'Caustic Soda Lye System',
      systemType: 'BYPASS SYSTEM',
      flowRate: isFlowing ? '150 m³/h' : '0 m³/h',
      pressure: isFlowing ? '2.5 Bar' : '0 Bar',
      color: '#f59e0b',
    },
    {
      title: 'Quartz Powder Transfer',
      systemType: 'SLURRY SYSTEM',
      flowRate: isFlowing ? '120 m³/h' : '0 m³/h',
      pressure: isFlowing ? '3.5 Bar' : '0 Bar',
      color: '#8b5cf6',
    },
  ] as const

  const config = configs[activeStep]

  return (
    <motion.svg 
      viewBox="0 0 800 400" 
      className="installation-svg"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0.3 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <defs>
        <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={config.color} stopOpacity="0.8" />
          <stop offset="50%" stopColor={config.color} stopOpacity="1" />
          <stop offset="100%" stopColor={config.color} stopOpacity="0.8" />
        </linearGradient>

        <g id="impellerRotor">
          <circle cx="0" cy="0" r="12" fill="#374151" stroke="#4b5563" strokeWidth="2" />
          <path d="M-8,-8 L8,8 M-8,8 L8,-8 M0,-10 L0,10 M-10,0 L10,0" 
                stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
          {isFlowing && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0;360"
              dur="0.8s"
              repeatCount="indefinite"
            />
          )}
        </g>

        <filter id="dropShadow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Flow particles path */}
        <path id="flowPath" d="M 120 200 L 200 200 L 280 200 L 320 200 L 400 200 L 500 200" fill="none" />
      </defs>

      {/* Clean Background */}
      <rect width="100%" height="100%" fill="#fafbfc" />
      
      {/* Grid Pattern */}
      <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#gridPattern)" />

      {/* Technical Info Bar */}
      <rect x="20" y="20" width="760" height="40" 
            fill="rgba(255,255,255,0.95)" stroke={config.color} strokeWidth="2" rx="8" />
      <text x="40" y="45" className="info-text" fill={config.color} fontWeight="700">
        Flow Rate: {config.flowRate}
      </text>
      <text x="200" y="45" className="info-text" fill={config.color} fontWeight="700">
        Pressure: {config.pressure}
      </text>
      <text x="350" y="45" className="info-text" fill={config.color} fontWeight="700">
        {config.systemType}
      </text>

      {/* STEP 1: SILICATE PUMP SETUP */}
      {activeStep === 0 && (
        <g className="silicate-system">
          {/* Main Tank */}
          <rect x="60" y="120" width="100" height="120" 
                fill="white" stroke={config.color} strokeWidth="3" rx="8" 
                filter="url(#dropShadow)" />
          
          {/* Liquid Level */}
          <motion.rect
            x="70" y="190"
            width="80" 
            fill="url(#liquidGradient)"
            initial={{ height: 0 }}
            animate={{ height: isFlowing ? 40 : 25 }}
            transition={{ duration: 1 }}
            rx="4"
          />

          {/* Tank Label */}
          <text x="110" y="110" textAnchor="middle" className="component-title">
            Silicate Tank
          </text>

          {/* Level Indicator */}
          <rect x="170" y="120" width="8" height="120" fill="white" stroke="#6b7280" strokeWidth="2" rx="4" />
          <motion.rect
            x="172" y="190"
            width="4"
            fill={config.color}
            initial={{ height: 0 }}
            animate={{ height: isFlowing ? 40 : 25 }}
            transition={{ duration: 1 }}
            rx="2"
          />
          <text x="185" y="135" className="small-label">Level</text>

          {/* Pump Assembly */}
          <rect x="250" y="180" width="70" height="40" 
                fill="#1f2937" stroke="#374151" strokeWidth="2" rx="6" />
          <use href="#impellerRotor" x="285" y="200" />
          
          {/* Pumps */}
          <rect x="340" y="175" width="60" height="50" 
                fill="#374151" stroke="#4b5563" strokeWidth="2" rx="4" />
          <text x="370" y="165" textAnchor="middle" className="component-label">2HP Pumps</text>

          {/* Suction Pipe */}
          <path d="M 160 200 L 250 200" 
                stroke={config.color} strokeWidth="8" strokeLinecap="round" fill="none" />
          
          {/* Discharge Pipe */}
          <path d="M 320 200 L 450 200 L 450 150 L 550 150" 
                stroke={config.color} strokeWidth="8" strokeLinecap="round" fill="none" />

          {/* Suction Valve */}
          <circle cx="200" cy="200" r="10" fill={isFlowing ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="2" />
          <path d="M 195 195 L 205 205 M 195 205 L 205 195" stroke="white" strokeWidth="2" />
          <text x="200" y="220" textAnchor="middle" className="valve-status">
            {isFlowing ? 'OPEN' : 'CLOSED'}
          </text>

          {/* Discharge Valve */}
          <circle cx="450" cy="175" r="10" fill={isFlowing ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="2" />
          <path d="M 445 170 L 455 180 M 445 180 L 455 170" stroke="white" strokeWidth="2" />

          {/* Flow Animation */}
          {isFlowing && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill={config.color}
                  opacity="0.8"
                  initial={{ x: 160, opacity: 0.8 }}
                  animate={{ x: 450, opacity: 0 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: 'linear'
                  }}
                  cy="200"
                />
              ))}
            </>
          )}

          {/* Pressure Gauge */}
          <circle cx="500" cy="150" r="15" fill="white" stroke="#374151" strokeWidth="2" />
          <motion.path 
            d="M 495 155 L 500 145 L 505 155" 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="2" 
            animate={{ rotate: isFlowing ? [0, 20, 0] : 0 }}
            transition={{ duration: 2, repeat: isFlowing ? Infinity : 0 }}
            style={{ transformOrigin: '500px 150px' }}
          />
        </g>
      )}

      {/* STEP 2: CAUSTIC SODA LYE SYSTEM */}
      {activeStep === 1 && (
        <g className="caustic-system">
          {/* Main Caustic Tank */}
          <rect x="40" y="120" width="100" height="120" 
                fill="white" stroke={config.color} strokeWidth="3" rx="8" 
                filter="url(#dropShadow)" />
          
          <motion.rect
            x="50" y="190"
            width="80"
            fill="url(#liquidGradient)"
            initial={{ height: 0 }}
            animate={{ height: isFlowing ? 40 : 25 }}
            transition={{ duration: 1 }}
            rx="4"
          />

          <text x="90" y="110" textAnchor="middle" className="component-title">
            Caustic Tank
          </text>

          {/* Reactor Tank */}
          <rect x="600" y="100" width="80" height="100" 
                fill="white" stroke={config.color} strokeWidth="3" rx="8" 
                filter="url(#dropShadow)" />
          
          <motion.rect
            x="610" y="160"
            width="60"
            fill={config.color}
            opacity="0.6"
            initial={{ height: 0 }}
            animate={{ height: isFlowing ? 30 : 15 }}
            transition={{ duration: 1 }}
            rx="4"
          />

          <text x="640" y="90" textAnchor="middle" className="component-title">
            Reactor Tank
          </text>

          {/* 3HP Pump (Larger) */}
          <rect x="230" y="175" width="80" height="50" 
                fill="#1f2937" stroke="#374151" strokeWidth="2" rx="6" />
          <use href="#impellerRotor" x="270" y="200" />
          
          {/* 3HP Pumps (Larger) */}
          <rect x="330" y="170" width="70" height="60" 
                fill="#374151" stroke="#4b5563" strokeWidth="2" rx="4" />
          <text x="365" y="160" textAnchor="middle" className="component-label">3HP Pumps</text>

          {/* Main Process Line */}
          <path d="M 140 200 L 230 200" 
                stroke={config.color} strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M 310 200 L 450 200 L 450 150 L 600 150" 
                stroke={config.color} strokeWidth="8" strokeLinecap="round" fill="none" />
          
          {/* Bypass Line (Red Dashed) */}
          <path d="M 310 200 Q 380 180 450 200 Q 520 220 600 200" 
                stroke="#ef4444" strokeWidth="6" strokeLinecap="round" fill="none" 
                strokeDasharray="10,5" />
          <text x="450" y="235" textAnchor="middle" className="bypass-label">Bypass Line</text>

          {/* Valves */}
          <circle cx="180" cy="200" r="10" fill={isFlowing ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="2" />
          <path d="M 175 195 L 185 205 M 175 205 L 185 195" stroke="white" strokeWidth="2" />
          
          <circle cx="450" cy="175" r="10" fill={isFlowing ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="2" />
          <path d="M 445 170 L 455 180 M 445 180 L 455 170" stroke="white" strokeWidth="2" />

          {/* Bypass Control Valve */}
          <circle cx="450" cy="215" r="8" fill="#3b82f6" stroke="white" strokeWidth="2" />
          <text x="465" y="220" className="small-label">Bypass</text>

          {/* Flow Animation */}
          {isFlowing && (
            <>
              {/* Main flow */}
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={`main-${i}` }
                  r="3"
                  fill={config.color}
                  opacity="0.8"
                  initial={{ x: 140, opacity: 0.8 }}
                  animate={{ x: 600, opacity: 0 }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    delay: i * 0.6,
                    ease: 'linear'
                  }}
                  cy="200"
                />
              ))}
              
              {/* Bypass flow */}
              {[...Array(2)].map((_, i) => (
                <motion.circle
                  key={`bypass-${i}` }
                  r="2"
                  fill="#ef4444"
                  opacity="0.6"
                  initial={{ x: 310, opacity: 0.6 }}
                  animate={{ x: 600, opacity: 0 }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: 'linear'
                  }}
                  cy="210"
                />
              ))}
            </>
          )}
        </g>
      )}

      {/* STEP 3: QUARTZ POWDER TRANSFER */}
      
      {activeStep === 2 && (
        <g className="quartz-system">
              

          {/* Quartz Feed Tank */}
          <rect x="30" y="110" width="110" height="130" 
                fill="white" stroke={config.color} strokeWidth="3" rx="8" 
                filter="url(#dropShadow)" />
          
          <motion.rect
            x="40" y="190"
            width="90"
            fill="url(#liquidGradient)"
            initial={{ height: 0 }}
            animate={{ height: isFlowing ? 40 : 25 }}
            transition={{ duration: 1 }}
            rx="4"
          />

          <text x="85" y="100" textAnchor="middle" className="component-title">
            Quartz Tank
          </text>

          {/* Collection Tank */}
          <rect x="580" y="80" width="90" height="120" 
                fill="white" stroke={config.color} strokeWidth="3" rx="8" 
                filter="url(#dropShadow)" />
          
          <motion.rect
            x="590" y="150"
            width="70"
            fill={config.color}
            opacity="0.7"
            initial={{ height: 0 }}
            animate={{ height: isFlowing ? 35 : 20 }}
            transition={{ duration: 1 }}
            rx="4"
          />
                      
          <text x="625" y="70" textAnchor="middle" className="component-title">
            Collection Tank
          </text>

          {/* Filter Press */}
          <rect x="520" y="260" width="120" height="60" 
                fill="#f3f4f6" stroke="#6b7280" strokeWidth="2" rx="6" />
          
          {/* Filter Plates */}
          {[...Array(5)].map((_, i) => (
            <rect key={i} x={530 + i * 20} y="270" width="16" height="40" 
                  fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
          ))}
          
          <text x="580" y="250" textAnchor="middle" className="component-title">
            Filter Press
          </text>

          {/* 5HP Heavy Duty Pump */}
          <rect x="220" y="170" width="90" height="60" 
                fill="#1f2937" stroke="#374151" strokeWidth="3" rx="6" />
          <use href="#impellerRotor" x="265" y="200" />
          
          {/* 5HP Pumps (Largest) */}
          <rect x="330" y="160" width="80" height="80" 
                fill="#374151" stroke="#4b5563" strokeWidth="3" rx="4" />
          <text x="370" y="150" textAnchor="middle" className="component-label">5HP 1450 RPM</text>

          {/* Main Transfer Line */}
          <path d="M 140 200 L 220 200" 
                stroke={config.color} strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M 310 200 L 480 200 L 480 130 L 580 130" 
                stroke={config.color} strokeWidth="10" strokeLinecap="round" fill="none" />
          
          {/* Filter Feed Line */}
          <path d="M 625 200 L 625 260" 
                stroke={config.color} strokeWidth="8" strokeLinecap="round" fill="none" />

          {/* Ball Valve */}
          <circle cx="625" cy="230" r="12" fill="#3b82f6" stroke="white" strokeWidth="2" />
          <circle cx="625" cy="230" r="6" fill="white" />
          <text x="645" y="235" className="small-label">Ball Valve (B)</text>

          {/* Main Valves */}
          <circle cx="175" cy="200" r="10" fill={isFlowing ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="2" />
          <path d="M 170 195 L 180 205 M 170 205 L 180 195" stroke="white" strokeWidth="2" />
          
          <circle cx="480" cy="165" r="10" fill={isFlowing ? '#22c55e' : '#ef4444'} stroke="white" strokeWidth="2" />
          <path d="M 475 160 L 485 170 M 475 170 L 485 160" stroke="white" strokeWidth="2" />

          {/* Slurry Flow Animation (Slower, Denser) */}
          {isFlowing && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={`slurry-${i}` }
                  r="4"
                  fill={config.color}
                  opacity="0.9"
                  initial={{ x: 140, opacity: 0.9 }}
                  animate={{ x: 580, opacity: 0.3 }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    delay: i * 0.7,
                    ease: 'linear'
                  }}
                  cy="200"
                />
              ))}
              
              {/* Filter flow */}
              {[...Array(2)].map((_, i) => (
                <motion.circle
                  key={`filter-${i}` }
                  r="3"
                  fill={config.color}
                  opacity="0.7"
                  initial={{ cy: 200, opacity: 0.7 }}
                  animate={{ cy: 260, opacity: 0.3 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 1,
                    ease: 'linear'
                  }}
                  cx="625"
                />
              ))}
            </>
          )}

          {/* High Pressure Gauge */}
          <circle cx="520" cy="130" r="18" fill="white" stroke="#374151" strokeWidth="3" />
          <motion.path 
            d="M 510 140 L 520 120 L 530 140" 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="3" 
            animate={{ rotate: isFlowing ? [0, 30, 0] : 0 }}
            transition={{ duration: 1.5, repeat: isFlowing ? Infinity : 0 }}
            style={{ transformOrigin: '520px 130px' }}
          />
          <text x="520" y="105" textAnchor="middle" className="small-label">3.5 Bar</text>
        </g>
      )}

      {/* Interactive Hotspots */}
      <g className="hotspots">
        {/* Tank Hotspot */}
        <motion.circle
          className="hotspot-circle"
          cx={activeStep === 0 ? 110 : activeStep === 1 ? 90 : 85}
          cy="180"
          r="8"
          fill="rgba(34, 211, 238, 0.4)"
          stroke="#22d3ee"
          strokeWidth="2"
          whileHover={{ r: 12, fill: 'rgba(34, 211, 238, 0.8)' }}
          onClick={() => onComponentClick('tank')}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        />

        {/* Pump Hotspot */}
        <motion.circle
          className="hotspot-circle"
          cx={activeStep === 0 ? 285 : activeStep === 1 ? 270 : 265}
          cy="200"
          r="8"
          fill="rgba(34, 211, 238, 0.4)"
          stroke="#22d3ee"
          strokeWidth="2"
          whileHover={{ r: 12, fill: 'rgba(34, 211, 238, 0.8)' }}
          onClick={() => onComponentClick('pump')}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
        />

        {/* Pumps Hotspot */}
        <motion.circle
          className="hotspot-circle"
          cx={activeStep === 0 ? 370 : activeStep === 1 ? 365 : 370}
          cy="200"
          r="8"
          fill="rgba(34, 211, 238, 0.4)"
          stroke="#22d3ee"
          strokeWidth="2"
          whileHover={{ r: 12, fill: 'rgba(34, 211, 238, 0.8)' }}
          onClick={() => onComponentClick('Pumps')}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: 'spring' }}
        />
      </g>

      {/* Bubbles in Tank */}
      {isFlowing && (
        <g className="bubbles">
          {[...Array(3)].map((_, i) => (
            <motion.circle
              key={i}
              r="2"
              fill="#60a5fa"
              opacity="0.6"
              cx={activeStep === 0 ? 110 : activeStep === 1 ? 90 : 85}
              initial={{ cy: 220, opacity: 0.6 }}
              animate={{ cy: 190, opacity: 0 }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.5,
                ease: 'easeOut'
              }}
            />
          ))}
        </g>
      )}
    </motion.svg>
  )
  
}


