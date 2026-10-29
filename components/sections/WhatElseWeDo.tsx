'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    number: '01',
    title: 'Brand Strategy & Go to Market',
    desc: 'Positioning, audience insight, offers and messaging. Give the right customer a clear reason to care, believe and act.',
  },
  {
    number: '02',
    title: 'Performance Marketing',
    desc: 'Lead generation, ecommerce and quick commerce. Connect campaigns to qualified enquiries, purchases and sales.',
  },
  {
    number: '03',
    title: 'Social Media Management',
    desc: 'Strategy, content and community. Build a recognisable presence that gives people a reason to follow, engage and return.',
  },
  {
    number: '04',
    title: 'Websites, Apps & Automation',
    desc: 'Websites, landing pages, apps and practical tools. Make the next step easier for customers and follow through easier for your team.',
  },
  {
    number: '05',
    title: 'SEO, AEO & GEO',
    desc: 'Help the right people discover your business through search engines, AI assistants and generative search experiences.',
  },
]

export default function WhatElseWeDo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={sectionRef} className="py-14 md:py-24 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label with animated underline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase relative">
            WHAT ELSE WE DO
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-1 left-0 h-[2px] bg-red-500"
            />
          </span>
        </motion.div>

        {/* Heading with CTA on right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12"
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
              <motion.span 
                className="block md:inline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Build demand.{' '}
              </motion.span>
              <motion.span 
                className="block md:inline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Capture it.
              </motion.span>
              <br className="hidden md:block" />
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{ color: '#C8FF00' }}
              >
                Convert it.
              </motion.span>
            </h2>
            <motion.p 
              className="text-sm md:text-base lg:text-lg" 
              style={{ color: '#d1d5db' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Start with the business. Then build the marketing.
            </motion.p>
          </div>

          {/* CTA Button - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:flex-shrink-0"
          >
            <motion.button
              className="relative w-full lg:w-auto py-4 lg:py-5 px-8 lg:px-10 rounded-2xl font-bold text-black text-base md:text-lg flex items-center justify-center gap-3 group overflow-hidden whitespace-nowrap"
              style={{ backgroundColor: '#C8FF00' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#b8ef00'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(200,255,0,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#C8FF00'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span className="relative z-10">Let&apos;s talk growth</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2"
                style={{ borderColor: '#C8FF00' }}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Services Grid with enhanced cards */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer"
              style={{ 
                borderColor: 'rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.02)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C8FF00'
                e.currentTarget.style.background = 'rgba(200,255,0,0.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <motion.span 
                  className="text-2xl md:text-3xl font-bold block mb-4"
                  style={{ color: '#C8FF00' }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.number}
                </motion.span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#9ca3af' }}>
                  {service.desc}
                </p>
              </div>

              {/* Corner accent */}
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-500/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
