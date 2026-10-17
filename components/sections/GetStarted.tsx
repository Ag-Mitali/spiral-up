'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Link2, User, Building2, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const ACCENT = '#C8FF00'

const steps = ['Link', 'Details', 'Send']

export default function GetStarted() {
  const [step, setStep] = useState(0)
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [contact, setContact] = useState('')
  const [helpWith, setHelpWith] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [linkError, setLinkError] = useState('')

  const isValidLink = (v: string) =>
    v.trim().length > 3

  const handleContinueStep0 = () => {
    if (!isValidLink(link)) { setLinkError('Please paste your link or Instagram handle.'); return }
    setLinkError('')
    setStep(1)
  }

  const handleContinueStep1 = () => {
    if (!name.trim() || !contact.trim()) return
    setStep(2)
  }

  const handleSend = () => {
    setSubmitted(true)
  }

  const inputStyle = {
    backgroundColor: '#161616',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#f0f0f0',
  }

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = ACCENT
  }
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
  }

  return (
    <section className="py-14 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">09 · GET STARTED</span>
              <div className="h-px w-12 mt-2 bg-red-500/60" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Still thinking?<br />
              <span style={{ color: '#4b5563' }}>Fair</span>
              <span className="text-red-600">.</span>
            </h2>

            <p className="text-base leading-relaxed" style={{ color: '#9ca3af' }}>
              Send us your brand page, product link or current content. We&apos;ll tell you what kind of videos make sense before you commit to anything.
            </p>

            <p className="text-sm font-medium" style={{ color: '#4b5563' }}>
              No obligation. Just straight advice.
            </p>

            {/* Alternative contact */}
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-sm" style={{ color: '#6b7280' }}>Prefer to talk?</p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp us
                </a>
                <span style={{ color: '#374151' }}>·</span>
                <Link
                  href="/book-a-call"
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f0f0f0')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >
                  Book a call
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
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
                        <span className="text-xs" style={{ color: i <= step ? ACCENT : '#4b5563' }}>0{i + 1}</span>
                        <span className="text-sm font-semibold" style={{ color: i === step ? '#f0f0f0' : '#4b5563' }}>{s}</span>
                        {i === step && <div className="h-px w-6" style={{ backgroundColor: ACCENT }} />}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">

                    {/* Step 0 — Link */}
                    {step === 0 && (
                      <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }} className="flex flex-col gap-5">
                        <label className="text-base font-semibold text-white">Instagram handle or product link</label>
                        <div className="relative">
                          <Link2 size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input
                            type="text"
                            value={link}
                            onChange={e => { setLink(e.target.value); setLinkError('') }}
                            onKeyDown={e => e.key === 'Enter' && handleContinueStep0()}
                            placeholder="Paste your link or Instagram handle"
                            autoFocus
                            className="w-full rounded-xl pl-10 pr-4 py-3.5 text-sm outline-none transition-all"
                            style={inputStyle}
                            onFocus={focusStyle}
                            onBlur={blurStyle}
                          />
                        </div>
                        {linkError && <p className="text-xs text-red-400">{linkError}</p>}
                        <button
                          onClick={handleContinueStep0}
                          className="w-full py-4 rounded-xl font-bold text-black text-sm flex items-center justify-center gap-2 group transition-all"
                          style={{ backgroundColor: ACCENT }}
                        >
                          Continue <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}

                    {/* Step 1 — Details */}
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }} className="flex flex-col gap-4">
                        <label className="text-base font-semibold text-white">Your details</label>

                        <div className="relative">
                          <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" autoFocus
                            className="w-full rounded-xl pl-10 pr-4 py-3.5 text-sm outline-none transition-all" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                        </div>

                        <div className="relative">
                          <Building2 size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input type="text" value={brand} onChange={e => setBrand(e.target.value)} placeholder="Brand or business name"
                            className="w-full rounded-xl pl-10 pr-4 py-3.5 text-sm outline-none transition-all" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                        </div>

                        <div className="relative">
                          <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#4b5563' }} />
                          <input type="text" value={contact} onChange={e => setContact(e.target.value)} placeholder="Email or WhatsApp number"
                            className="w-full rounded-xl pl-10 pr-4 py-3.5 text-sm outline-none transition-all" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                        </div>

                        <div className="relative">
                          <MessageSquare size={15} className="absolute left-4 top-4" style={{ color: '#4b5563' }} />
                          <textarea value={helpWith} onChange={e => setHelpWith(e.target.value)} placeholder="What would you like help with?"
                            rows={3} className="w-full rounded-xl pl-10 pr-4 py-3.5 text-sm outline-none transition-all resize-none" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
                        </div>

                        <button
                          onClick={handleContinueStep1}
                          disabled={!name.trim() || !contact.trim()}
                          className="w-full py-4 rounded-xl font-bold text-black text-sm flex items-center justify-center gap-2 group transition-all disabled:opacity-40"
                          style={{ backgroundColor: ACCENT }}
                        >
                          Continue <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}

                    {/* Step 2 — Send */}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }} className="flex flex-col gap-5">
                        <div>
                          <p className="text-base font-semibold text-white mb-1">Ready to share?</p>
                          <p className="text-sm" style={{ color: '#6b7280' }}>Check your details and send your enquiry.</p>
                        </div>

                        {/* Summary */}
                        <div className="rounded-xl p-4 flex flex-col gap-2" style={{ backgroundColor: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}>
                          {[
                            { label: 'Link', value: link },
                            { label: 'Name', value: name },
                            { label: 'Brand', value: brand || '—' },
                            { label: 'Contact', value: contact },
                          ].map((row, i) => (
                            <div key={i} className="flex gap-3 text-sm">
                              <span className="w-16 flex-shrink-0" style={{ color: '#4b5563' }}>{row.label}</span>
                              <span className="text-white truncate">{row.value}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={handleSend}
                          className="w-full py-4 rounded-xl font-bold text-black text-sm flex items-center justify-center gap-2 group transition-all"
                          style={{ backgroundColor: ACCENT }}
                        >
                          Send enquiry <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </>
              ) : (
                /* Success */
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center gap-5 py-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ border: `2px solid ${ACCENT}`, boxShadow: '0 0 24px rgba(200,255,0,0.2)' }}>
                    <CheckCircle size={32} style={{ color: ACCENT }} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">Thanks for sharing your brand.</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#9ca3af' }}>
                    We&apos;ll review your enquiry and get back to you using the contact details you provided.
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
