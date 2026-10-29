'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function GetStarted() {
  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-8 text-center">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
            LET'S TALK GROWTH
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
            Bring us your business goals.{' '}
            <span style={{ color: '#C8FF00' }}>Leave the rest to us.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#9ca3af' }}>
            We'll work out the strategy, bring together the right team and handle the execution. You approve the direction. We take it forward.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 mt-10"
        >
          {/* Primary CTA */}
          <Link href="/book-a-call">
            <button
              className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-2 group transition-all duration-200"
              style={{ backgroundColor: '#e53e3e' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#c53030'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#e53e3e'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Let&apos;s talk about your goals
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/917710043210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-2 group transition-all duration-200"
            style={{ 
              color: '#C8FF00',
              border: '2px solid #C8FF00',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(200,255,0,0.1)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            <MessageCircle size={20} />
            WhatsApp us
          </a>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm mt-6"
          style={{ color: '#6b7280' }}
        >
          No obligation. Just a conversation about what's possible for your business.
        </motion.p>

      </div>
    </section>
  )
}
