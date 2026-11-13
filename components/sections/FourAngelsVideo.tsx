'use client'

import { motion } from 'framer-motion'

export default function FourAngelsVideo() {
  return (
    <section className="py-4 md:py-16 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight"
        >
          <span className="text-gray-500">....and </span>brand films.
        </motion.h2>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            controls
            preload="auto"
          >
            <source src="/videos/4 Angels - Final  4K 5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
