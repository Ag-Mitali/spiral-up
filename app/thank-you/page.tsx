'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

// DEMO calendar link — replace with actual Google Calendar appointment link
const CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/schedules/demo'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Meta Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead')
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Header */}
      <div className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
          ← Back to home
        </Link>
        <span className="text-xs text-gray-600">Step 1 of 2</span>
      </div>

      <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-8">

        {/* Success message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(229,62,62,0.15)', border: '1px solid rgba(229,62,62,0.3)' }}>
              <CheckCircle size={20} style={{ color: '#e53e3e' }} />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e53e3e' }}>Form Received</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            We've got your details.<br />
            <span style={{ color: '#e53e3e' }}>Now let's find a time.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-lg">
            Pick a date and time below that works for you. It's a no-obligation, 20-minute call — no pitch, just a conversation.
          </p>
        </motion.div>

        {/* Calendar embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.02)' }}
        >
          <iframe
            src={CALENDAR_URL}
            width="100%"
            height="600"
            frameBorder="0"
            title="Book a time with Spiral Up Digital"
            style={{ display: 'block', minHeight: '600px' }}
          />
        </motion.div>

        {/* Booked confirmation link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-xs text-gray-600 mb-2">Already booked a time?</p>
          <Link
            href="/thank-you-scheduled"
            className="text-sm font-semibold transition-colors duration-200"
            style={{ color: '#e53e3e' }}
          >
            Click here to confirm →
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
