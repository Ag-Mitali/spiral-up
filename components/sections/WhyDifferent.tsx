'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '48x',    label: 'ROAS on a single campaign',      brand: 'Triumph Motorcycles' },
  { value: '₹8.4Cr', label: 'sold in the first 2 months',    brand: '93 Avenue Mall' },
  { value: '4x',     label: 'ROI on ₹1Cr monthly ad spend',  brand: 'Thyrocare' },
]

const expertise = [
  { label: 'Advertising', desc: 'Ads that sell, not just look good' },
  { label: 'Ecommerce',   desc: 'Funnels and offers that convert' },
  { label: 'Psychology',  desc: 'Behaviour-first creative strategy' },
  { label: 'Social',      desc: 'Content that builds and scales' },
]

export default function WhyDifferent() {
  return (
    <section className="py-24" style={{ backgroundColor: '#0e0e0e' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            05 · Why our creative decisions are different
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold leading-snug mb-12"
          style={{ color: '#f0f0f0' }}
        >
          We still buy media. That&apos;s why we make video the way we do.
        </motion.h2>

        {/* Stat tiles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p className="text-3xl font-bold mb-1" style={{ color: '#c0392b' }}>{s.value}</p>
              <p className="text-sm leading-snug mb-2" style={{ color: '#9ca3af' }}>{s.label}</p>
              <p className="text-xs font-medium" style={{ color: '#4b5563' }}>{s.brand}</p>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl p-6 mb-12"
          style={{ backgroundColor: '#161616', border: '1px solid rgba(192,57,43,0.15)' }}
        >
          <p className="text-base leading-relaxed italic mb-5" style={{ color: '#9ca3af' }}>
            &ldquo;[Your 2-line quote here — first person, why you build creative the way you do.]&rdquo;
          </p>
          <div>
            <p className="text-sm font-semibold" style={{ color: '#f0f0f0' }}>Abhishek Edachali</p>
            <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>Founder &amp; Creative Director</p>
          </div>
        </motion.div>

        {/* Expertise points */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {expertise.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 transition-all duration-200"
              style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(192,57,43,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: '#f0f0f0' }}>{item.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* AI note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-start gap-3 rounded-lg px-4 py-3 max-w-xl"
          style={{ backgroundColor: 'rgba(192,57,43,0.07)', border: '1px solid rgba(192,57,43,0.18)' }}
        >
          <span className="text-xs font-bold tracking-widest uppercase mt-0.5 flex-shrink-0" style={{ color: '#c0392b' }}>AI</span>
          <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
            We use it where it saves time and money, and nowhere it costs quality.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
