'use client'

import { motion } from 'framer-motion'
import { Check, Info, ArrowRight } from 'lucide-react'

export default function PricingDuplicate() {
  const pricingTiers = [
    { videos: '1 Video', duration: '5 days' },
    { videos: '10 Videos', duration: '5–10 days' },
    { videos: '15 Videos', duration: '5–15 days' },
    { videos: '20 Videos', duration: '5–20 days' },
  ]

  return (
    <section className="py-24 bg-black relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #ff0000 50%, transparent 100%)',
          boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="bg-black border border-red-500/30 rounded-lg p-6 flex justify-between items-center">
              <p className="text-white font-semibold">{tier.videos}</p>
              <p className="text-gray-400">{tier.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
