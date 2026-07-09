'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function OurWork() {
  const videos = [
    {
      id: 1,
      title: 'Fracture with Performance',
      category: 'Medical',
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-112173f7f3f0?w=300&h=533&fit=crop',
    },
    {
      id: 2,
      title: 'Devinoire',
      category: 'Luxury',
      thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=533&fit=crop',
    },
    {
      id: 3,
      title: 'ORACURA',
      category: 'FMCG',
      thumbnail: 'https://images.unsplash.com/photo-1596401643021-2fbb9c2c4ec8?w=300&h=533&fit=crop',
    },
    {
      id: 4,
      title: 'ASUS — Upscaling',
      category: 'Tech',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=533&fit=crop',
    },
    {
      id: 5,
      title: 'Shine Divine',
      category: 'Jewellery',
      thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=533&fit=crop',
    },
    {
      id: 6,
      title: 'Bastar Farms',
      category: 'FMCG',
      thumbnail: 'https://images.unsplash.com/photo-1584599810694-20ef6d67c90e?w=300&h=533&fit=crop',
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
            scrollbarWidth: 'thin',
            scrollbarColor: '#ff0000 transparent',
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
              className="relative group flex-shrink-0 cursor-pointer"
              style={{
                width: '200px',
                aspectRatio: '9/16',
              }}
            >
              {/* Video Thumbnail Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all">
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"
                  >
                    <Play size={24} className="text-white fill-white ml-0.5" />
                  </motion.button>
                </motion.div>

                {/* Video Info - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3">
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
