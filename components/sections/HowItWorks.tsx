'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'We look at your brand, together.',
      description: 'Product, audience, competitors, and what you\'re trying to sell.',
    },
    {
      number: '02',
      title: 'We decide what videos it needs.',
      description: 'Ads, reels, product edits, storytelling pieces, or creative tests.',
    },
    {
      number: '03',
      title: 'We deliver.',
      description: 'Formatted, edited, captioned, and built for the platforms you need.',
    },
  ]

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
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12"
        >
          How does it work?
        </motion.h2>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-8 mb-16">
          {/* Connecting lines (desktop only) */}
          <svg
            className="absolute top-1/2 left-0 right-0 w-full h-12 -translate-y-1/2 pointer-events-none hidden md:block"
            preserveAspectRatio="none"
            viewBox="0 0 1000 100"
            style={{ zIndex: 0 }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#ff0000" />
              </marker>
            </defs>
            {/* Line 1 to 2 */}
            <line
              x1="280"
              y1="50"
              x2="370"
              y2="50"
              stroke="#ff0000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              opacity="0.6"
            />
            {/* Line 2 to 3 */}
            <line
              x1="630"
              y1="50"
              x2="720"
              y2="50"
              stroke="#ff0000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              opacity="0.6"
            />
          </svg>

          {/* Animated dot - Higher z-index */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 50 }}>
            <motion.div
              animate={{
                x: [
                  // Container 1 outline
                  20, 300, 300, 20, 20,
                  // Move to container 2
                  350, 350,
                  // Container 2 outline  
                  350, 630, 630, 350, 350,
                  // Move to container 3
                  680, 680,
                  // Container 3 outline
                  680, 960, 960, 680, 680,
                  // Return to start
                  20
                ],
                y: [
                  // Container 1 outline
                  20, 20, 240, 240, 20,
                  // Move to container 2
                  20, 20,
                  // Container 2 outline
                  20, 20, 240, 240, 20,
                  // Move to container 3
                  20, 20,
                  // Container 3 outline
                  20, 20, 240, 240, 20,
                  // Return to start
                  20
                ],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-3 h-3 rounded-full bg-red-500 absolute"
              style={{
                boxShadow: '0 0 12px rgba(255, 0, 0, 0.9), 0 0 20px rgba(255, 0, 0, 0.6)',
              }}
            />
          </div>

          {/* Step Cards */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group"
              style={{ zIndex: 1 }}
            >
              <div className="bg-black border border-red-500/30 rounded-2xl p-8 hover:border-red-500/60 transition-all duration-300 h-full min-h-64">
                {/* Step Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4"
                >
                  {step.number}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center CTA Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-400 text-lg mb-12"
        >
          Fill out the form and tell us where your brand is right now.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group"
          >
            Fill the form
            <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 transition-colors flex items-center justify-center gap-3 group"
          >
            Book a call
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={16} />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 transition-colors flex items-center justify-center gap-3 group"
          >
            WhatsApp us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
