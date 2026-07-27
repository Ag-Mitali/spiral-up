'use client'

import { motion } from 'framer-motion'

export default function TheProof() {
  const stats = [
    {
      metric: '48x',
      description: 'ROAS on a single campaign',
      company: 'Triumph Motorcycles',
    },
    {
      metric: '₹8.4Cr',
      description: 'sold in the first 2 months',
      company: '93 Avenue Mall',
    },
    {
      metric: '700 → 51K',
      description: 'Instagram followers',
      company: 'Dr Vikram Kamat',
    },
    {
      metric: '4x',
      description: 'ROI on ₹1Cr monthly ad spend',
      company: 'Thyrocare',
    },
    {
      metric: '210',
      description: 'student enrollments in 3 months across MBA, BBA',
      company: 'Practical Eduskills',
    },
    {
      metric: '₹12L',
      description: 'monthly sales at 3.5x ROAS',
      company: 'The Posh Pupper',
    },
    {
      metric: '8,000+',
      description: 'Dog Parents as engaged followers',
      company: 'The Posh Pupper',
    },
    {
      metric: '5,000',
      description: 'sign-ups at under $0.60 each',
      company: 'US beauty brand',
    },
    {
      metric: '1,200',
      description: 'member community, women 35+',
      company: 'US beauty brand',
    },
    {
      metric: '$46,557',
      description: 'in revenue in 90 days at 8.7lx ROAS',
      company: 'US dog training brand',
    },
    {
      metric: '200%',
      description: 'month on month growth, quick commerce and social',
      company: 'Bastar Farms',
    },
    {
      metric: '<₹20',
      description: 'per new customer via Meta ads, community-led sales',
      company: 'Shine Divine',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 bg-black relative">
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff0000 50%, transparent 100%)',
          boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-red-500 font-semibold text-sm">03 THE PROOF</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-3">
            We don't just make things that look good.<br />We make things that sell.
          </h2>
          <p className="text-gray-400 text-base mt-3">
            The numbers Spiral Up has driven, and the track record behind it.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black border border-red-500/30 rounded-lg p-4 hover:border-red-500/60 transition-all duration-300 relative"
            >
              {/* Green accent dot top-right */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" />
              
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.metric}</p>
                <p className="text-gray-300 text-xs leading-tight mb-2">{stat.description}</p>
              </div>
              <p className="text-gray-500 text-xs">{stat.company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
