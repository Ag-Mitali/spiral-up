'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            Meet the Founder
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">

          {/* Left — sticky identity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              A small agency.<br />Personally led.
            </h2>

            {/* Name + title */}
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-white">Abhishek Edachali</p>
              <p className="text-sm" style={{ color: '#6b7280' }}>Founder, Spiral Up Digital</p>
            </div>

            {/* 12+ years badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(200,255,0,0.2)' }}
            >
              <span className="text-sm font-bold" style={{ color: '#C8FF00' }}>12+</span>
              <span className="text-xs" style={{ color: '#6b7280' }}>years in the industry</span>
            </div>

            {/* CTA */}
            <Link href="/book-a-call">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white group transition-colors duration-200 w-fit"
                style={{ backgroundColor: '#e53e3e' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
              >
                Book a call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right — body copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {[
              { text: `I'm Abhishek Edachali, founder of Spiral Up Digital. I've spent 12+ years helping businesses grow, following the digital landscape as it evolved and learning at every step. My curiosity spans art and science: how things look, how people think, and what makes them act.`, highlight: false },
              { text: `I've watched great businesses get overlooked because their presentation didn't communicate their value quickly enough. That's an opportunity I want to help more founders capture.`, highlight: false },
              { text: `We're a small agency, and I'm personally involved in every client's business, every story, every brief and every final output. As a founder myself, I understand how much you've invested in building your brand, and the responsibility that comes with growing it.`, highlight: false },
              { text: `If you're looking for a yes man, we probably won't be the right fit.`, highlight: true },
              { text: `You know your business deeply. We bring another perspective. We work from first principles: questioning assumptions, understanding your audience and finding what actually serves the business. We identify what's already working, improve or scale it, and explore new directions worth testing.`, highlight: false },
              { text: `I'm straightforward about what I believe will help, and I bring the same scrutiny to my own ideas. I enjoy unconventional thinking, but I'm my own toughest critic. That's part of the care I bring to every brand.`, highlight: false },
              { text: `An additional brain for your business, and the team to put the thinking into action.`, highlight: false },
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                className={`leading-relaxed ${para.highlight ? 'text-base md:text-lg font-bold text-white' : 'text-sm md:text-base'}`}
                style={{ color: para.highlight ? '#ffffff' : '#9ca3af' }}
              >
                {para.text}
              </motion.p>
            ))}

            {/* Divider */}
            <div className="h-px w-full mt-2 mb-1" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

            {/* PS note - Enhanced */}
            <div 
              className="p-4 rounded-xl border"
              style={{ 
                backgroundColor: 'rgba(200,255,0,0.03)', 
                borderColor: 'rgba(200,255,0,0.1)' 
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#d1d5db' }}>
                <span className="font-bold text-base" style={{ color: '#C8FF00' }}>P.S. </span>
                I've kept this long on purpose to test a few assumptions of my own. Many people won't read this far. If you have, please know that any call you book is{' '}
                <span className="font-semibold" style={{ color: '#C8FF00' }}>100% no obligation</span>. I'm happy to{' '}
                <span className="font-semibold" style={{ color: '#C8FF00' }}>think about your brand and share ideas with you</span>, even if we don't end up working together.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
