'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function CreativeAssetOrbit() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
  }, [])

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      
      setMousePos({ x: x * 12, y: y * 12 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Creative assets data
  const assets = [
    {
      id: 1,
      title: 'Instagram Reel',
      subtitle: 'Luxury Jewelry Campaign',
      metric: '2.8M Views',
      secondary: '91% Watch Time',
      status: 'Delivered',
      depth: 0.8,
      duration: 15,
      delay: 0,
    },
    {
      id: 2,
      title: 'Meta Campaign',
      subtitle: 'Q4 Product Launch',
      metric: '4.3x ROAS',
      secondary: 'Active',
      status: 'Live',
      depth: 0.5,
      duration: 18,
      delay: 1,
    },
    {
      id: 3,
      title: 'Motion Graphics',
      subtitle: 'Brand Activation',
      metric: '1.2M Impressions',
      secondary: '34% CTR',
      status: 'Approved',
      depth: 0.9,
      duration: 12,
      delay: 2,
    },
    {
      id: 4,
      title: 'Product Photography',
      subtitle: 'E-commerce Collection',
      metric: '156 SKUs',
      secondary: 'Color Grading',
      status: 'Approved',
      depth: 0.6,
      duration: 16,
      delay: 0.5,
    },
    {
      id: 5,
      title: 'YouTube Ad',
      subtitle: 'Premium Watchtime',
      metric: '8.9M Views',
      secondary: '23% Conversion',
      status: 'Running',
      depth: 0.7,
      duration: 14,
      delay: 1.5,
    },
    {
      id: 6,
      title: 'Brand Strategy',
      subtitle: 'Visual Identity System',
      metric: '12 Assets',
      secondary: 'Complete',
      status: 'Delivered',
      depth: 0.4,
      duration: 17,
      delay: 2.5,
    },
  ]

  // Generate random movement for each card
  const getCardAnimation = (asset: typeof assets[0]) => {
    if (prefersReducedMotion) {
      return { x: 0, y: 0, rotate: 0, scale: 1 }
    }

    const seed = asset.id
    const randomX = (Math.sin(seed * 12.9898) * 0.5 + 0.5) * 20 - 10
    const randomY = (Math.sin(seed * 78.233) * 0.5 + 0.5) * 20 - 10
    const randomRotate = (Math.sin(seed * 45.164) * 0.5 + 0.5) * 2 - 1

    return {
      x: randomX,
      y: randomY,
      rotate: randomRotate,
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Premium Container */}
      <div
        className="w-full h-full rounded-3xl border overflow-hidden relative"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,59,59,0.03) 0%, rgba(5,5,5,0.8) 100%), linear-gradient(135deg, #0a0a0a 0%, #050505 100%)',
          borderColor: 'rgba(255, 255, 255, 0.06)',
          borderWidth: '1px',
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.05), 0 20px 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle mesh gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 0%, rgba(255,59,59,0.02) 25%, transparent 50%),
                linear-gradient(-45deg, transparent 0%, rgba(122,174,255,0.02) 25%, transparent 50%)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating particles */}
          {[0, 1].map((i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full blur"
              animate={{
                x: [0, 30, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1,
              }}
              style={{
                left: `${20 + i * 60}%`,
                top: `${30 + i * 40}%`,
              }}
            />
          ))}

          {/* Soft radial glows */}
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{
              background: 'radial-gradient(circle, #ff3b3b 0%, transparent 70%)',
              top: '-50%',
              right: '-20%',
            }}
          />
          <div
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-5"
            style={{
              background: 'radial-gradient(circle, #7aaeff 0%, transparent 70%)',
              bottom: '-30%',
              left: '-10%',
            }}
          />
        </div>

        {/* Content - Cards Container */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: mousePos.x * 0.1,
            y: mousePos.y * 0.1,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {/* Cards */}
          {assets.map((asset, index) => {
            const animation = getCardAnimation(asset)
            const isClosest = asset.depth > 0.8
            const isFar = asset.depth < 0.5

            // Calculate circular orbit positions
            const angle = (index / assets.length) * Math.PI * 2
            const radius = 45 // percentage from center
            const leftPos = 50 + radius * Math.cos(angle)
            const topPos = 50 + radius * Math.sin(angle)

            return (
              <motion.div
                key={asset.id}
                className="absolute w-40 h-56"
                style={{
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                  transform: 'translate(-50%, -50%)',
                  zIndex: Math.floor(asset.depth * 100),
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: asset.delay * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="group w-full h-full rounded-2xl border backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-2xl"
                  style={{
                    background: 'rgba(15, 17, 23, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    boxShadow: `inset 0 1px 2px rgba(255,255,255,0.05), ${
                      isClosest
                        ? '0 20px 40px rgba(255,59,59,0.1)'
                        : '0 10px 20px rgba(0,0,0,0.3)'
                    }`,
                    filter: isFar ? 'blur(0.5px)' : 'blur(0px)',
                  }}
                  animate={{
                    x: prefersReducedMotion ? 0 : animation.x,
                    y: prefersReducedMotion ? 0 : animation.y,
                    rotate: prefersReducedMotion ? 0 : animation.rotate,
                  }}
                  transition={{
                    duration: asset.duration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    borderColor: 'rgba(255, 59, 59, 0.4)',
                  }}
                  onHoverStart={(e) => {
                    if (containerRef.current) {
                      const cards = containerRef.current.querySelectorAll('[data-card]')
                      cards.forEach((card) => {
                        if (card !== (e.currentTarget as any)) {
                          (card as any).style.opacity = '0.5'
                        }
                      })
                    }
                  }}
                  onHoverEnd={() => {
                    if (containerRef.current) {
                      const cards = containerRef.current.querySelectorAll('[data-card]')
                      cards.forEach((card) => {
                        (card as any).style.opacity = '1'
                      })
                    }
                  }}
                  data-card
                >
                  {/* Card Content */}
                  <div className="p-4 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-white leading-tight">
                            {asset.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                            {asset.subtitle}
                          </p>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 whitespace-nowrap">
                          {asset.status}
                        </div>
                      </div>

                      {/* Thumbnail placeholder with gradient pattern */}
                      <div
                        className="w-full h-20 rounded-lg border border-red-500/10 flex items-center justify-center group-hover:border-red-500/30 transition-colors overflow-hidden relative"
                        style={{
                          background: `linear-gradient(135deg, rgba(255,59,59,0.1) 0%, rgba(122,174,255,0.1) 100%)`,
                        }}
                      >
                        {/* Animated gradient background */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                          style={{
                            background: `linear-gradient(45deg, 
                              rgba(255,59,59,0.15) 0%,
                              rgba(122,174,255,0.08) 25%,
                              rgba(255,59,59,0.1) 50%,
                              rgba(122,174,255,0.15) 75%,
                              rgba(255,59,59,0.15) 100%)`,
                            backgroundSize: '200% 200%',
                          }}
                        />
                        
                        {/* Asset type icon */}
                        <div className="relative z-10 flex flex-col items-center gap-1">
                          <div className="text-xs text-gray-400 font-medium">{asset.title.split(' ')[0]}</div>
                          <div className="w-6 h-6 rounded border border-red-500/30" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="space-y-2 border-t border-gray-800/50 pt-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs text-gray-400">Main Metric</span>
                        <span className="text-sm font-semibold text-white">
                          {asset.metric}
                        </span>
                      </div>
                      <motion.div
                        className="flex justify-between items-baseline opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ opacity: 0 }}
                      >
                        <span className="text-xs text-gray-400">Secondary</span>
                        <span className="text-xs text-gray-300">{asset.secondary}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Glass reflection effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.15) 100%)',
          }}
        />
      </div>
    </div>
  )
}
