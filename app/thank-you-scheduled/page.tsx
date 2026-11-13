'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

export default function ThankYouScheduledPage() {
  useEffect(() => {
    // Fire Meta Pixel Schedule event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Schedule')
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: 'linear-gradient(135deg, #e53e3e, #c53030)', boxShadow: '0 0 40px rgba(229,62,62,0.4)' }}
        >
          <CalendarCheck size={36} className="text-white" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            You're all set!
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Your call is booked. You'll receive a confirmation on your email shortly. We're looking forward to speaking with you.
          </p>
        </motion.div>

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6 mb-8 text-left"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#6b7280' }}>What to expect</p>
          <ul className="flex flex-col gap-3">
            {[
              'A 20-minute no-obligation conversation',
              'We'll ask about your business and goals',
              'You'll get honest, direct feedback from us',
              'No hard sell — just clarity on how we can help',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#e53e3e' }} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <a
            href="https://wa.me/+917710043210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ backgroundColor: '#25D366' }}
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a
            href="tel:+917710043210"
            className="flex flex-1 items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Phone size={16} />
            +91 77100 43210
          </a>
        </motion.div>

        <Link href="/" className="text-sm text-gray-600 hover:text-white transition-colors">
          ← Back to home
        </Link>
      </motion.div>
    </div>
  )
}
