'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

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
    { label: 'Work', href: '#portfolio' },
    { label: 'How It Works', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
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
            className="flex items-center gap-2 cursor-pointer group"
          >
            {/* Spiral Logo */}
            <div className="w-10 h-10 relative flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="text-red-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Spiral shape */}
                <path
                  d="M20 5 Q 30 5, 30 15 Q 30 25, 20 25 Q 10 25, 10 15 Q 10 8, 17 8 Q 23 8, 23 14 Q 23 20, 17 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="17" cy="20" r="2" fill="currentColor" />
              </svg>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500/10 transition-colors flex items-center gap-2 group"
            >
              Book a call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-gray-300 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2.5 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2"
            >
              Book a call
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
