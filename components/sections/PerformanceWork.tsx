'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const videos = [
  { id: 1, youtubeId: null, title: 'Campaign 01', label: 'Add YouTube ID' },
  { id: 2, youtubeId: null, title: 'Campaign 02', label: 'Add YouTube ID' },
  { id: 3, youtubeId: null, title: 'Campaign 03', label: 'Add YouTube ID' },
  { id: 4, youtubeId: null, title: 'Campaign 04', label: 'Add YouTube ID' },
]

const notList = [
  'Not the cheapest, and not trying to be.',
  'Not a content mill — every project starts with your product, audience and competitors.',
]

export default function PerformanceWork() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            04 · THE PROOF
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        {/* Heading + What we're not — two column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 mb-14"
        >
          {/* Left — heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              We&apos;ve sat on the other side — so we know what a reel has to do before it&apos;s briefed, not after it flops.
            </h2>
            <p className="text-sm" style={{ color: '#4b5563' }}>
              Results from our performance marketing work.
            </p>
          </div>

          {/* Right — What we're not */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap" style={{ color: '#6b7280' }}>
                What we&apos;re not:
              </span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
            </div>
            <div className="flex flex-col gap-4">
              {notList.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{ backgroundColor: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(192,57,43,0.12)', border: '1.5px solid rgba(192,57,43,0.5)' }}
                  >
                    <X size={14} style={{ color: '#c0392b' }} strokeWidth={2.5} />
                  </div>
                  <p className="text-base font-semibold text-white leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 16:9 video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {video.youtubeId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ backgroundColor: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ border: '1.5px solid rgba(200,255,0,0.4)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <polygon points="5,3 19,12 5,21" fill="rgba(200,255,0,0.7)" />
                    </svg>
                  </div>
                  <span className="text-xs" style={{ color: '#2d2d2d' }}>{video.label}</span>
                </div>
              )}

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2 z-10"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
              >
                <p className="text-xs font-medium text-white">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
