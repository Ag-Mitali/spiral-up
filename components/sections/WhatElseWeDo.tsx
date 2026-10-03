'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart2 } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Performance marketing',
    desc: 'Media buying across Meta, Google and quick commerce.',
    image: null,
    imagePlaceholder: 'Meta · Google · Blinkit',
  },
  {
    number: '02',
    title: 'Social',
    desc: 'Strategy, calendars, community.',
    image: null,
    imagePlaceholder: 'IG · TT · LI · Pinterest · X',
  },
  {
    number: '03',
    title: 'SEO & web',
    desc: '[confirm scope]',
    image: null,
    imagePlaceholder: 'SEO',
  },
  {
    number: '04',
    title: 'Brand strategy & creative direction',
    desc: '[confirm scope]',
    image: null,
    imagePlaceholder: 'Strategy · Ideas · Identity · Creative',
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
            06 · WHAT ELSE WE DO
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        {/* Heading row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-start justify-between gap-8 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug max-w-xl">
            Video is where most brands start with us.{' '}
            <span style={{ color: '#9ca3af' }}>It&apos;s not where it ends</span>
            <span className="text-red-600">.</span>
          </h2>


        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex flex-col justify-between rounded-2xl overflow-hidden group"
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '260px',
              }}
            >
              {/* Card content */}
              <div className="p-5 flex flex-col gap-3 z-10 relative">
                <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>{s.number}</span>
                <h3 className="text-lg font-bold text-white leading-snug">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
              </div>

              {/* Image placeholder */}
              <div
                className="mx-4 mb-4 rounded-xl flex items-center justify-center flex-1"
                style={{
                  minHeight: '90px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <p className="text-xs text-center px-3" style={{ color: '#2a2a2a' }}>
                  {s.imagePlaceholder}
                </p>
              </div>

              {/* Arrow button */}
              <div className="px-5 pb-5 z-10 relative">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ border: '1.5px solid rgba(200,255,0,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(200,255,0,0.1)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <ArrowRight size={15} style={{ color: '#C8FF00' }} />
                </div>
              </div>

              {/* Subtle red glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at bottom left, rgba(192,57,43,0.08) 0%, transparent 70%)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-between gap-6 rounded-2xl px-6 py-5"
          style={{
            backgroundColor: '#0d0d0d',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Left */}
          <div className="flex items-center gap-4">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(200,255,0,0.08)', border: '1.5px solid rgba(200,255,0,0.35)' }}
            >
              <BarChart2 size={16} style={{ color: '#C8FF00' }} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Most clients start with a video project and expand.</p>
              <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>Some hand us the whole thing.</p>
            </div>
          </div>

          {/* Divider line */}
          <div className="hidden md:block flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

          {/* Right */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ border: '1.5px solid rgba(200,255,0,0.4)' }}
            >
              <ArrowRight size={14} style={{ color: '#C8FF00' }} />
            </div>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b7280' }}>
              Same team.<br />Bigger impact.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
