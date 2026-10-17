'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ACCENT = '#C8FF00'

const steps = [
  {
    number: '01',
    heading: 'We look at your brand, together.',
    body: 'Your product, audience, competitors and what you\'re trying to sell. We understand the business before deciding what to make.',
  },
  {
    number: '02',
    heading: 'We decide what videos it needs.',
    body: 'Ads, reels, product stories, brand films or creative tests. We agree on the direction and scope before production begins.',
  },
  {
    number: '03',
    heading: 'We deliver.',
    body: 'Produced, edited, captioned and formatted for the platforms you need. You review the first cut, we complete the agreed revisions, and deliver the final files.',
  },
]

export default function HowItWorksNew() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            02 · HOW IT WORKS
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white leading-tight mb-12"
        >
          From your brand to scroll-stopping videos, in three steps<span className="text-red-600">.</span>
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch mb-10">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Number badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: `1.5px solid ${ACCENT}`,
                    boxShadow: `0 0 8px rgba(200,255,0,0.15)`,
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: ACCENT }}>{step.number}</span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {step.heading}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {step.body}
                  </p>
                </div>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.12 }}
                  className="hidden md:flex items-center justify-center px-1"
                >
                  <ArrowRight size={16} strokeWidth={1.5} style={{ color: ACCENT }} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <button
            className="flex items-center gap-2 font-semibold text-sm group transition-colors duration-200"
            style={{ color: ACCENT }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Send us your brand link
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
