'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search, Lightbulb, Send, Zap } from 'lucide-react'

const ACCENT = '#C8FF00'

const steps = [
  {
    number: '01',
    icon: Search,
    heading: 'We look at your brand, together.',
    body: 'Product, audience, competitors, and what you\'re trying to sell.',
  },
  {
    number: '02',
    icon: Lightbulb,
    heading: 'We decide what videos it needs.',
    body: 'Ads, reels, product edits, storytelling pieces, or creative tests.',
  },
  {
    number: '03',
    icon: Send,
    heading: 'We deliver.',
    body: 'Formatted, edited, captioned, built for the platforms you need.',
  },
]

export default function HowItWorksNew() {
  return (
    <section className="py-20 bg-black">
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
          From your brand to scroll-stopping<br />
          videos, in three steps<span className="text-red-600">.</span>
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch mb-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <React.Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                  className="rounded-xl p-6 flex flex-col justify-between group hover:border-white/20 transition-colors duration-200"
                  style={{
                    backgroundColor: '#0f0f0f',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Top row: number circle + icon */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Number — accent green circle */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        border: `1.5px solid ${ACCENT}`,
                        boxShadow: `0 0 8px rgba(200,255,0,0.2)`,
                      }}
                    >
                      <span className="text-xs font-bold" style={{ color: ACCENT }}>{step.number}</span>
                    </div>

                    {/* Icon — muted, no glow */}
                    <Icon size={18} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.25)' }} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug mb-3">
                      {step.heading}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </motion.div>

                {/* Arrow between steps — accent green */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.12 }}
                    className="hidden md:flex items-center justify-center px-1"
                  >
                    <ArrowRight size={18} strokeWidth={1.5} style={{ color: ACCENT }} />
                  </motion.div>
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Turnaround banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-4 rounded-xl px-6 py-4"
          style={{
            backgroundColor: '#0f0f0f',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Zap icon — accent green with glow for emphasis */}
          <Zap
            size={16}
            strokeWidth={2}
            style={{
              color: ACCENT,
              filter: `drop-shadow(0 0 6px rgba(200,255,0,0.6))`,
              flexShrink: 0,
            }}
          />
          <div className="w-px h-5 flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <p className="text-sm text-gray-400">
            Current turnaround: <span className="font-bold text-white">first cut in [X] days.</span>
          </p>
          <div
            className="flex-1 h-px hidden sm:block"
            style={{ background: `linear-gradient(90deg, rgba(200,255,0,0.25) 0%, transparent 100%)` }}
          />
        </motion.div>

      </div>
    </section>
  )
}
