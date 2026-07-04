'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  // Professional Neon SVG Icons
  
  const NeonPlus = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="8" width="16" height="48" rx="8" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="24" width="48" height="16" rx="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  )

  const NeonShoppingBag = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 24H44L40 56H24L20 24Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M28 24V16C28 14.9 28.9 14 30 14H34C35.1 14 36 14.9 36 16V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="32" y1="32" x2="32" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  const NeonDiamond = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L52 32L32 56L12 32L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="32" y1="8" x2="32" y2="56" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
    </svg>
  )

  const NeonBottle = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 8H38V18H44V56C44 57.1 43.1 58 42 58H22C20.9 58 20 57.1 20 56V18H26V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="26" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="2" />
    </svg>
  )

  const NeonFork = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8V48C20 52 23 56 28 56H36C41 56 44 52 44 48V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="26" y1="8" x2="26" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="8" x2="38" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  const NeonLaptop = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="44" x2="52" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 44L24 56H40L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="18" y1="22" x2="46" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  )

  const industries = [
    { id: 1, label: 'Medical', icon: NeonPlus },
    { id: 2, label: 'D2C', icon: NeonShoppingBag },
    { id: 3, label: 'Luxury', icon: NeonDiamond },
    { id: 4, label: 'FMCG', icon: NeonBottle },
    { id: 5, label: 'Food', icon: NeonFork },
    { id: 6, label: 'Tech', icon: NeonLaptop },
  ]

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

            {/* Industries */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-gray-400 mb-10"
            >
              Medical. D2C. Luxury. FMCG. Food. Tech.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group text-lg"
              >
                Book a call
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-gray-700 text-white rounded-lg font-semibold hover:border-gray-600 transition-colors flex items-center justify-center gap-3 group text-lg"
              >
                See the work
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Neon Grid - Single line horizontal scroll on mobile, grid on lg and up */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:hidden flex gap-2 mt-8 overflow-x-auto pb-2"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.08 }}
                  className="relative group flex-shrink-0"
                >
                  {/* Neon Card Container - Compact mobile size */}
                  <div className="relative sm:w-16 sm:h-16 rounded-md border-2 border-red-500 bg-black overflow-hidden cursor-pointer"
                    style={{
                      width: '40px',
                      height: '40px',
                      boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), inset 0 0 10px rgba(255, 0, 0, 0.05)',
                    }}
                  >
                    {/* Curved animation line on hover */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 2, ease: 'linear' }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'conic-gradient(from 0deg, #ff0000, transparent)',
                        filter: 'blur(6px)',
                      }}
                    />

                    {/* Icon container */}
                    <div className="relative h-full flex items-center justify-center z-10 p-0">
                      {/* Neon Icon - Compact mobile size */}
                      <motion.div
                        animate={{
                          filter: [
                            'drop-shadow(0 0 4px #ff0000)',
                            'drop-shadow(0 0 12px #ff0000)',
                            'drop-shadow(0 0 4px #ff0000)',
                          ],
                          rotateX: [0, 5, -5, 0],
                          rotateY: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-white flex-shrink-0"
                        style={{
                          perspective: '1000px',
                          transformStyle: 'preserve-3d',
                          width: '16px',
                          height: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon />
                      </motion.div>

                      {/* Label - Hidden on mobile, shown on sm+ */}
                      <motion.span
                        animate={{
                          color: [
                            '#ffffff',
                            '#ff6666',
                            '#ffffff',
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-2xs hidden sm:block leading-tight"
                      >
                        {industry.label}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right Neon Grid - Hidden on mobile, visible on lg and up */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-3 gap-6"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.08 }}
                  className="relative group"
                >
                  {/* Neon Card Container */}
                  <div className="relative aspect-square rounded-2xl border-2 border-red-500 bg-black overflow-hidden cursor-pointer"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), inset 0 0 10px rgba(255, 0, 0, 0.05)',
                    }}
                  >
  

                    {/* Curved animation line on hover */}
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 2, ease: 'linear' }}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'conic-gradient(from 0deg, #ff0000, transparent)',
                        filter: 'blur(6px)',
                      }}
                    />

                    {/* Icon container */}
                    <div className="relative h-full flex flex-col items-center justify-center gap-4 z-10 p-4">
                      {/* Neon Icon */}
                      <motion.div
                        animate={{
                          filter: [
                            'drop-shadow(0 0 4px #ff0000)',
                            'drop-shadow(0 0 12px #ff0000)',
                            'drop-shadow(0 0 4px #ff0000)',
                          ],
                          rotateX: [0, 5, -5, 0],
                          rotateY: [0, -5, 5, 0],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-white"
                        style={{
                          perspective: '1000px',
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <Icon />
                      </motion.div>

                      {/* Label */}
                      <motion.span
                        animate={{
                          color: [
                            '#ffffff',
                            '#ff6666',
                            '#ffffff',
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-sm font-semibold text-center"
                      >
                        {industry.label}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
