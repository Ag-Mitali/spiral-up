'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

const stats = [
  { metric: '48×',        desc: 'ROAS on a single campaign',                                    brand: 'Triumph Motorcycles' },
  { metric: '₹8.4Cr',    desc: 'Sold in the first two months',                                  brand: '93 Avenue Mall' },
  { metric: '700 → 51K', desc: 'Instagram followers',                                           brand: 'Dr. Vikram Kamat' },
  { metric: '4×',        desc: 'ROI on ₹1Cr monthly ad spend',                                  brand: 'Thyrocare' },
  { metric: '210',       desc: 'Student enrollments in three months across MBA and BBA',         brand: 'Practical Eduskills' },
  { metric: '₹12L',      desc: 'Monthly sales at 3.5× ROAS',                                    brand: 'The Posh Pupper' },
  { metric: '8,000+',    desc: 'Dog parents as engaged followers',                               brand: 'The Posh Pupper' },
  { metric: '5,000',     desc: 'Sign ups at under $0.60 each',                                   brand: 'US beauty brand' },
  { metric: '1,200',     desc: 'Member community of women aged 35+',                             brand: 'US beauty brand' },
  { metric: '$46,557',   desc: 'Revenue in 90 days at 8.7× ROAS',                               brand: 'US dog training brand' },
  { metric: '200%',      desc: 'Month on month growth across quick commerce and social',         brand: 'Bastar Farms' },
  { metric: 'Under ₹20', desc: 'Per new customer through Meta ads and community led sales',     brand: 'Shine Divine' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

// Mesh Flow Background Component
function MeshFlowBackground({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Grid configuration
    const cols = 24
    const rows = 14
    
    // Create grid points
    const points: Array<{ baseX: number; baseY: number; x: number; y: number }> = []
    
    const initPoints = () => {
      points.length = 0
      const spacingX = canvas.width / (cols - 1)
      const spacingY = canvas.height / (rows - 1)
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacingX
          const baseY = j * spacingY
          points.push({ baseX, baseY, x: baseX, y: baseY })
        }
      }
    }
    initPoints()

    let currentMouseX = canvas.width / 2
    let currentMouseY = canvas.height / 2
    let animationId: number

    // Subscribe to motion values
    const unsubscribeX = mouseX.on('change', (v: number) => { currentMouseX = v })
    const unsubscribeY = mouseY.on('change', (v: number) => { currentMouseY = v })

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points based on mouse position
      points.forEach(point => {
        const dx = currentMouseX - point.baseX
        const dy = currentMouseY - point.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 250
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 40
          const angle = Math.atan2(dy, dx)
          point.x = point.baseX + Math.cos(angle) * force
          point.y = point.baseY + Math.sin(angle) * force
        } else {
          // Smooth return to base position
          point.x += (point.baseX - point.x) * 0.15
          point.y += (point.baseY - point.y) * 0.15
        }
      })

      // Draw grid lines
      ctx.strokeStyle = 'rgba(200, 255, 0, 0.25)'
      ctx.lineWidth = 1.5

      // Horizontal lines
      for (let j = 0; j < rows; j++) {
        ctx.beginPath()
        for (let i = 0; i < cols; i++) {
          const point = points[i * rows + j]
          if (i === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()
      }

      // Vertical lines
      for (let i = 0; i < cols; i++) {
        ctx.beginPath()
        for (let j = 0; j < rows; j++) {
          const point = points[i * rows + j]
          if (j === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()
      }

      // Draw points with glow effect near mouse
      points.forEach(point => {
        const dx = currentMouseX - point.x
        const dy = currentMouseY - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200
        
        if (distance < maxDistance) {
          const alpha = (1 - distance / maxDistance) * 0.9
          const size = 3 + alpha * 3
          
          // Glow
          ctx.shadowColor = 'rgba(200, 255, 0, 0.8)'
          ctx.shadowBlur = 15 * alpha
          
          ctx.fillStyle = `rgba(200, 255, 0, ${alpha})`
          ctx.beginPath()
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.shadowBlur = 0
        } else {
          // Small base points
          ctx.fillStyle = 'rgba(200, 255, 0, 0.2)'
          ctx.beginPath()
          ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationId)
      unsubscribeX()
      unsubscribeY()
    }
  }, [mouseX, mouseY])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  )
}

export default function TheProof() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <section className="py-14 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Our creative decisions are derived from results.
          </h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            These are results from our work growing businesses across campaigns, sales and communities.
          </p>
        </motion.div>

        {/* Stats grid with Mesh Flow Background */}
        <div ref={containerRef} className="relative mb-14" style={{ minHeight: '600px' }}>
          {/* Mesh Flow Canvas */}
          <MeshFlowBackground mouseX={mouseX} mouseY={mouseY} />
          
          {/* Stats Grid */}
          <motion.div
            className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl p-4 relative transition-all duration-300 group backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(13,13,13,0.85)',
                  border: '1px solid rgba(200,255,0,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,255,0,0.7)'
                  e.currentTarget.style.backgroundColor = 'rgba(13,13,13,0.95)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,255,0,0.2)'
                  e.currentTarget.style.backgroundColor = 'rgba(13,13,13,0.85)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Accent dot */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#C8FF00', boxShadow: '0 0 8px rgba(200,255,0,0.6)' }} />

                <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C8FF00' }}>{stat.metric}</p>
                <p className="text-xs leading-snug mb-2 text-gray-300">{stat.desc}</p>
                <p className="text-xs" style={{ color: '#6b7280' }}>{stat.brand}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing invitation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="max-w-2xl">
            <h3 className="text-lg md:text-xl font-bold text-white italic leading-tight mb-2">
              Every number has a story.
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9ca3af' }}>
              Pick any one. We&apos;re happy to walk you through the campaign, the thinking and the results on a call.
            </p>
          </div>
          <Link href="/book-a-call">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-colors duration-200 w-fit"
              style={{ backgroundColor: '#e53e3e' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
            >
              Book a call
              <ArrowRight size={15} />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
