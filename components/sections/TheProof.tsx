'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { metric: '48×',        desc: 'ROAS on a single campaign',                                    brand: 'Triumph Motorcycles' },
  { metric: '₹8.4Cr',    desc: 'Sold in the first two months',                                  brand: '93 Avenue Mall' },
  { metric: '700 → 51K', desc: 'Instagram followers',                                           brand: 'Dr. Vikram Kamat' },
  { metric: '4×',        desc: 'ROI on ₹1Cr monthly ad spend',                                  brand: 'Thyrocare' },
  { metric: '210',       desc: 'Student enrollments in three months across MBA and BBA',         brand: 'Practical Eduskills' },
  { metric: '₹12L',      desc: 'Monthly sales at 3.5× ROAS',                                    brand: 'The Posh Pupper' },
  { metric: '8,000+',    desc: 'Dog parents as engaged followers',                               brand: 'The Posh Pupper' },
  { metric: '5,000',     desc: 'Sign ups at under $0.60 each',                                   brand: 'US beauty brand' },
  { metric: '1,200',     desc: 'Member community of women aged 35+',                             brand: 'US beauty brand' },
  { metric: '$46,557',   desc: 'Revenue in 90 days at 8.7× ROAS',                               brand: 'US dog training brand' },
  { metric: '200%',      desc: 'Month on month growth across quick commerce and social',         brand: 'Bastar Farms' },
  { metric: 'Under ₹20', desc: 'Per new customer through Meta ads and community led sales',     brand: 'Shine Divine' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function TheProof() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">05 · EXPERIENCE & RESULTS</span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-6 mb-4">
            Why our creative decisions are different.
          </h2>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            These are results from our work growing businesses across campaigns, sales and communities.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl p-4 relative transition-all duration-300 group"
              style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(200,255,0,0.15)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,0,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,255,0,0.15)')}
            >
              {/* Accent dot */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8FF00' }} />

              <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#C8FF00' }}>{stat.metric}</p>
              <p className="text-xs leading-snug mb-2 text-gray-300">{stat.desc}</p>
              <p className="text-xs" style={{ color: '#4b5563' }}>{stat.brand}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing invitation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: '#9ca3af' }}>
            Every number here has a story. Pick any one. We&apos;re happy to walk you through the campaign, the thinking and the results on a call.
          </p>
          <Link href="/book-a-call" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-colors duration-200 whitespace-nowrap"
              style={{ backgroundColor: '#e53e3e' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
            >
              Book a call
              <ArrowRight size={15} />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
