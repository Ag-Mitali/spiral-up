'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function OurWork() {
  const videos = [
    {
      id: 1,
      title: 'Fracture with Performance',
      category: 'Medical',
      youtubeId: 'iUFzvFPAQIk',
    },
    {
      id: 2,
      title: 'Devinoire',
      category: 'Luxury',
      youtubeId: 'dRcVOTxf-G8',
    },
    {
      id: 3,
      title: 'ORACURA',
      category: 'FMCG',
      youtubeId: '5FSoyffwMmQ',
    },
    {
      id: 4,
      title: 'ASUS — Upscaling',
      category: 'Tech',
      youtubeId: '8tSlLrGAbHM',
    },
    {
      id: 5,
      title: 'Shine Divine',
      category: 'Jewellery',
      youtubeId: 'N27a3VvfVdU',
    },
    {
      id: 6,
      title: 'Bastar Farms',
      category: 'FMCG',
      youtubeId: 'Yqd_4YFfVtA',
    },
  ]

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
          {/* Section Number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">01 · OUR WORK</span>
            <div className="h-px w-12 mt-2 bg-red-500/60" />
          </motion.div>

          {/* Headline and Description */}
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                If these were on your feed, would you stop scrolling?
              </h2>
            </motion.div>

            {/* Categories */}
          </div>
        </motion.div>

        {/* Video Grid - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 overflow-x-auto pb-4 mb-12 scroll-smooth video-scroll"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
          }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group flex-shrink-0"
              style={{
                width: '200px',
                aspectRatio: '9/16',
              }}
            >
              {/* YouTube Embed Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 pointer-events-none"
                />

                {/* Transparent overlay to block YouTube UI chrome (AI tags, arrow buttons) */}
                <div className="absolute inset-0 z-10" />

                {/* Video Info - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3 z-20">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                  >
                    <p className="text-xs text-red-400 font-semibold">
                      {video.category}
                    </p>
                    <h3 className="text-sm font-bold text-white line-clamp-2">
                      {video.title}
                    </h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
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
              border: '2px solid #c1ff72',
              color: '#c1ff72',
              boxShadow: '0 0 12px rgba(193,255,114,0.35), 0 0 24px rgba(193,255,114,0.15)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(193,255,114,0.08)'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(193,255,114,0.55), 0 0 40px rgba(193,255,114,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 0 12px rgba(193,255,114,0.35), 0 0 24px rgba(193,255,114,0.15)'
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
