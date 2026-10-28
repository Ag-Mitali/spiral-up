'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'

const ACCENT = '#C8FF00'

const steps = [
  {
    number: '01',
    heading: 'Share your brand',
    body: 'Share your product, your audience and what you want to achieve.',
  },
  {
    number: '02',
    heading: 'Approve the idea',
    body: 'We bring the concepts and creative direction. You approve what we make.',
  },
  {
    number: '03',
    heading: 'Get your videos',
    body: 'We produce, refine with your feedback and deliver ready to publish.',
  },
]

export default function HowItWorksNew() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
            HOW IT WORKS
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-16"
        >
          From your brand to scroll stoppers in three steps.
        </motion.h2>

        {/* Timeline - Responsive: Vertical on mobile, Horizontal on desktop */}
        <div className="mb-8">
          {/* Mobile: Vertical Timeline */}
          <div className="flex flex-col gap-0 md:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                className="flex gap-6 items-start relative"
              >
                {/* Number Circle with connecting line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.1, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10"
                    style={{
                      backgroundColor: '#000',
                      border: `3px solid ${ACCENT}`,
                      color: ACCENT,
                    }}
                  >
                    {step.number}
                  </motion.div>
                  {/* Connecting line with arrow */}
                  {i < steps.length - 1 && (
                    <div className="flex flex-col items-center">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: '4rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                        className="w-0.5 overflow-hidden"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.2 + 0.5 }}
                      >
                        <ArrowDown size={16} strokeWidth={3} style={{ color: ACCENT, marginTop: '-4px' }} />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
                  className="flex-1 pb-8"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.heading}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    {step.body}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:flex md:items-start md:justify-between md:gap-4">
            {steps.map((step, i) => (
              <React.Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                  className="flex flex-col items-start flex-1"
                >
                  {/* Number Circle */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mb-6"
                    style={{
                      backgroundColor: '#000',
                      border: `3px solid ${ACCENT}`,
                      color: ACCENT,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {step.heading}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#9ca3af' }}>
                      {step.body}
                    </p>
                  </div>
                </motion.div>

                {/* Horizontal arrow between items */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.15 }}
                    className="flex items-start pt-6 flex-shrink-0"
                  >
                    <ArrowRight size={24} strokeWidth={2.5} style={{ color: ACCENT }} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-2 group transition-all duration-200"
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
            Let&apos;s start with your brand
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
