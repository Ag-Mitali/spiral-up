'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Work',         href: '#work' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Results',      href: '#results' },
    { label: 'About',        href: '#about' },
    { label: 'Services',     href: '#services' },
    { label: 'Contact',      href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Spiral Logo Image */}
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image
                src="/images/Spiral up logo - new.png"
                alt="Spiral Up Digital Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-white">Spiral Up</span>
              <span className="text-xs text-gray-400">Digital</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#ff0000' }}
                className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-red-500"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/book-a-call?from=#">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500/10 transition-colors flex items-center gap-2 group"
              >
                Book a call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu — full screen overlay */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 md:hidden"
                style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
                onClick={() => setIsOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                key="drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-sm md:hidden flex flex-col"
                style={{
                  background: 'linear-gradient(160deg, #0d0d0d 0%, #080808 100%)',
                  borderLeft: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Top accent line */}
                <div className="h-0.5 w-full" style={{
                  background: 'linear-gradient(90deg, transparent 0%, #e53e3e 40%, #C8FF00 100%)'
                }} />

                {/* Header */}
                <div className="flex items-center justify-between px-7 pt-6 pb-5">
                  <div>
                    <p className="text-base font-bold text-white leading-none">Spiral Up</p>
                    <p className="text-xs mt-0.5" style={{ color: '#4b5563' }}>Digital</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Divider */}
                <div className="mx-7 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

                {/* Nav links */}
                <nav className="flex-1 px-7 pt-5 flex flex-col overflow-y-auto">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.05, duration: 0.25 }}
                      className="group flex items-center justify-between py-3 border-b transition-all duration-200"
                      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs tabular-nums" style={{ color: '#e53e3e' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                          {item.label}
                        </span>
                      </div>
                      <ArrowRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                        style={{ color: '#C8FF00' }}
                      />
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="px-7 pb-8 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Link href="/book-a-call?from=#" onClick={() => setIsOpen(false)} className="block">
                    <button
                      className="w-full py-4 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-colors duration-200"
                      style={{ backgroundColor: '#e53e3e' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#c53030')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#e53e3e')}
                    >
                      Book a call
                      <ArrowRight size={16} />
                    </button>
                  </Link>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                    <span className="text-xs" style={{ color: '#374151' }}>or</span>
                    <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  <a
                    href="https://wa.me/917710043210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                      e.currentTarget.style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.color = '#9ca3af'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp us
                  </a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
