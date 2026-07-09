'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail, Check } from 'lucide-react'
import CreativeAssetOrbit from '@/components/CreativeAssetOrbit'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-black relative">
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff0000 50%, transparent 100%)',
          boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Heading with chat icon */}
            <div className="flex items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Still thinking? Fair.
              </h2>
              {/* Circular message bubble with pointer */}
              <div className="relative">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Circular bubble */}
                  <circle cx="22" cy="18" r="16" stroke="#ff0000" strokeWidth="1.5" fill="none"/>
                  {/* Pointer tail */}
                  <path d="M 14 30 L 10 36 L 18 32 Z" stroke="#ff0000" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
                  {/* Three dots inside circle */}
                  <circle cx="16" cy="18" r="1.5" fill="#ff0000"/>
                  <circle cx="22" cy="18" r="1.5" fill="#ff0000"/>
                  <circle cx="28" cy="18" r="1.5" fill="#ff0000"/>
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              Send us your brand page, product link, or current content. We'll tell you what kind of videos make sense before you commit to anything.
            </p>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-red-500" />
              </div>
              <p className="text-sm text-gray-400">No full brief needed.</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group"
              >
                <MessageCircle size={20} />
                WhatsApp us
                <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 transition-colors flex items-center justify-center gap-3 group"
              >
                <Mail size={20} />
                Email us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Creative Asset Orbit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full lg:h-96">
              <CreativeAssetOrbit />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
