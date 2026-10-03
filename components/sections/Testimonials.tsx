'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  [
    {
      quote: '"They just get it. The videos performed from the start and actually moved the needle for our business.',
      name: 'Rahul Mehta',
      role: 'Founder',
      company: 'ORACURA',
      avatar: null,
    },
    {
      quote: '"Professional, fast, and creative. Our reels finally feel like us, and the results back it up.',
      name: 'Priya Sharma',
      role: 'Marketing Lead',
      company: 'Shine Divine',
      avatar: null,
    },
  ],
  [
    {
      quote: '"We went from posting content that got ignored to running ads that actually convert. Night and day difference.',
      name: 'Arjun Kapoor',
      role: 'Co-Founder',
      company: 'Triumph Motorcycles',
      avatar: null,
    },
    {
      quote: '"They understood our brand better than agencies twice the price. Our ROAS has never been this consistent.',
      name: 'Sneha Iyer',
      role: 'Head of Growth',
      company: 'Bastar Farms',
      avatar: null,
    },
  ],
]

const Avatar = ({ name }: { name: string }) => (
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white"
    style={{ backgroundColor: '#1a1a1a', border: '1.5px solid rgba(200,255,0,0.25)' }}
  >
    {name.charAt(0)}
  </div>
)

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const total = testimonials.length

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            07 · TESTIMONIALS
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">

          {/* Left — heading + controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Real brands.<br />Real results<span className="text-red-600">.</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
              Cut the section entirely rather than run a weak one.
            </p>

            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ border: '1.5px solid rgba(255,255,255,0.15)' }}
              >
                <ArrowLeft size={16} className="text-white" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
                disabled={page === total - 1}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                style={{ border: '1.5px solid #C8FF00', backgroundColor: 'rgba(200,255,0,0.08)' }}
              >
                <ArrowRight size={16} style={{ color: '#C8FF00' }} />
              </button>
            </div>

            {/* Page indicator */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold" style={{ color: '#C8FF00' }}>0{page + 1}</span>
              <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: '#C8FF00' }}
                  animate={{ width: `${((page + 1) / total) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-sm" style={{ color: '#4b5563' }}>0{total}</span>
            </div>
          </motion.div>

          {/* Right — testimonial cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {testimonials[page].map((t, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 flex flex-col justify-between gap-6"
                    style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {/* Quote mark */}
                    <div>
                      <span className="text-4xl font-black leading-none" style={{ color: '#C8FF00' }}>&ldquo;</span>
                      <p className="text-base text-white leading-relaxed mt-2">{t.quote}</p>
                    </div>

                    {/* Attribution */}
                    <div className="flex items-center gap-3">
                      <Avatar name={t.name} />
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs" style={{ color: '#6b7280' }}>{t.role}</p>
                        <p className="text-xs" style={{ color: '#4b5563' }}>{t.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
