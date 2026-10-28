'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const guarantees = [
  {
    title: 'Product accuracy',
    desc: 'Your product\'s shape, colours, packaging and details stay true to your references.',
  },
  {
    title: 'Lifelike realism',
    desc: 'Believable people, natural movement and visuals that feel real.',
  },
  {
    title: 'Brand consistency',
    desc: 'Your identity carried through every frame, across every film.',
  },
]

export default function ProductionAdvantage() {
  return (
    <section className="bg-black relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-14 md:py-24">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Label and Heading */}
          <div className="lg:sticky lg:top-28">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
                THE PRODUCTION ADVANTAGE
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Great videos.<br />No shoot expense.
            </motion.h3>
          </div>

          {/* Right Column - Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden"
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at top right, rgba(229,62,62,0.08), transparent 60%)',
              }}
            />

            <div className="relative z-10">
              {/* Subtitle */}
              <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: '#d1d5db' }}>
                Cinematic ads, reels and brand films without the cost and logistics of a production shoot.
              </p>

              {/* We guarantee heading */}
              <p className="text-lg md:text-xl font-bold text-white mb-6">We guarantee:</p>

              {/* Guarantee items */}
              <div className="flex flex-col gap-5 mb-10">
                {guarantees.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="rounded-2xl p-5 hover:bg-opacity-80 transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(13,13,13,0.6)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                        style={{ 
                          backgroundColor: '#C8FF00',
                          boxShadow: '0 0 12px rgba(200,255,0,0.3)'
                        }}
                      >
                        <Check size={18} strokeWidth={3} style={{ color: '#000' }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-base md:text-lg font-bold text-white mb-2">{item.title}</p>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9ca3af' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px w-full mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />

              {/* Bottom text */}
              <p className="text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-8">
                <span className="text-2xl md:text-3xl lg:text-4xl" style={{ color: '#C8FF00' }}>⅕</span>{' '}
                <span className="text-white">the cost of a comparable full production. Delivered </span>
                <span className="text-2xl md:text-3xl lg:text-4xl" style={{ color: '#C8FF00' }}>10×</span>{' '}
                <span className="text-white">faster.</span>
              </p>

              {/* CTA Button */}
              <button
                className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-white text-sm md:text-base flex items-center justify-center gap-2 group transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#e53e3e' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#c53030'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#e53e3e'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Let&apos;s talk about your next film
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
