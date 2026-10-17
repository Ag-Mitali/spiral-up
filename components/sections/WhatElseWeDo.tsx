'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart2 } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Performance Marketing',
    desc: 'Lead generation, D2C and quick commerce.',
    logos: ['Meta', 'Google', 'Blinkit'],
  },
  {
    number: '02',
    title: 'Social Media Management',
    desc: 'Strategy, content planning and community management, built around your brand and audience.',
    logos: [],
  },
  {
    number: '03',
    title: 'SEO',
    desc: 'Search visibility that helps the right people discover your business.',
    logos: [],
  },
  {
    number: '04',
    title: 'Websites, Apps & Tools',
    desc: 'Digital experiences built around what your business and its users need.',
    logos: [],
  },
  {
    number: '05',
    title: 'Brand & Go-to-Market Strategy',
    desc: 'Positioning, messaging and a clear plan for taking your brand or product to market.',
    logos: [],
  },
]

export default function WhatElseWeDo() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            What else we do
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Video is where most brands start with us.<br />
            <span style={{ color: '#9ca3af' }}>It&apos;s not where it ends.</span>
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 group"
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,0,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>{s.number}</span>
              <h3 className="text-base font-bold text-white leading-snug">{s.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b7280' }}>{s.desc}</p>

              {/* Platform logos */}
              {s.logos.length > 0 && (
                <div className="flex gap-2 flex-wrap mt-1">
                  {s.logos.map((logo, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#6b7280', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: 'rgba(200,255,0,0.08)', border: '1.5px solid rgba(200,255,0,0.3)' }}
            >
              <BarChart2 size={15} style={{ color: '#C8FF00' }} />
            </div>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9ca3af' }}>
              Most clients start with a video project and expand.<br className="hidden md:block" />
              <span style={{ color: '#6b7280' }}> Some hand us the whole thing.</span>
            </p>
          </div>
          <Link href="/book-a-call" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white group transition-colors duration-200 whitespace-nowrap"
              style={{ backgroundColor: '#e53e3e' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
            >
              Book a call
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
