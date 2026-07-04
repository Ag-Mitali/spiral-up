'use client'

import { motion } from 'framer-motion'
import { Check, Info, ArrowRight } from 'lucide-react'

export default function Pricing() {
  const pricingTiers = [
    {
      videos: '1 Video',
      price: '7,500',
      duration: '5 days',
    },
    {
      videos: '10 Videos',
      price: '60,000',
      duration: '5–10 days',
    },
    {
      videos: '15 Videos',
      price: '82,500',
      duration: '5–15 days',
    },
    {
      videos: '20 Videos',
      price: '1,00,000',
      duration: '5–20 days',
    },
  ]

  const features = [
    'Creative direction',
    'AI-assisted production',
    'Editing',
    'Voiceovers',
    'Captions',
    'Music',
    'Formatting',
    'One revision round',
  ]

  const notes = [
    'Long-form brand videos above 35 seconds and extra revisions are billed separately.',
    'Fast-track delivery is available on request.',
  ]

  return (
    <section className="py-24 bg-black relative">
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff0000 50%, transparent 100%)',
          boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div>
              <span className="text-red-500 font-semibold text-sm">How much?!</span>
              <div
                className="h-0.5 w-20 mt-2"
                style={{
                  background: 'linear-gradient(90deg, #ff0000 0%, transparent 100%)',
                  boxShadow: '0 0 8px rgba(255, 0, 0, 0.6)',
                }}
              />
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              The price<br />is the price.
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed">
              The process is lean. The output is sharp. The pricing is intentionally aggressive.
            </p>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex gap-4 bg-black border border-red-500/30 rounded-xl p-4"
            >
              <div className="w-8 h-8 rounded-full border-2 border-red-500 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <p className="text-sm text-gray-300">
                We can only handle 4 active delivery clients at a time without the quality dropping.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group w-fit"
            >
              Book a call
              <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </motion.button>
          </motion.div>

          {/* Middle Column - Pricing Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-black border border-red-500/30 rounded-lg p-4 sm:p-6 hover:border-red-500/60 transition-all duration-300 mx-2 sm:mx-0"
              >
                <div className="flex items-center justify-between gap-8">
                  <p className="text-gray-400 text-sm whitespace-nowrap">{tier.videos}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-red-500 text-lg">₹</span>
                    <span className="text-3xl font-bold text-white">{tier.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm whitespace-nowrap">{tier.duration}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - What's Included */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Features */}
            <div className="bg-black border border-red-500/30 rounded-lg p-6 sm:p-8 mx-2 sm:mx-0">
              <h3 className="text-red-500 font-semibold text-sm mb-6">What's included</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-red-500" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            <div className="space-y-3">
              {notes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex gap-3 text-gray-400 text-sm"
                >
                  <Info size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{note}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
