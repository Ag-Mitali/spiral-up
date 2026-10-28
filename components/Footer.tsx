'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Instagram, Linkedin, Mail, MessageCircle, Calendar } from 'lucide-react'

const explore = [
  { label: 'Work', href: '#portfolio' },
  { label: 'How It Works', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#what-we-do' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1 flex flex-col gap-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/Spiral up logo - new.png"
                  alt="Spiral Up Digital Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white">Spiral Up</span>
                <span className="text-xs" style={{ color: '#6b7280' }}>Digital</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
              Cinematic reels, ads and brand films, informed by experience growing businesses.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#4b5563' }}>Explore</p>
            <ul className="flex flex-col gap-2.5">
              {explore.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm transition-colors duration-200" style={{ color: '#9ca3af' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in touch */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#4b5563' }}>Get in touch</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/book-a-call" className="flex items-center gap-2 text-sm transition-colors duration-200 group" style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                  <Calendar size={14} />
                  Book a call
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 group" style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                  <MessageCircle size={14} />
                  WhatsApp us
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a href="mailto:hello@spiralupdigital.com"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 group" style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                  <Mail size={14} />
                  Email us
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#4b5563' }}>Social</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-sm transition-colors duration-200 group" style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                  <Instagram size={14} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-sm transition-colors duration-200 group" style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}>
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs" style={{ color: '#374151' }}>© 2026 Spiral Up Digital</p>
          <a href="#" className="text-xs transition-colors duration-200" style={{ color: '#374151' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#6b7280')}
            onMouseLeave={e => (e.currentTarget.style.color = '#374151')}>
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  )
}
