'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Link2, User, MessageCircle, CheckCircle } from 'lucide-react'

interface LinkModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LinkModal({ isOpen, onClose }: LinkModalProps) {
  const [link, setLink] = useState('')
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [showSecondStep, setShowSecondStep] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [linkError, setLinkError] = useState('')

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setLink('')
        setName('')
        setWhatsapp('')
        setShowSecondStep(false)
        setSubmitted(false)
        setLinkError('')
      }, 400)
    }
  }, [isOpen])

  const isValidLink = (value: string) => {
    return value.trim().length > 5 && (
      value.startsWith('http') ||
      value.startsWith('www.') ||
      value.includes('instagram.com') ||
      value.includes('.com') ||
      value.includes('.in') ||
      value.includes('.co')
    )
  }

  const handleLinkContinue = () => {
    if (!isValidLink(link)) {
      setLinkError('Please enter a valid Instagram or product link.')
      return
    }
    setLinkError('')
    setShowSecondStep(true)
  }

  const handleSubmit = () => {
    if (!name.trim() || !whatsapp.trim()) return
    // TODO: wire up to backend / form handler
    setSubmitted(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showSecondStep) handleLinkContinue()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            // stop clicks inside modal from closing it
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl bg-[#0a0a0a] border border-red-500/30 p-8 shadow-2xl"
              style={{ boxShadow: '0 0 60px rgba(255,0,0,0.12), 0 0 120px rgba(255,0,0,0.06)' }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <span className="text-xs font-semibold text-red-500 tracking-widest uppercase">
                      Free brand audit
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-white leading-snug">
                      Send us your link.
                    </h2>
                    <p className="mt-1 text-gray-400 text-sm">
                      We&apos;ll tell you exactly what videos your brand actually needs.
                    </p>
                  </div>

                  {/* Step 1 — Link field */}
                  <div className="mb-5">
                    <label className="block text-xs font-medium text-gray-400 mb-2 tracking-wide uppercase">
                      Instagram or Product Link
                    </label>
                    <div className="relative">
                      <Link2
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      />
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => { setLink(e.target.value); setLinkError('') }}
                        onKeyDown={handleKeyDown}
                        placeholder="instagram.com/yourbrand or yoursite.com"
                        disabled={showSecondStep}
                        className={`w-full bg-white/5 border rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200
                          ${showSecondStep
                            ? 'border-red-500/40 text-gray-400 cursor-not-allowed'
                            : 'border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                          }`}
                      />
                      {showSecondStep && (
                        <CheckCircle
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
                        />
                      )}
                    </div>
                    {linkError && (
                      <p className="mt-1.5 text-xs text-red-400">{linkError}</p>
                    )}
                  </div>

                  {/* Step 2 — Name + WhatsApp revealed after link */}
                  <AnimatePresence>
                    {showSecondStep && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 mb-5">
                          {/* Name */}
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-2 tracking-wide uppercase">
                              Your Name
                            </label>
                            <div className="relative">
                              <User
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                              />
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="John Smith"
                                autoFocus
                                className="w-full bg-white/5 border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500/30 rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200"
                              />
                            </div>
                          </div>

                          {/* WhatsApp */}
                          <div>
                            <label className="block text-xs font-medium text-gray-400 mb-2 tracking-wide uppercase">
                              WhatsApp Number
                            </label>
                            <div className="relative">
                              <MessageCircle
                                size={16}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                              />
                              <input
                                type="tel"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                placeholder="+91 98765 43210"
                                className="w-full bg-white/5 border border-white/10 focus:border-red-500 focus:ring-1 focus:ring-red-500/30 rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-all duration-200"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA */}
                  {!showSecondStep ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLinkContinue}
                      className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 group transition-colors duration-200"
                    >
                      Continue
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  ) : (
                    <motion.button
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      disabled={!name.trim() || !whatsapp.trim()}
                      className="w-full py-3.5 bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 group transition-colors duration-200"
                    >
                      Get my free audit
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  )}

                  <p className="mt-4 text-center text-xs text-gray-600">
                    No spam. No sales calls unless you want one.
                  </p>
                </>
              ) : (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center mx-auto mb-6"
                    style={{ boxShadow: '0 0 30px rgba(255,0,0,0.3)' }}
                  >
                    <CheckCircle size={32} className="text-red-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">We&apos;ve got your link!</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    We&apos;ll review your brand and WhatsApp you with exactly what videos you need. Usually within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 px-8 py-3 border border-red-500/40 text-red-500 rounded-lg text-sm font-medium hover:bg-red-500/10 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
