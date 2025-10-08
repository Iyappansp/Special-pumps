"use client"

import { motion } from 'framer-motion'

interface ComponentDetailsProps {
  component: string
  onClose: () => void
}

export default function ComponentDetails({ component, onClose }: ComponentDetailsProps) {
  const componentData: Record<string, any> = {
    'tank': {
      title: 'Storage Tank',
      category: 'Primary Storage',
      specs: [
        { label: 'Capacity', value: '500L', unit: 'Liters' },
        { label: 'Material', value: 'SS304', unit: 'Grade' },
        { label: 'Pressure Rating', value: '3 Bar', unit: 'Maximum' },
        { label: 'Temperature', value: '120°C', unit: 'Maximum' }
      ],
      description: 'Primary chemical storage with level monitoring and overflow protection system.',
      features: [
        'Automated level monitoring',
        'Overflow protection system', 
        'Corrosion-resistant coating',
        'Emergency drain valve'
      ],
      maintenance: [
        { task: 'Level sensor calibration', frequency: 'Monthly' },
        { task: 'Seal inspection', frequency: 'Quarterly' },
        { task: 'Internal cleaning', frequency: 'Annually' },
        { task: 'Pressure test', frequency: 'Bi-annually' }
      ],
      icon: '🏢',
      color: '#3b82f6'
    },
    'pump': {
      title: 'Centrifugal Pump',
      category: 'Primary Equipment',
      specs: [
        { label: 'Flow Rate', value: '150 m³/h', unit: 'Maximum' },
        { label: 'Head', value: '25m', unit: 'Total Dynamic' },
        { label: 'Efficiency', value: '78%', unit: 'Peak' },
        { label: 'Suction Size', value: 'DN100', unit: 'Nominal' }
      ],
      description: 'High-efficiency centrifugal pump with back-pullout design for easy maintenance access.',
      features: [
        'Back-pullout design',
        'Replaceable wear rings',
        'Mechanical seal system',
        'Vibration monitoring'
      ],
      maintenance: [
        { task: 'Bearing lubrication', frequency: 'Every 3 months' },
        { task: 'Impeller clearance check', frequency: 'Every 6 months' },
        { task: 'Mechanical seal inspection', frequency: 'Annually' },
        { task: 'Vibration analysis', frequency: 'Quarterly' }
      ],
      icon: '⚙️',
      color: '#f59e0b'
    },
    'motor': {
      title: 'Electric Motor',
      category: 'Drive System',
      specs: [
        { label: 'Power', value: '3HP/5HP', unit: 'Variable' },
        { label: 'Speed', value: '1450 RPM', unit: 'Synchronous' },
        { label: 'Efficiency', value: '92%', unit: 'IE3 Class' },
        { label: 'Voltage', value: '415V', unit: '3-Phase' }
      ],
      description: 'Premium efficiency motor with thermal protection and soft-start capability.',
      features: [
        'Thermal overload protection',
        'Soft-start capability',
        'IP55 ingress protection',
        'Low vibration design'
      ],
      maintenance: [
        { task: 'Terminal connections check', frequency: 'Monthly' },
        { task: 'Air filter cleaning', frequency: 'Every 2 months' },
        { task: 'Thermal protection test', frequency: 'Annually' },
        { task: 'Insulation resistance test', frequency: 'Annually' }
      ],
      icon: '⚡',
      color: '#10b981'
    },
    'suction-valve': {
      title: 'Suction Control Valve',
      category: 'Flow Control',
      specs: [
        { label: 'Size', value: 'DN50', unit: 'Nominal Diameter' },
        { label: 'Pressure Rating', value: '10 Bar', unit: 'Maximum' },
        { label: 'Material', value: 'SS316', unit: 'Body & Trim' },
        { label: 'End Connection', value: 'Flanged', unit: 'Type' }
      ],
      description: 'Primary suction isolation valve with full bore design for minimal pressure drop.',
      features: [
        'Full bore design',
        'Position indicator',
        'Fire-safe construction',
        'Blowout-proof stem'
      ],
      maintenance: [
        { task: 'Operation test', frequency: 'Weekly' },
        { task: 'Packing adjustment', frequency: 'Every 3 months' },
        { task: 'Seat leakage test', frequency: 'Every 6 months' },
        { task: 'Complete overhaul', frequency: 'Every 2 years' }
      ],
      icon: '🔧',
      color: '#ef4444'
    },
    'discharge-valve': {
      title: 'Discharge Control Valve',
      category: 'Flow Control', 
      specs: [
        { label: 'Size', value: 'DN50', unit: 'Nominal Diameter' },
        { label: 'Pressure Rating', value: '16 Bar', unit: 'Maximum' },
        { label: 'Material', value: 'SS316', unit: 'Body & Trim' },
        { label: 'Actuation', value: 'Manual', unit: 'Operation' }
      ],
      description: 'Discharge control valve for flow regulation and system isolation.',
      features: [
        'Pressure regulation',
        'Quick-close design',
        'Corrosion resistant',
        'Easy maintenance access'
      ],
      maintenance: [
        { task: 'Flow calibration', frequency: 'Monthly' },
        { task: 'Actuator lubrication', frequency: 'Every 3 months' },
        { task: 'Seal replacement', frequency: 'Annually' },
        { task: 'Pressure test', frequency: 'Annually' }
      ],
      icon: '🎛️',
      color: '#8b5cf6'
    }
  }

  const data = componentData[component] || componentData['pump']

  return (
    <motion.div
      className="component-details"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.div 
        className="details-header"
        style={{ ['--bg-color' as any]: data.color, ['--bg-color-light' as any]: data.color }}
      >
        <div className="header-content">
          <div className="header-icon">{data.icon}</div>
          <div className="header-text">
            <h3 className="details-title">{data.title}</h3>
            <span className="details-category">{data.category}</span>
          </div>
        </div>
        <motion.button 
          onClick={onClose}
          className="close-btn"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
          </svg>
        </motion.button>
      </motion.div>
      
      {/* Content */}
      <div className="details-content">
        {/* Description */}
        <motion.div 
          className="description-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="details-description">{data.description}</p>
        </motion.div>

        {/* Specifications Grid */}
        <motion.div 
          className="specs-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="section-title">
            <span className="title-icon">📊</span>
            Technical Specifications
          </h4>
          <div className="specs-grid">
            {data.specs.map((spec: any, index: number) => (
              <motion.div 
                key={index} 
                className="spec-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">
                  <span className="value">{spec.value}</span>
                  <span className="unit">{spec.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="features-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="section-title">
            <span className="title-icon">✨</span>
            Key Features
          </h4>
          <div className="features-grid">
            {data.features.map((feature: string, index: number) => (
              <motion.div 
                key={index} 
                className="feature-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">●</div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Maintenance Schedule */}
        <motion.div 
          className="maintenance-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="section-title">
            <span className="title-icon">🔧</span>
            Maintenance Schedule
          </h4>
          <div className="maintenance-list">
            {data.maintenance.map((item: any, index: number) => (
              <motion.div 
                key={index} 
                className="maintenance-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255, 107, 0, 0.05)' }}
              >
                <div className="maintenance-task">{item.task}</div>
                <div className="maintenance-frequency">{item.frequency}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
