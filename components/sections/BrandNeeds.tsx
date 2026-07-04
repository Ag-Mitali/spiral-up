'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function BrandNeeds() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff0000 50%, transparent 100%)',
          boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Your brand probably needs more than 'content'.
            </h2>

            {/* Subheading */}
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              It needs better creative decisions.
            </h3>

            {/* Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <p className="text-lg text-gray-400 leading-relaxed">
                Let's see what your brand needs,
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                what can be made quickly, and what is worth testing first.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group w-fit"
              >
                Book a call
                <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 transition-colors flex items-center justify-center gap-3 group w-fit"
              >
                WhatsApp us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-800 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <p className="text-gray-500 text-center">Add your image here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff0000 50%, transparent 100%)',
          boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
        }}
      />
    </section>
  )
}
