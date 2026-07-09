'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Mail, Check } from 'lucide-react'

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

          {/* Right Column - Chat Bubble */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full">
              {/* Main chat container */}
              <div className="bg-black border-2 border-red-500/40 rounded-3xl p-8 sm:p-12 space-y-6 sm:space-y-8 aspect-square lg:aspect-auto lg:min-h-80">
                {/* Red dot in corner */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-3 h-3 bg-red-500 rounded-full" />

                {/* Message Box */}
                <div className="flex gap-6">
                  {/* Spiral icon - 5 concentric circles */}
                  <div className="w-16 h-16 rounded-full border-2 border-red-500/30 flex items-center justify-center flex-shrink-0 relative">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <filter id="spiralGlow">
                          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Circle 1 - Outermost */}
                      <circle cx="24" cy="24" r="20" stroke="#ff0000" strokeWidth="1.8" fill="none" filter="url(#spiralGlow)"/>
                      {/* Circle 2 */}
                      <circle cx="24" cy="24" r="16" stroke="#ff0000" strokeWidth="1.8" fill="none" filter="url(#spiralGlow)"/>
                      {/* Circle 3 */}
                      <circle cx="24" cy="24" r="12" stroke="#ff0000" strokeWidth="1.8" fill="none" filter="url(#spiralGlow)"/>
                      {/* Circle 4 */}
                      <circle cx="24" cy="24" r="8" stroke="#ff0000" strokeWidth="1.8" fill="none" filter="url(#spiralGlow)"/>
                      {/* Circle 5 - Innermost */}
                      <circle cx="24" cy="24" r="4" stroke="#ff0000" strokeWidth="1.8" fill="none" filter="url(#spiralGlow)"/>
                    </svg>
                  </div>

                  {/* Message bubble */}
                  <div className="flex-1 bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6">
                    <p className="text-lg text-gray-300 mb-4">
                      Not sure what type of video your brand actually needs?
                    </p>
                    <p className="text-base text-gray-400 mb-6">
                      We'll help you figure it out.
                    </p>
                    
                    {/* Timestamp with checkmarks */}
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-gray-500">10:30 AM</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#ff0000"/>
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#ff0000"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Typing indicator box */}
                <div className="flex gap-6">
                  {/* Typing dots in dark box - no empty space */}
                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-full px-6 py-4 flex gap-3 justify-center w-fit">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      className="w-3 h-3 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                      className="w-3 h-3 bg-gray-400 rounded-full"
                    />
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
                      className="w-3 h-3 bg-gray-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
