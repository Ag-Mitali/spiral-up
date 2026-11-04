'use client'

import { motion } from 'framer-motion'

const logos = [
  { src: '/images/22.png', alt: 'Brand 22' },
  { src: '/images/23.png', alt: 'Brand 23' },
  { src: '/images/24.png', alt: 'Brand 24' },
  { src: '/images/25.png', alt: 'Brand 25' },
  { src: '/images/26.png', alt: 'Brand 26' },
  { src: '/images/27.png', alt: 'Brand 27' },
  { src: '/images/28.png', alt: 'Brand 28' },
  { src: '/images/29.png', alt: 'Brand 29' },
  { src: '/images/30.png', alt: 'Brand 30' },
  { src: '/images/31.png', alt: 'Brand 31' },
  { src: '/images/32.png', alt: 'Brand 32' },
  { src: '/images/33.png', alt: 'Brand 33' },
  { src: '/images/34.png', alt: 'Brand 34' },
  { src: '/images/35.png', alt: 'Brand 35' },
  { src: '/images/36.png', alt: 'Brand 36' },
  { src: '/images/37.png', alt: 'Brand 37' },
  { src: '/images/38.png', alt: 'Brand 38' },
  { src: '/images/39.png', alt: 'Brand 39' },
  { src: '/images/40.png', alt: 'Brand 40' },
]

// Duplicate for seamless infinite scroll
const items = [...logos, ...logos]

export default function LogoStrip() {
  return (
    <section className="py-5 bg-black overflow-hidden">
      {/* Scrolling track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #000 0%, transparent 100%)' }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(270deg, #000 0%, transparent 100%)' }}
        />

        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {items.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-shrink-0 select-none"
            >
              {/* Dot separator */}
              <span className="w-1 h-1 rounded-full bg-red-500/40 flex-shrink-0" />

              <div className="relative h-20 w-auto flex items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
