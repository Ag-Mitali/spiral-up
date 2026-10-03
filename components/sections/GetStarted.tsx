'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Link2, User, MessageCircle, CheckCircle } from 'lucide-react'

const steps = ['Link', 'Details', 'Send']

export default function GetStarted() {
  const [step, setStep] = useState(0)
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [linkError, setLinkError] = useState('')

  const isValidLink = (v: string) =>
    v.trim().length > 5 && (v.startsWith('http') || v.startsWith('www.') || v.includes('.com') || v.includes('.in'))

  const handleContinue = () => {
    if (!isValidLink(link)) { setLinkError('Please enter a valid link.'); return }
    setLinkError('')
    setStep(1)
  }

  const handleSend = () => {
    if (!name.trim() || !whatsapp.trim()) return
    setStep(2)
    setSubmitted(true)
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <div>
              <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">09 · GET STARTED</span>
              <div className="h-px w-12 mt-2 bg-red-500/60" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Still thinking?<br />
              <span style={{ color: '#4b5563' }}>Fair</span>
              <span className="text-red-600">.</span>
            </h2>

            {/* Body */}
            <p className="text-base leading-relaxed max-w-sm" style={{ color: '#9ca3af' }}>
              Send us your brand page, product link, or current content. We&apos;ll tell you what kind of videos make sense before you commit to anything.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-colors"
                style={{ backgroundColor: '#c0392b', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a93226')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp us
                <ArrowRight size={15} />
              </a>

              <a
                href="/book-a-call"
                className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-colors"
                style={{ border: '1.5px solid rgba(255,255,255,0.15)', color: '#fff' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book a call
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Fine print */}
            <p className="text-xs tracking-widest uppercase" style={{ color: '#374151' }}>
              No obligation.<br />Just straight advice.
            </p>
          </motion.div>

          {/* Right — multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: '#0d0d0d', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {!submitted ? (
                <>
                  {/* Step tabs */}
                  <div className="flex items-center gap-6 mb-8">
                    {steps.map((s, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-xs" style={{ color: i <= step ? '#C8FF00' : '#4b5563' }}>
                          0{i + 1}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: i === step ? '#f0f0f0' : '#4b5563' }}
                        >
                          {s}
                        </span>
                        {i === step && (
                          <div className="h-px w-8" style={{ backgroundColor: '#C8FF00' }} />
                        )}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-5"
                      >
                        <label className="text-base font-semibold text-white">
                          Instagram handle or product link
                        </label>
                        <div className="relative">
                          <Link2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input
                            type="url"
                            value={link}
                            onChange={e => { setLink(e.target.value); setLinkError('') }}
                            onKeyDown={e => e.key === 'Enter' && handleContinue()}
                            placeholder="https://"
                            className="w-full rounded-lg pl-10 pr-4 py-3.5 text-sm outline-none transition-all"
                            style={{
                              backgroundColor: '#161616',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#f0f0f0',
                            }}
                            onFocus={e => (e.currentTarget.style.borderColor = '#C8FF00')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                          />
                        </div>
                        {linkError && <p className="text-xs text-red-400">{linkError}</p>}
                        <button
                          onClick={handleContinue}
                          className="w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-colors"
                          style={{ backgroundColor: '#c0392b' }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a93226')}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
                        >
                          Continue <ArrowRight size={18} />
                        </button>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-5"
                      >
                        <label className="text-base font-semibold text-white">Your details</label>

                        <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Your name"
                            autoFocus
                            className="w-full rounded-lg pl-10 pr-4 py-3.5 text-sm outline-none transition-all"
                            style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f0f0' }}
                            onFocus={e => (e.currentTarget.style.borderColor = '#C8FF00')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                          />
                        </div>

                        <div className="relative">
                          <MessageCircle size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input
                            type="tel"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                            placeholder="WhatsApp number"
                            className="w-full rounded-lg pl-10 pr-4 py-3.5 text-sm outline-none transition-all"
                            style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f0f0' }}
                            onFocus={e => (e.currentTarget.style.borderColor = '#C8FF00')}
                            onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                          />
                        </div>

                        <button
                          onClick={handleSend}
                          disabled={!name.trim() || !whatsapp.trim()}
                          className="w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-40"
                          style={{ backgroundColor: '#c0392b' }}
                          onMouseEnter={e => { if (name && whatsapp) e.currentTarget.style.backgroundColor = '#a93226' }}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#c0392b')}
                        >
                          Send <ArrowRight size={18} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-5 py-8"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ border: '2px solid #C8FF00', boxShadow: '0 0 24px rgba(200,255,0,0.2)' }}
                  >
                    <CheckCircle size={32} style={{ color: '#C8FF00' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">We&apos;ve got it!</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#9ca3af' }}>
                    We&apos;ll review your brand and WhatsApp you with what videos you actually need — usually within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
