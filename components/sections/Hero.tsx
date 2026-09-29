'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {

  return (
    <section className="min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/book-a-call?from=/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group text-lg w-full"
                >
                  Book a call
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3 group text-lg"
                style={{ 
                  border: '2px solid #C8FF00', 
                  color: '#C8FF00',
                  boxShadow: '0 0 12px rgba(200,255,0,0.4), 0 0 24px rgba(200,255,0,0.15)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(200,255,0,0.08)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(200,255,0,0.6), 0 0 40px rgba(200,255,0,0.25)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(200,255,0,0.4), 0 0 24px rgba(200,255,0,0.15)'
                }}
              >
                See the work
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side — video placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="w-full rounded-2xl flex items-center justify-center"
              style={{
                aspectRatio: '16/9',
                backgroundColor: '#111',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-sm" style={{ color: '#3d3d3d' }}>Video coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
