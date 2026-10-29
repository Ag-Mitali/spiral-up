'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown, Share2, Lightbulb, Video } from 'lucide-react'

const ACCENT = '#C8FF00'

const steps = [
  {
    number: '01',
    label: 'Discovery',
    heading: 'Share your brand',
    body: 'Share your product, your audience and what you want to achieve.',
    icon: Share2,
  },
  {
    number: '02',
    label: 'Briefing',
    heading: 'Approve the idea',
    body: 'We bring the concepts and creative direction. You approve what we make.',
    icon: Lightbulb,
  },
  {
    number: '03',
    label: 'Execution',
    heading: 'Get your videos',
    body: 'We produce, refine with your feedback and deliver ready to publish.',
    icon: Video,
  },
]

export default function HowItWorksNew() {
  return (
    <section className="py-14 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-red-500 tracking-widest uppercase mb-5"
        >
          HOW IT WORKS
        </motion.p>

        {/* Heading + CTA row on desktop */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-3xl"
          >
            From your brand to scroll stoppers in three steps.
          </motion.h2>

          {/* Desktop-only CTA beside heading */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block flex-shrink-0"
          >
            <button
              className="py-4 px-8 rounded-2xl font-bold text-white text-base flex items-center gap-3 group transition-all duration-200"
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
              Let&apos;s start with your brand
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="flex flex-col md:hidden mb-10 gap-0">
          {steps.map((step, i) => {
            return (
              <div key={step.number} className="flex gap-5 items-start">
                {/* Timeline spine */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: i * 0.15, type: 'spring', stiffness: 200 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{
                      backgroundColor: '#000',
                      border: `2px solid ${ACCENT}`,
                      color: ACCENT,
                      boxShadow: `0 0 16px rgba(200,255,0,0.25)`,
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {i < steps.length - 1 && (
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '3.5rem' }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: i * 0.15 + 0.25 }}
                        className="w-px"
                        style={{ background: `linear-gradient(to bottom, ${ACCENT}, rgba(200,255,0,0.2))` }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: i * 0.15 + 0.45 }}
                      >
                        <ArrowDown size={13} strokeWidth={2.5} style={{ color: ACCENT, marginTop: '-2px' }} />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.05 }}
                  className="pb-10"
                >
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: ACCENT }}>
                    {step.label}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">{step.heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{step.body}</p>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* ── DESKTOP: three featured cards with progress line ── */}
        <div className="hidden md:block mb-14">
          {/* Progress line behind the numbers */}
          <div className="relative mb-8">
            <div className="absolute top-6 left-6 right-6 h-px" style={{ background: 'rgba(200,255,0,0.12)' }} />
            <motion.div
              className="absolute top-6 left-6 h-px"
              style={{ background: `linear-gradient(to right, ${ACCENT}, rgba(200,255,0,0.3))` }}
              initial={{ width: 0 }}
              whileInView={{ width: 'calc(100% - 3rem)' }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative rounded-3xl p-8 flex flex-col gap-6 cursor-default transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, rgba(22,22,22,1) 0%, rgba(12,12,12,1) 100%)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.border = `1px solid rgba(200,255,0,0.25)`
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Green glow on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top left, rgba(200,255,0,0.07), transparent 65%)' }}
                  />

                  {/* Top row: number + icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{
                        backgroundColor: '#000',
                        border: `2px solid ${ACCENT}`,
                        color: ACCENT,
                        boxShadow: `0 0 20px rgba(200,255,0,0.2)`,
                      }}
                    >
                      {step.number}
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(200,255,0,0.08)',
                        border: '1px solid rgba(200,255,0,0.15)',
                      }}
                    >
                      <Icon size={18} style={{ color: ACCENT }} />
                    </div>
                  </div>

                  {/* Label */}
                  <p
                    className="text-xs font-bold tracking-widest uppercase -mb-3"
                    style={{ color: 'rgba(200,255,0,0.6)' }}
                  >
                    {step.label}
                  </p>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{step.body}</p>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="mt-auto h-px w-full rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: ACCENT }}
                      initial={{ width: 0 }}
                      whileInView={{ width: i === 0 ? '33%' : i === 1 ? '66%' : '100%' }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile-only CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:hidden"
        >
          <button
            className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-3 group transition-all duration-200"
            style={{ backgroundColor: '#e53e3e' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#c53030'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(229,62,62,0.35)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#e53e3e'
              e.currentTarget.style.boxShadow = 'none'
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
