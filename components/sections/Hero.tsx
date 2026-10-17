'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Link2, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [link, setLink] = useState('')

  return (
    <section className="min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Red Accent Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent" style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.6))'
              }}>
                What?!
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight mb-6"
            >
              Make your brand look bigger than your production budget.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              High-production reels and ads, built fast for brands that need sharper creative.
            </motion.p>

            {/* Gradient Line */}
            <div
              className="h-0.5 mb-8 max-w-lg"
              style={{
                background: 'linear-gradient(90deg, #ff0000 0%, #ff0000 20%, rgba(255, 0, 0, 0.3) 50%, transparent 100%)',
                boxShadow: '0 0 12px rgba(255, 0, 0, 0.6), 0 0 24px rgba(255, 0, 0, 0.3)',
              }}
            />

            {/* Inline CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4 max-w-lg"
            >
              {/* Label */}
              <p className="text-sm font-semibold text-white">
                Send us your link. We&apos;ll tell you what videos your brand actually needs.
              </p>

              {/* Input + Continue row — stacks on very small screens */}
              <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 rounded-2xl sm:rounded-full overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className="flex items-center gap-3 flex-1 px-5">
                  <Link2 size={16} style={{ color: '#6b7280', flexShrink: 0 }} />
                  <input
                    type="url"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    placeholder="Instagram or product link"
                    className="flex-1 bg-transparent py-4 text-sm text-white placeholder-gray-400 outline-none min-w-0"
                  />
                </div>
                <div className="hidden sm:block w-px h-6 bg-white/10 flex-shrink-0" />
                <button
                  className="flex items-center justify-center gap-2 px-6 py-4 font-semibold text-sm text-white rounded-b-2xl sm:rounded-r-full sm:rounded-b-none transition-all flex-shrink-0"
                  style={{ backgroundColor: '#e53e3e' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* OR divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                <span className="text-xs text-gray-500">or</span>
                <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
              </div>

              {/* Book a call */}
              <Link href="/book-a-call?from=/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-semibold text-sm text-white transition-all"
                  style={{ border: '1.5px solid #e53e3e' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(229,62,62,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Calendar size={16} style={{ color: '#9ca3af' }} />
                  Prefer to talk? Book a call
                  <ArrowRight size={16} style={{ color: '#9ca3af' }} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side — 3 portrait video cards */}
          <div className="hidden lg:flex items-center justify-center gap-3">
            {[
              { src: '/videos/Types of Fracture.mp4', label: 'Medical' },
              { src: '/videos/Bastar Tsunami.mp4', label: 'FMCG' },
              { src: '/videos/asus new.mp4', label: 'Tech' },
            ].map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  width: i === 1 ? '140px' : '120px',
                  aspectRatio: '9/16',
                  border: i === 1 ? '1.5px solid #C8FF00' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: i === 1 ? '0 0 20px rgba(200,255,0,0.2)' : 'none',
                  transform: i === 0 ? 'translateY(16px)' : i === 2 ? 'translateY(16px)' : 'translateY(0)',
                }}
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Label */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-2 py-2"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                >
                  <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>{video.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
