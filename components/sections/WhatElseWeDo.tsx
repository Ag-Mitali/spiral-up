'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart2 } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Performance marketing',
    desc: 'Media buying across Meta, Google and quick commerce.',
  },
  {
    number: '02',
    title: 'Social',
    desc: 'Strategy, calendars, community.',
  },
  {
    number: '03',
    title: 'SEO & web',
    desc: '[confirm scope]',
  },
  {
    number: '04',
    title: 'Brand strategy & creative direction',
    desc: '[confirm scope]',
  },
]

const ServiceGraphic = ({ number }: { number: string }) => {
  if (number === '01') return (
    <svg width="80" height="56" viewBox="0 0 80 56" fill="none" className="mx-auto">
      <rect x="6" y="32" width="12" height="20" rx="2" fill="rgba(200,255,0,0.12)" stroke="rgba(200,255,0,0.35)" strokeWidth="1.5"/>
      <rect x="24" y="20" width="12" height="32" rx="2" fill="rgba(200,255,0,0.18)" stroke="rgba(200,255,0,0.5)" strokeWidth="1.5"/>
      <rect x="42" y="8" width="12" height="44" rx="2" fill="rgba(200,255,0,0.28)" stroke="rgba(200,255,0,0.65)" strokeWidth="1.5"/>
      <rect x="60" y="14" width="12" height="38" rx="2" fill="rgba(200,255,0,0.22)" stroke="rgba(200,255,0,0.55)" strokeWidth="1.5"/>
      <line x1="2" y1="54" x2="78" y2="54" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
    </svg>
  )
  if (number === '02') return (
    <svg width="88" height="56" viewBox="0 0 88 56" fill="none" className="mx-auto">
      <rect x="2" y="4" width="22" height="22" rx="6" stroke="rgba(200,255,0,0.55)" strokeWidth="1.5" fill="rgba(200,255,0,0.06)"/>
      <rect x="32" y="4" width="22" height="22" rx="6" stroke="rgba(200,255,0,0.4)" strokeWidth="1.5" fill="rgba(200,255,0,0.04)"/>
      <rect x="62" y="4" width="22" height="22" rx="6" stroke="rgba(200,255,0,0.3)" strokeWidth="1.5" fill="rgba(200,255,0,0.03)"/>
      <rect x="2" y="32" width="22" height="22" rx="6" stroke="rgba(200,255,0,0.22)" strokeWidth="1.5" fill="rgba(200,255,0,0.02)"/>
      <rect x="32" y="32" width="22" height="22" rx="6" stroke="rgba(200,255,0,0.15)" strokeWidth="1.5" fill="rgba(200,255,0,0.02)"/>
      <circle cx="13" cy="15" r="4" fill="rgba(200,255,0,0.45)"/>
      <circle cx="43" cy="15" r="3" fill="rgba(200,255,0,0.3)"/>
    </svg>
  )
  if (number === '03') return (
    <svg width="80" height="56" viewBox="0 0 80 56" fill="none" className="mx-auto">
      <path d="M8 44 L24 28 L40 36 L64 10" stroke="rgba(200,255,0,0.65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="64" cy="10" r="4" fill="rgba(200,255,0,0.55)" stroke="rgba(200,255,0,0.85)" strokeWidth="1.5"/>
      <circle cx="8" cy="44" r="3" fill="rgba(200,255,0,0.3)" stroke="rgba(200,255,0,0.6)" strokeWidth="1"/>
      <line x1="4" y1="52" x2="76" y2="52" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="4" y1="36" x2="76" y2="36" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4"/>
    </svg>
  )
  // 04 — brand / diamond layers
  return (
    <svg width="80" height="56" viewBox="0 0 80 56" fill="none" className="mx-auto">
      <path d="M40 4 L68 24 L40 44 L12 24 Z" stroke="rgba(200,255,0,0.45)" strokeWidth="1.5" fill="rgba(200,255,0,0.04)"/>
      <path d="M40 12 L60 24 L40 36 L20 24 Z" stroke="rgba(200,255,0,0.35)" strokeWidth="1.5" fill="rgba(200,255,0,0.07)"/>
      <circle cx="40" cy="24" r="5" fill="rgba(200,255,0,0.45)" stroke="rgba(200,255,0,0.75)" strokeWidth="1.5"/>
    </svg>
  )
}

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

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
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
                border: '1px solid rgba(255,255,255,0.1)',
                minHeight: '280px',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,0,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            >
              {/* Card content */}
              <div className="p-5 flex flex-col gap-3 z-10 relative">
                <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>{s.number}</span>
                <h3 className="text-lg font-bold text-white leading-snug">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
              </div>

              {/* SVG graphic */}
              <div className="flex items-center justify-center flex-1 py-4 px-4">
                <ServiceGraphic number={s.number} />
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
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
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
          <div className="hidden md:block flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
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
