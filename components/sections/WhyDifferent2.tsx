'use client'

import { motion } from 'framer-motion'

const expertise = [
  {
    label: 'Advertising',
    desc: 'Creative built around the audience, the offer and the action you want people to take. Informed by experience buying media and testing campaigns.',
  },
  {
    label: 'Ecommerce',
    desc: 'Understanding the path from interest to purchase. We consider how your product is presented, what makes the offer compelling and what helps a customer decide.',
  },
  {
    label: 'Psychology',
    desc: 'How people notice, perceive and choose. We question assumptions about the audience and use those insights to shape the story.',
  },
  {
    label: 'Social',
    desc: 'Content that belongs on the platform and gives people a reason to watch, follow, engage and return.',
  },
]

export default function WhyDifferent2() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            Core Expertise
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-6 mb-4">
            What goes into the work.
          </h2>
          <p className="text-base leading-relaxed max-w-xl" style={{ color: '#9ca3af' }}>
            Every brief draws on our experience in advertising, ecommerce, psychology and social.
          </p>
        </motion.div>

        {/* Expertise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-200"
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,0,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              {/* Number */}
              <span className="text-xs font-semibold" style={{ color: '#C8FF00' }}>
                0{i + 1}
              </span>
              {/* Label */}
              <h3 className="text-base font-bold text-white">{item.label}</h3>
              {/* Divider */}
              <div className="h-px w-8" style={{ backgroundColor: 'rgba(200,255,0,0.3)' }} />
              {/* Desc */}
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
