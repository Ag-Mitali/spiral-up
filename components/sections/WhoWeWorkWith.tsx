'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const fits = [
  'Brands where looking cheap costs more than the video does',
  'Teams that want someone to decide what to make, not just execute a brief',
  'Companies already spending on attention, who need the creative to earn it back',
]

const notFits = [
  'Not the cheapest, and not trying to be',
  'Not a content mill — every project starts with your product, audience and competitors',
]

export default function WhoWeWorkWith() {
  return (
    <section className="py-14 md:py-24" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            The right fit
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-2xl"
            style={{ color: '#f0f0f0' }}
          >
            Who we do our best work with
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — Good fits */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="space-y-6">
              {fits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(200,255,0,0.1)', border: '1px solid rgba(200,255,0,0.4)' }}
                  >
                    <Check size={13} style={{ color: '#C8FF00' }} strokeWidth={2.5} />
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: '#d1d5db' }}>
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Not a fit */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: '#6b7280' }}
            >
              What we&apos;re not
            </p>
            <ul className="space-y-6">
              {notFits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <X size={13} style={{ color: '#6b7280' }} strokeWidth={2.5} />
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: '#6b7280' }}>
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Subtle divider at bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 h-px origin-left"
          style={{ background: 'linear-gradient(90deg, rgba(200,255,0,0.25) 0%, rgba(200,255,0,0.05) 60%, transparent 100%)' }}
        />

      </div>
    </section>
  )
}
