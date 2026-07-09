'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Large Letter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Large S letter with hatching pattern */}
              <motion.div
                animate={{
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-9xl md:text-10xl font-bold text-white relative"
                style={{
                  letterSpacing: '-0.05em',
                  textShadow: '0 20px 40px rgba(255, 59, 59, 0.2)',
                }}
              >
                S
                {/* Diagonal lines overlay */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 8px,
                      #ff0000 8px,
                      #ff0000 12px
                    )`,
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                  }}
                />
              </motion.div>

              {/* Red accent dot */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500 rounded-full blur-sm"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              It's time you grow.
              <br />
              <span className="text-red-500">Speed up to others.</span>
            </h2>

            {/* Short Paragraph */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Every day you wait is a day your competitors are moving faster. We help you break through the noise with creative that actually works. Let's get started.
            </p>
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
