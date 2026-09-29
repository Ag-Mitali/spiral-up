'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function OurWorkV2() {
  const videos = [
    {
      id: 1,
      title: 'Fracture with Performance',
      category: 'Medical',
      driveId: null,
      youtubeUrl: 'https://www.youtube.com/watch?v=iUFzvFPAQIk',
    },
    {
      id: 2,
      title: 'Devinoire',
      category: 'Luxury',
      driveId: null,
      youtubeUrl: 'https://www.youtube.com/watch?v=dRcVOTxf-G8',
    },
    {
      id: 3,
      title: 'ORACURA',
      category: 'FMCG',
      driveId: null,
      youtubeUrl: 'https://www.youtube.com/watch?v=5FSoyffwMmQ',
    },
    {
      id: 4,
      title: 'ASUS — Upscaling',
      category: 'Tech',
      driveId: null,
      youtubeUrl: 'https://www.youtube.com/watch?v=8tSlLrGAbHM',
    },
    {
      id: 5,
      title: 'Shine Divine',
      category: 'Jewellery',
      driveId: null,
      youtubeUrl: 'https://www.youtube.com/watch?v=N27a3VvfVdU',
    },
    {
      id: 6,
      title: 'Bastar Farms',
      category: 'FMCG',
      driveId: null,
      youtubeUrl: 'https://www.youtube.com/watch?v=Yqd_4YFfVtA',
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
            <span className="text-red-500 font-semibold text-sm">02 OUR WORK</span>
            <div
              className="h-0.5 w-20 mt-2"
              style={{
                background: 'linear-gradient(90deg, #ff0000 0%, transparent 100%)',
                boxShadow: '0 0 8px rgba(255, 0, 0, 0.6)',
              }}
            />
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
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Built to stop the scroll.
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
          {videos.map((video, index) => {
            // Extract YouTube video ID from URL for fallback embed
            const ytId = video.youtubeUrl.includes('shorts/')
              ? video.youtubeUrl.split('shorts/')[1].split('?')[0]
              : new URLSearchParams(new URL(video.youtubeUrl).search).get('v') ?? ''

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group flex-shrink-0"
                style={{ width: '200px', aspectRatio: '9/16' }}
              >
                {/* Entire card is a link to YouTube */}
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-full rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all bg-black"
                  aria-label={`Watch ${video.title} on YouTube`}
                >
                  {video.driveId ? (
                    <>
                      {/* Google Drive embed — no YouTube branding at all */}
                      <iframe
                        src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ border: 'none' }}
                      />
                      {/* Overlay blocks Drive UI, passes clicks up to <a> */}
                      <div className="absolute inset-0 z-10 cursor-pointer" />
                    </>
                  ) : (
                    <>
                      {/* YouTube fallback — scaled to hide chrome */}
                      <div className="absolute inset-0 scale-[1.35] pointer-events-none">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1&fs=0`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                      <div className="absolute inset-0 z-10 cursor-pointer" />
                    </>
                  )}

                  {/* Title / category overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3 z-20">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                    >
                      <p className="text-xs text-red-400 font-semibold">{video.category}</p>
                      <h3 className="text-sm font-bold text-white line-clamp-2">{video.title}</h3>
                    </motion.div>
                  </div>
                </a>
              </motion.div>
            )
          })}
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
            className="px-8 py-4 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-500/10 transition-colors flex items-center justify-center gap-3 group text-base"
          >
            See what we can make for you
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
