'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Link2, Calendar } from 'lucide-react'
import Link from 'next/link'

const ACCENT = '#C8FF00'

const videos = [
  {
    id: 1,
    brand: 'Fracture with Performance',
    category: 'Medical',
    desc: 'Builds trust through clinical authority',
    format: 'Brand reel · 30s',
    videoSrc: '/videos/Types Of Fracture.mp4',
  },
  {
    id: 4,
    brand: 'ASUS — Upscaling',
    category: 'Tech',
    desc: 'Showcases durability in real-world use',
    format: 'Brand film · 30s',
    videoSrc: '/videos/Asus New.mp4',
  },
  {
    id: 6,
    brand: 'Bastar Farms',
    category: 'FMCG',
    desc: 'Highlights real ingredients',
    format: 'Product reel · 18s',
    videoSrc: '/videos/Bastar Tsunami.mp4',
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
    id: 5,
    brand: 'Shine Divine',
    category: 'Jewellery',
    desc: 'Brings the collection to life',
    format: 'Product reel · 20s',
    videoSrc: null,
  },
]

function VideoCard({ video, index, isMobile }: {
  video: typeof videos[0]
  index: number
  isMobile: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  return (
    <div
      className="relative group cursor-pointer flex-shrink-0"
      style={{
        width: isMobile ? '100%' : '200px',
        aspectRatio: '9/16',
      }}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          backgroundColor: '#0f0f0f',
          border: '1.5px solid rgba(255,255,255,0.1)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = ACCENT
          e.currentTarget.style.boxShadow = `0 0 0 1px ${ACCENT}, 0 0 20px rgba(200,255,0,0.25)`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Video */}
        {video.videoSrc ? (
          <video
            ref={videoRef}
            src={video.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #1c1c1c 0%, #080808 100%)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-black tracking-tighter select-none" style={{ color: 'rgba(255,255,255,0.03)' }}>
                {video.category.toUpperCase()}
              </span>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)' }}
        />

        {/* Play/Pause control — center, visible on hover or when paused */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)', border: '1.5px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }}
          >
            {playing ? (
              /* Pause icon */
              <div className="flex gap-1">
                <div className="w-1 h-4 rounded-full bg-white" />
                <div className="w-1 h-4 rounded-full bg-white" />
              </div>
            ) : (
              <Play size={18} className="text-white ml-0.5" fill="white" />
            )}
          </div>
        </button>

        {/* Category label — bottom left */}
        <div className="absolute bottom-3 left-3 z-10">
          <span
            className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-md"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: ACCENT, backdropFilter: 'blur(4px)' }}
          >
            {video.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const cardWidth = el.offsetWidth
    const index = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(index)
  }

  return (
    <section className="pt-28 pb-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">01 · OUR WORK</span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mt-4">
            If these were on your feed, would you stop scrolling?
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-2">We create cinematic reels, ads and brand films.</p>
        </motion.div>

        {/* ── MOBILE: snap carousel ── */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              gap: '12px',
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                style={{
                  scrollSnapAlign: 'center',
                  flex: '0 0 85%',
                  maxWidth: '340px',
                  aspectRatio: '9/16',
                }}
              >
                <VideoCard video={video} index={index} isMobile={true} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  scrollRef.current?.scrollTo({ left: i * (scrollRef.current.offsetWidth * 0.85 + 12), behavior: 'smooth' })
                  setActiveIndex(i)
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? '20px' : '6px',
                  height: '6px',
                  backgroundColor: i === activeIndex ? ACCENT : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>

          {/* Swipe label */}
          <p className="text-center text-xs mt-3 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Swipe to explore
          </p>
        </div>

        {/* ── DESKTOP: horizontal scroll ── */}
        <div
          className="hidden lg:flex gap-4 overflow-x-auto pb-4 mb-12"
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
              className="flex-shrink-0"
            >
              <VideoCard video={video} index={index} isMobile={false} />
            </motion.div>
          ))}
        </div>

        {/* CTA below videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 max-w-lg mx-auto flex flex-col gap-4"
        >
          <p className="text-sm font-semibold text-white text-center">
            Send us your link. We&apos;ll tell you what videos your brand actually needs.
          </p>

          {/* Input + Continue */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center rounded-2xl sm:rounded-full overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="flex items-center gap-3 flex-1 px-5">
              <Link2 size={15} style={{ color: '#6b7280', flexShrink: 0 }} />
              <input
                type="url"
                placeholder="Instagram or product link"
                className="flex-1 bg-transparent py-4 text-sm text-white placeholder-gray-500 outline-none min-w-0"
              />
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10 flex-shrink-0" />
            <button
              className="flex items-center justify-center gap-2 px-6 py-4 font-semibold text-sm text-white rounded-b-2xl sm:rounded-r-full sm:rounded-b-none transition-all flex-shrink-0"
              style={{ backgroundColor: '#e53e3e' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
            >
              Continue
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Secondary link */}
          <div className="flex justify-center">
            <Link
              href="/book-a-call"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: '#6b7280' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
            >
              <Calendar size={14} />
              Prefer to talk? Book a call
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
