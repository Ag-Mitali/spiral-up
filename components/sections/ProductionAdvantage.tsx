'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const guarantees = [
  {
    title: 'Product accuracy',
    desc: "Your product's shape, colours, packaging and details stay true to your references.",
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
    <section className="bg-black py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Desktop: two-column | Mobile: single column */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

          {/* ── Left col: label + heading + subtitle ── */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold text-red-500 tracking-widest uppercase mb-5"
            >
              THE PRODUCTION ADVANTAGE
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-white leading-tight mb-5"
            >
              Great videos.<br />No shoot expense.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: '#d1d5db' }}
            >
              Cinematic ads, reels and brand films without the cost and logistics of a production shoot.
            </motion.p>
          </div>

          {/* ── Right col: guarantees + proof line + CTA ── */}
          <div>
            {/* "We guarantee:" heading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg md:text-xl font-bold text-white mb-5"
            >
              We guarantee:
            </motion.p>

            {/* Guarantee cards */}
            <div className="flex flex-col gap-4 mb-8">
              {guarantees.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl p-5 transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(18,18,18,0.9)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(200,255,0,0.3)'
                    e.currentTarget.style.backgroundColor = 'rgba(25,25,25,0.95)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.backgroundColor = 'rgba(18,18,18,0.9)'
                  }}
                >
                  {/* Checkmark */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: '#C8FF00',
                      boxShadow: '0 0 14px rgba(200,255,0,0.35)',
                    }}
                  >
                    <Check size={16} strokeWidth={3} style={{ color: '#000' }} />
                  </div>

                  <div>
                    <p className="text-base md:text-lg font-bold text-white mb-1">{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Proof line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl font-bold text-white leading-snug mb-8"
            >
              <span style={{ color: '#C8FF00' }}>⅕</span> the cost of a comparable full
              production. Delivered{' '}
              <span style={{ color: '#C8FF00' }}>10×</span> faster.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                className="w-full py-4 px-8 rounded-2xl font-bold text-white text-base md:text-lg flex items-center justify-center gap-3 group transition-all duration-200"
                style={{ backgroundColor: '#e53e3e' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#c53030'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(229,62,62,0.35)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#e53e3e'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Let&apos;s talk about your next film
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
