'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function About() {
  // Professional Neon SVG Icons
  
  const AdvertisingIcon = () => (
    <svg width="200" height="200" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neonGlow1">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="M30 8L48 16V28C48 40 30 50 30 50C30 50 12 40 12 28V16L30 8Z" stroke="#ff0000" strokeWidth="2" fill="none" filter="url(#neonGlow1)" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="30" cy="28" r="4" fill="#ff0000"/>
    </svg>
  )

  const EcommerceIcon = () => (
    <svg width="200" height="200" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neonGlow2">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect x="14" y="16" width="32" height="28" rx="2" stroke="#ff0000" strokeWidth="2" fill="none" filter="url(#neonGlow2)" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 16V12C18 10.9 18.9 10 20 10H40C41.1 10 42 10.9 42 12V16" stroke="#ff0000" strokeWidth="2" filter="url(#neonGlow2)" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="22" y1="44" x2="22" y2="50" stroke="#ff0000" strokeWidth="2" filter="url(#neonGlow2)" strokeLinecap="round"/>
      <line x1="38" y1="44" x2="38" y2="50" stroke="#ff0000" strokeWidth="2" filter="url(#neonGlow2)" strokeLinecap="round"/>
    </svg>
  )

  const PsychologyIcon = () => (
    <svg width="200" height="200" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neonGlow3">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <circle cx="30" cy="20" r="8" stroke="#ff0000" strokeWidth="2" fill="none" filter="url(#neonGlow3)"/>
      <path d="M20 30C18 32 16 36 16 40C16 46 22 50 30 50C38 50 44 46 44 40C44 36 42 32 40 30" stroke="#ff0000" strokeWidth="2" fill="none" filter="url(#neonGlow3)" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="26" y1="26" x2="22" y2="30" stroke="#ff0000" strokeWidth="2" filter="url(#neonGlow3)" strokeLinecap="round"/>
      <line x1="34" y1="26" x2="38" y2="30" stroke="#ff0000" strokeWidth="2" filter="url(#neonGlow3)" strokeLinecap="round"/>
    </svg>
  )

  const SocialIcon = () => (
    <svg width="200" height="200" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="neonGlow4">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Message Box */}
      <path d="M12 14H48C49.1 14 50 14.9 50 16V38C50 39.1 49.1 40 48 40H16L10 46V16C10 14.9 10.9 14 12 14Z" stroke="#ff0000" strokeWidth="2" fill="none" filter="url(#neonGlow4)" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Heart Inside */}
      <path d="M30 22C30 22 26 20 24 22C22.5 23 22 25 24 27L30 33L36 27C38 25 37.5 23 36 22C34 20 30 22 30 22Z" stroke="#ff0000" strokeWidth="2" fill="none" filter="url(#neonGlow4)" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const expertise = [
    {
      icon: AdvertisingIcon,
      title: 'Advertising',
      description: 'Scroll-stopping ads that sell.',
    },
    {
      icon: EcommerceIcon,
      title: 'Ecommerce',
      description: 'Funnels and offers that convert.',
    },
    {
      icon: PsychologyIcon,
      title: 'Psychology',
      description: 'Behavior-first creative strategy.',
    },
    {
      icon: SocialIcon,
      title: 'Social',
      description: 'Content that builds and scales.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <span className="text-red-500 font-semibold text-sm">Who we are?</span>
            <div
              className="h-0.5 w-20 mt-2 mx-auto"
              style={{
                background: 'linear-gradient(90deg, #ff0000 0%, transparent 100%)',
                boxShadow: '0 0 8px rgba(255, 0, 0, 0.6)',
              }}
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            Who are we?
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-1 mb-8"
          >
            <p className="text-lg text-gray-300">
              We are advertising, ecommerce, psychology, and social experts
            </p>
            <p className="text-lg text-gray-300">
              leading a team of creative professionals.
            </p>
            <p className="text-lg text-gray-300" style={{ marginTop: '32px' }}>
              We study what makes people stop, watch, feel, click, and buy —
            </p>
            <p className="text-lg text-gray-300">
              then build content around that.
            </p>
          </motion.div>

          {/* Attention Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <p className="text-red-400 text-sm font-medium">
              Your reel has a few seconds to earn attention. We treat those seconds seriously.
            </p>
          </motion.div>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-red-500/30 rounded-xl p-8 hover:border-red-500/60 transition-all duration-300 text-center overflow-hidden"
                style={{
                  borderTop: '2px solid rgba(255, 0, 0, 0.6)',
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/2 rounded-xl transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group text-base"
          >
            Talk to us
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}