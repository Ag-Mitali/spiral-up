'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageCircle, Mail, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Column - Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Spiral Logo */}
            <div className="mb-6 flex items-center gap-3">
              <div className="relative w-12 h-12">
                {/* Red spiral circles */}
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <circle cx="25" cy="25" r="20" fill="none" stroke="#ff0000" strokeWidth="1.5" opacity="0.8" />
                  <circle cx="25" cy="25" r="16" fill="none" stroke="#ff0000" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="25" cy="25" r="12" fill="none" stroke="#ff0000" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="25" cy="25" r="8" fill="none" stroke="#ff0000" strokeWidth="1.5" opacity="0.2" />
                </svg>
                {/* Glow effect */}
                <div className="absolute inset-0 blur-md bg-red-500/20 rounded-full" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white leading-none">Spiral Up</h3>
                <p className="text-xs text-gray-400">Digital</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              High-production reels and ads for brands that need sharper creative.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Middle Column - Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-gray-400 text-sm font-semibold mb-8 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: 'Work', href: '#' },
                { label: 'How It Works', href: '#' },
                { label: 'Pricing', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white text-base hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Get in Touch */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-gray-400 text-sm font-semibold mb-8 tracking-wide">Get in touch</h4>
            <div className="space-y-4">
              {/* Book a call */}
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-colors">
                  <Calendar size={18} className="text-red-500" />
                </div>
                <span className="text-white">Book a call</span>
                <ArrowRight size={16} className="text-red-500 ml-auto group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* WhatsApp us */}
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-colors">
                  <MessageCircle size={18} className="text-red-500" />
                </div>
                <span className="text-white">WhatsApp us</span>
                <ArrowRight size={16} className="text-red-500 ml-auto group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Email us */}
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/10 transition-colors">
                  <Mail size={18} className="text-red-500" />
                </div>
                <span className="text-white">Email us</span>
                <ArrowRight size={16} className="text-red-500 ml-auto group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-gray-500 text-sm"
        >
          <p>© Spiral Up Digital</p>
        </motion.div>
      </div>
    </footer>
  )
}
