'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const ACCENT = '#C8FF00'

const videos = [
  {
    id: 1,
    brand: 'Fracture with Performance',
    category: 'Medical',
    desc: 'Builds trust through clinical authority',
    format: 'Brand reel · 30s',
    videoSrc: null, // replace with actual video URL when ready
  },
  {
    id: 2,
    brand: 'Devinoire',
    category: 'D2C',
    desc: 'Makes everyday moments crave-worthy',
    format: 'Product reel · 24s',
    videoSrc: null,
  },
  {
    id: 3,
    brand: 'ORACURA',
    category: 'FMCG',
    desc: 'Showcases product texture and freshness',
    format: 'Product reel · 22s',
    videoSrc: null,
  },
  {
    id: 4,
    brand: 'ASUS — Upscaling',
    category: 'Tech',
    desc: 'Showcases durability in real-world use',
    format: 'Brand film · 30s',
    videoSrc: null,
  },
  {
    id: 5,
    brand: 'Shine Divine',
    category: 'Jewellery',
    desc: 'Brings the collection to life',
    format: 'Product reel · 20s',
    videoSrc: null,
  },
  {
    id: 6,
    brand: 'Bastar Farms',
    category: 'FMCG',
    desc: 'Highlights real ingredients',
    format: 'Product reel · 18s',
    videoSrc: null,
  },
]

export default function OurWork() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">01 · OUR WORK</span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-6">
            If these were on your feed, would you stop scrolling?
          </h2>
        </motion.div>

        {/* Video cards — horizontal scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 overflow-x-auto pb-4 mb-12"
          style={{ scrollbarWidth: 'none', paddingTop: '8px' }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative flex-shrink-0 group cursor-pointer"
              style={{ width: '200px', aspectRatio: '9/16' }}
            >
              {/* Card wrapper — lime green border glow on hover */}
              <div
                className="relative w-full h-full rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: '#0f0f0f',
                  border: '1.5px solid rgba(255,255,255,0.08)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#C8FF00'
                  e.currentTarget.style.boxShadow = '0 0 0 1px #C8FF00, 0 0 20px rgba(200,255,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Video / placeholder */}
                {video.videoSrc ? (
                  <video
                    src={video.videoSrc}
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(160deg, #1c1c1c 0%, #080808 100%)' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-black tracking-tighter select-none" style={{ color: 'rgba(255,255,255,0.03)' }}>
                        {video.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Info box — solid dark panel, slides up on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 transition-all duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)' }}
                >
                  <div
                    className="mx-2 mb-2 rounded-lg p-3 transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(10,10,10,0.85)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Top row: Brand · Category + arrow */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <span className="text-xs font-bold text-white">{video.brand}</span>
                        <span className="text-xs mx-1" style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
                        <span className="text-xs font-semibold" style={{ color: ACCENT }}>{video.category}</span>
                      </div>
                      {/* Arrow in circle */}
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        <ArrowUpRight size={11} color="white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs leading-snug mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {video.desc}
                    </p>

                    {/* Format */}
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {video.format}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 group text-base transition-all"
            style={{
              border: `2px solid ${ACCENT}`,
              color: ACCENT,
              boxShadow: '0 0 12px rgba(200,255,0,0.3), 0 0 24px rgba(200,255,0,0.12)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(200,255,0,0.08)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(200,255,0,0.5), 0 0 40px rgba(200,255,0,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 0 12px rgba(200,255,0,0.3), 0 0 24px rgba(200,255,0,0.12)'
            }}
          >
            See what we can make for you
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
