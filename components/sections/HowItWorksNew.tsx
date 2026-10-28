'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ACCENT = '#C8FF00'
const RED = '#e53e3e'

const steps = [
  {
    number: '01',
    heading: 'Share your brand',
    body: 'Share your product, your audience and what you want to achieve.',
  },
  {
    number: '02',
    heading: 'Approve the idea',
    body: 'We bring the concepts and creative direction. You approve what we make.',
  },
  {
    number: '03',
    heading: 'Get your videos',
    body: 'We produce, refine with your feedback and deliver ready to publish.',
  },
]

// Realistic Speedometer Component
function Speedometer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      if (isInView) {
        // Reset and animate when in view
        const duration = 3000
        const startTime = Date.now()
        
        const animate = () => {
          const elapsed = Date.now() - startTime
          const newProgress = Math.min((elapsed / duration) * 100, 100)
          setProgress(newProgress)
          
          if (newProgress < 100) {
            requestAnimationFrame(animate)
          }
        }
        
        animate()
      } else {
        // Reset when out of view
        setProgress(0)
      }
    }
  }, [isInView, mounted])

  // Calculate needle angle (starting at 220 degrees, ending at -40 degrees = 260 degree sweep)
  const startAngle = 220
  const endAngle = -40
  const needleAngle = startAngle + (progress / 100) * (endAngle - startAngle)

  // Generate major and minor tick marks
  const ticks = []
  const totalTicks = 26 // Major ticks every 10, minor in between
  
  for (let i = 0; i <= totalTicks; i++) {
    const angle = startAngle + (i / totalTicks) * (endAngle - startAngle)
    const isMajor = i % 5 === 0
    const outerRadius = 155
    const innerRadius = isMajor ? 135 : 145
    
    const x1 = Math.round((175 + outerRadius * Math.cos((angle * Math.PI) / 180)) * 100) / 100
    const y1 = Math.round((175 + outerRadius * Math.sin((angle * Math.PI) / 180)) * 100) / 100
    const x2 = Math.round((175 + innerRadius * Math.cos((angle * Math.PI) / 180)) * 100) / 100
    const y2 = Math.round((175 + innerRadius * Math.sin((angle * Math.PI) / 180)) * 100) / 100

    const progressAngle = startAngle + (progress / 100) * (endAngle - startAngle)
    const isActive = angle <= progressAngle

    ticks.push(
      <line
        key={`tick-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? (i / totalTicks > 0.75 ? RED : ACCENT) : 'rgba(255,255,255,0.15)'}
        strokeWidth={isMajor ? 2.5 : 1.5}
        strokeLinecap="round"
        style={{ transition: 'stroke 0.2s ease' }}
      />
    )

    // Add speed numbers for major ticks
    if (isMajor) {
      const speed = Math.round((i / totalTicks) * 300)
      const numRadius = 115
      const numX = Math.round((175 + numRadius * Math.cos((angle * Math.PI) / 180)) * 100) / 100
      const numY = Math.round((175 + numRadius * Math.sin((angle * Math.PI) / 180)) * 100) / 100
      
      ticks.push(
        <text
          key={`num-${i}`}
          x={numX}
          y={numY}
          fill={isActive ? '#fff' : 'rgba(255,255,255,0.3)'}
          fontSize="13"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ 
            transition: 'fill 0.2s ease',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          {speed}
        </text>
      )
    }
  }

  const currentSpeed = Math.round((progress / 100) * 300)

  if (!mounted) {
    return (
      <div ref={ref} className="relative w-full max-w-md mx-auto">
        <svg viewBox="0 0 350 350" className="w-full h-auto">
          <circle cx="175" cy="175" r="165" fill="rgba(15,15,15,1)" />
        </svg>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 350 350" className="w-full h-auto">
        <defs>
          {/* Radial gradient for depth */}
          <radialGradient id="gaugeGradient">
            <stop offset="0%" stopColor="rgba(20,20,20,1)" />
            <stop offset="70%" stopColor="rgba(10,10,10,1)" />
            <stop offset="100%" stopColor="rgba(5,5,5,1)" />
          </radialGradient>
          
          {/* Glow for active arc */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Inner shadow */}
          <filter id="innerShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer bezel ring */}
        <circle
          cx="175"
          cy="175"
          r="170"
          fill="none"
          stroke="rgba(100,100,100,0.3)"
          strokeWidth="1"
        />
        
        {/* Main gauge background */}
        <circle
          cx="175"
          cy="175"
          r="165"
          fill="url(#gaugeGradient)"
          filter="url(#innerShadow)"
        />

        {/* Inner dark circle */}
        <circle
          cx="175"
          cy="175"
          r="95"
          fill="rgba(15,10,10,0.9)"
        />

        {/* Subtle inner glow ring */}
        <circle
          cx="175"
          cy="175"
          r="95"
          fill="none"
          stroke="rgba(200,255,0,0.1)"
          strokeWidth="1"
        />

        {/* Active progress arc */}
        <motion.path
          d={`
            M ${175 + 145 * Math.cos((startAngle * Math.PI) / 180)} ${175 + 145 * Math.sin((startAngle * Math.PI) / 180)}
            A 145 145 0 ${progress > 50 ? 1 : 0} 1 
            ${175 + 145 * Math.cos((needleAngle * Math.PI) / 180)} ${175 + 145 * Math.sin((needleAngle * Math.PI) / 180)}
          `}
          fill="none"
          stroke={progress > 75 ? RED : ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{ transition: 'stroke 0.3s ease' }}
        />

        {/* Tick marks and numbers */}
        {ticks}

        {/* Center hub shadow */}
        <circle
          cx="175"
          cy="177"
          r="18"
          fill="rgba(0,0,0,0.4)"
        />

        {/* Needle with realistic styling */}
        <motion.g
          animate={{ rotate: needleAngle }}
          transition={{ duration: 0.05, ease: "easeOut" }}
          style={{ transformOrigin: '175px 175px' }}
        >
          {/* Needle shadow */}
          <path
            d="M 173 175 L 175 65 L 177 175 Z"
            fill="rgba(0,0,0,0.3)"
            transform="translate(2, 2)"
          />
          
          {/* Main needle body - tapered */}
          <path
            d="M 171 175 L 175 70 L 179 175 Z"
            fill={progress > 75 ? RED : ACCENT}
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="1"
          />
          
          {/* Needle highlight */}
          <path
            d="M 173 175 L 175 70 L 175 175 Z"
            fill="rgba(255,255,255,0.3)"
          />
          
          {/* Counterweight */}
          <circle
            cx="175"
            cy="190"
            r="8"
            fill={progress > 75 ? RED : ACCENT}
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="1"
          />
        </motion.g>

        {/* Center hub */}
        <circle
          cx="175"
          cy="175"
          r="15"
          fill="rgba(40,40,40,1)"
          stroke="rgba(80,80,80,0.8)"
          strokeWidth="2"
        />
        
        {/* Center hub highlight */}
        <circle
          cx="175"
          cy="175"
          r="15"
          fill="url(#gaugeGradient)"
        />
        
        {/* Center rivet */}
        <circle
          cx="175"
          cy="175"
          r="6"
          fill="rgba(60,60,60,1)"
          stroke="rgba(100,100,100,0.8)"
          strokeWidth="1"
        />

        {/* Digital speed display */}
        <g>
          {/* Display background */}
          <rect
            x="135"
            y="240"
            width="80"
            height="40"
            rx="6"
            fill="rgba(0,0,0,0.8)"
            stroke="rgba(100,100,100,0.3)"
            strokeWidth="1"
          />
          
          {/* Speed value */}
          <text
            x="175"
            y="260"
            fill={progress > 75 ? RED : ACCENT}
            fontSize="24"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontFamily: 'Monaco, Consolas, monospace',
              filter: `drop-shadow(0 0 4px ${progress > 75 ? 'rgba(229,62,62,0.6)' : 'rgba(200,255,0,0.6)'})`
            }}
          >
            {currentSpeed}
          </text>
          
          {/* Unit label */}
          <text
            x="175"
            y="273"
            fill="rgba(255,255,255,0.4)"
            fontSize="8"
            fontWeight="600"
            textAnchor="middle"
            letterSpacing="1.5"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            KM/H
          </text>
        </g>

        {/* Brand/label text at top */}
        <text
          x="175"
          y="100"
          fill="rgba(255,255,255,0.3)"
          fontSize="10"
          fontWeight="600"
          textAnchor="middle"
          letterSpacing="3"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          SPIRAL UP
        </text>

      </svg>
    </div>
  )
}

export default function HowItWorksNew() {
  return (
    <section className="py-14 md:py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
            HOW IT WORKS
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-16"
        >
          From your brand to scroll stoppers in three steps.
        </motion.h2>

        {/* Main Content - Speedometer + Steps */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center mb-12">
          
          {/* Left: Speedometer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <Speedometer />
          </motion.div>

          {/* Right: All Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-green-500/30 transition-all duration-300"
              >
                {/* Number Circle */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
                  style={{
                    backgroundColor: '#000',
                    border: `3px solid ${ACCENT}`,
                    color: ACCENT,
                    boxShadow: `0 0 20px rgba(200,255,0,0.3)`
                  }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9ca3af' }}>
                    {step.body}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="pt-4 opacity-0 group-hover:opacity-100"
                >
                  <ArrowRight size={20} style={{ color: ACCENT }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <button
            className="w-full py-5 rounded-2xl font-bold text-white text-base md:text-lg flex items-center justify-center gap-3 group transition-all duration-200"
            style={{ backgroundColor: '#e53e3e' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#c53030'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(229,62,62,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#e53e3e'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Let&apos;s start with your brand
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
