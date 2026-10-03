'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const stats = [
  { value: '48x',     label: 'ROAS on a single campaign.' },
  { value: '₹8.4Cr',  label: 'in two months.' },
  { value: '4x',      label: 'ROI on ₹1Cr monthly spend.' },
]

export default function WhyDifferent2() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — image placeholder: hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex items-center justify-center rounded-2xl"
            style={{
              minHeight: '480px',
              backgroundColor: '#0a0a0a',
              border: '1.5px solid rgba(200,255,0,0.25)',
              boxShadow: '0 0 24px rgba(200,255,0,0.06)',
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <User size={48} style={{ color: '#222' }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#2a2a2a' }}>
                Image
              </span>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Section number */}
            <div>
              <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">03 · WHY WE'RE DIFFERENT</span>
              <div className="h-px w-12 mt-2" style={{ backgroundColor: 'rgba(200,255,0,0.5)' }} />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-tight">
              Why our creative decisions are different
              <span className="text-red-600">.</span>
            </h2>

            {/* Lead line */}
            <p className="text-base text-white">
              We still buy media. That&apos;s why we make video the way we do.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-0 border-t border-b py-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 ${i > 0 ? 'pl-6 border-l' : ''}`}
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: '#C8FF00' }}>{s.value}</span>
                  <span className="text-xs leading-snug" style={{ color: '#9ca3af' }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, rgba(200,255,0,0.6) 0%, rgba(200,255,0,0.1) 60%, transparent 100%)', boxShadow: '0 0 8px rgba(200,255,0,0.2)' }} />

            {/* Quote */}
            <p className="text-base leading-relaxed" style={{ color: '#9ca3af' }}>
              I build this way because I&apos;ve seen what actually moves the needle — creative that understands the product, the audience and the platform. It&apos;s not about making pretty videos, it&apos;s about making videos that work.
            </p>
          </motion.div>

        </div>

        {/* Expertise strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}
        >
          {[
            { icon: '📣', label: 'Advertising',  desc: 'ads that sell,\nnot just look good' },
            { icon: '🛍️', label: 'Ecommerce',    desc: 'funnels and offers\nthat convert' },
            { icon: '🧠', label: 'Psychology',   desc: 'behaviour-first\ncreative strategy' },
            { icon: '📊', label: 'Social',       desc: 'content that\nbuilds and scales' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-6 py-6"
              style={{ backgroundColor: '#0d0d0d' }}
            >
              {/* Icon circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(192,57,43,0.15)', border: '1.5px solid rgba(192,57,43,0.4)' }}
              >
                <span className="text-base">{item.icon}</span>
              </div>
              {/* Text */}
              <div>
                <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: '#6b7280' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
