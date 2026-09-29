'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Google',    style: 'font-bold tracking-tight' },
  { name: 'Amazon',    style: 'font-bold tracking-tight' },
  { name: 'Nike',      style: 'font-black italic tracking-widest uppercase' },
  { name: 'Apple',     style: 'font-light tracking-[0.2em] uppercase' },
  { name: 'Samsung',   style: 'font-semibold tracking-wide' },
  { name: 'Zomato',    style: 'font-extrabold tracking-tight' },
  { name: 'Nykaa',     style: 'font-bold tracking-widest uppercase' },
  { name: 'Myntra',    style: 'font-semibold tracking-wide' },
  { name: 'Mamaearth', style: 'font-medium tracking-wide' },
  { name: 'boAt',      style: 'font-black tracking-tight' },
  { name: 'Noise',     style: 'font-bold tracking-widest uppercase' },
  { name: 'Lenskart',  style: 'font-semibold tracking-wide' },
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

              <span
                className={`text-xl text-gray-400/60 hover:text-gray-300 transition-colors duration-300 whitespace-nowrap ${logo.style}`}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
