'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const highlights = [
  {
    value: '⅕',
    label: 'the cost',
    desc: 'High production value at one fifth the cost of a comparable traditional full scale production.',
  },
  {
    value: '10×',
    label: 'faster',
    desc: 'A faster journey from approved concept to finished film.',
  },
  {
    value: '∞',
    label: 'Creative possibilities',
    desc: 'Carefully crafted lighting, texture and movement. Work you can judge for yourself.',
  },
]

export default function ProductionAdvantage() {
  return (
    <section className="bg-black relative">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-14 md:py-24">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="text-xs font-semibold text-red-500 tracking-widest uppercase">
            The production advantage
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl font-black text-white leading-tight mb-5"
        >
          High production value for a fraction of the cost.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base leading-relaxed mb-10 max-w-xl"
          style={{ color: '#9ca3af' }}
        >
          High quality reels, videos and brand films, built with cinematic detail and crafted to look and feel real.
          Our AI assisted production process gives us the freedom to create ambitious visuals with a leaner budget and a faster turnaround.
        </motion.p>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="rounded-2xl p-5"
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            >
              <span
                className="text-5xl font-black leading-none block mb-2"
                style={{ color: '#e53e3e' }}
              >
                {h.value}
              </span>
              <p className="text-base font-bold text-white mb-2">{h.label}</p>
              <p className="text-sm leading-relaxed hidden md:block" style={{ color: '#6b7280' }}>{h.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why stop here + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4 max-w-xl"
        >
          <p className="text-sm font-medium" style={{ color: '#6b7280' }}>Why stop here?</p>
          <button
            className="w-full py-4 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 group transition-colors duration-200"
            style={{ backgroundColor: '#e53e3e' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
          >
            See what we can make for your brand
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
