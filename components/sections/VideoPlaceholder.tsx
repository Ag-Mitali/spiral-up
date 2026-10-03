'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoPlaceholder() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            aspectRatio: '16/9',
            border: '1.5px solid #C8FF00',
            boxShadow: '0 0 16px rgba(200,255,0,0.3), 0 0 40px rgba(200,255,0,0.1)',
          }}
        >
          {/* Placeholder background */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Play icon */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(200,255,0,0.08)',
                border: '1.5px solid rgba(200,255,0,0.4)',
              }}
            >
              <Play size={24} style={{ color: '#C8FF00' }} fill="rgba(200,255,0,0.5)" />
            </div>
            <p className="text-sm" style={{ color: '#2d2d2d' }}>Video coming soon</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
