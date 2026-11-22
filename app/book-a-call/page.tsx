'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, Suspense } from 'react'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

const SERVICES = [
  'Reels & Ad Generation',
  'Performance Marketing',
  'Brand Strategy & Go to Market',
  'Social Media Management',
  'Websites, Apps & Automation',
  'SEO, AEO & GEO',
  'Other',
]

const steps = [
  { id: 'name',     intro: 'Introductions',   question: "What's your full name?",              placeholder: 'Your full name',   type: 'text'     },
  { id: 'company',  intro: 'Your brand',       question: "What's your company name?",           placeholder: 'Company name',     type: 'text'     },
  { id: 'email',    intro: 'Stay in touch',    question: "What's your work email?",             placeholder: 'you@company.com',  type: 'email'    },
  { id: 'phone',    intro: 'Stay in touch',    question: "What's your phone number?",           placeholder: '+91 XXXXX XXXXX',  type: 'tel'      },
  { id: 'services', intro: 'Your goals',       question: 'What are you looking to work on?',   type: 'checkbox'                                  },
]

const PERSONAL_DOMAINS = ['gmail.com','yahoo.com','hotmail.com','outlook.com','rediffmail.com','icloud.com','live.com','ymail.com','aol.com','yahoo.in']

interface FormData { name: string; company: string; email: string; phone: string; services: string[] }

function validateField(id: string, formData: FormData): string | null {
  if (id === 'email') {
    const email = formData.email.trim()
    if (!email.includes('@') || !email.includes('.')) return 'Please enter a valid email address'
    const domain = email.split('@')[1]?.toLowerCase()
    if (PERSONAL_DOMAINS.includes(domain)) return 'Please use your work email — not Gmail, Yahoo etc.'
    return null
  }
  if (id === 'phone') {
    const digits = formData.phone.replace(/\D/g, '')
    if (digits.length < 10) return 'Please enter a valid phone number (at least 10 digits)'
    return null
  }
  if (id === 'services') return formData.services.length === 0 ? 'Please select at least one' : null
  const val = formData[id as keyof Omit<FormData,'services'>]?.trim()
  return !val ? 'This field is required' : null
}

function BookACallForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const brandLink = searchParams.get('brand_link') || ''
  const urlSource = searchParams.get('source') || searchParams.get('from') || ''
  const source = urlSource || (brandLink ? 'OurWork — Brand Link' : 'Website')

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({ name: '', company: '', email: '', phone: '', services: [] })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [direction, setDirection] = useState(1)
  const [error, setError] = useState<string | null>(null)

  const step = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100
  const isLast = currentStep === steps.length - 1

  const handleText = (val: string) => { setFormData(prev => ({ ...prev, [step.id]: val })); setError(null) }
  const toggleService = (s: string) => {
    setFormData(prev => ({ ...prev, services: prev.services.includes(s) ? prev.services.filter(x => x !== s) : [...prev.services, s] }))
    setError(null)
  }

  const handleNext = () => {
    const err = validateField(step.id, formData)
    if (err) { setError(err); return }
    setError(null)
    if (!isLast) { setDirection(1); setCurrentStep(s => s + 1) } else handleSubmit()
  }

  const handleBack = () => {
    setError(null)
    if (currentStep > 0) { setDirection(-1); setCurrentStep(s => s - 1) } else router.push('/')
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, brandLink, source }),
      })
    } catch (err) { console.error(err) }
    finally {
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
      })
      router.push(`/thank-you?${params.toString()}`)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(229,62,62,0.06) 0%, #000 60%)' }}>

      {/* Nav */}
      <div className="flex items-center justify-between px-8 md:px-16 py-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 group"
          style={{ color: '#6b7280' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
          {currentStep === 0 ? 'Back to home' : 'Back'}
        </button>

        <div className="flex items-center gap-4">
          <Image src="/images/Spiral up logo - new.png" alt="Spiral Up Digital" width={28} height={28} className="opacity-80" />
          <span className="text-xs font-medium" style={{ color: '#4b5563' }}>{currentStep + 1} of {steps.length}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mx-8 md:mx-16 h-px rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #e53e3e, #ff6b6b)' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* Step tag */}
      <div className="px-8 md:px-16 mt-10">
        <motion.span
          key={currentStep}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(229,62,62,0.08)', color: '#e53e3e', border: '1px solid rgba(229,62,62,0.15)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          {step.intro}
        </motion.span>
      </div>

      {/* Form body */}
      <div className="flex-1 flex items-start justify-center px-8 md:px-16 pt-10 pb-32 md:pb-16">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight tracking-tight">
                {step.question}
              </h2>

              {step.type === 'checkbox' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map(service => {
                    const selected = formData.services.includes(service)
                    return (
                      <button
                        key={service}
                        onClick={() => toggleService(service)}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm font-medium transition-all duration-200"
                        style={{
                          backgroundColor: selected ? 'rgba(229,62,62,0.1)' : 'rgba(255,255,255,0.03)',
                          border: `1px solid ${selected ? 'rgba(229,62,62,0.6)' : 'rgba(255,255,255,0.08)'}`,
                          color: selected ? '#fff' : '#9ca3af',
                        }}
                      >
                        <span>{service}</span>
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ml-2 transition-all duration-200"
                          style={{
                            backgroundColor: selected ? '#e53e3e' : 'transparent',
                            border: selected ? '1px solid #e53e3e' : '1px solid rgba(255,255,255,0.15)',
                          }}
                        >
                          {selected && <Check size={11} className="text-white" strokeWidth={3} />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="relative">
                  <input
                    autoFocus
                    type={step.type}
                    value={formData[step.id as keyof Omit<FormData, 'services'>]}
                    onChange={e => handleText(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleNext() }}
                    placeholder={step.placeholder}
                    className="w-full bg-transparent pb-4 text-white text-2xl md:text-3xl placeholder-gray-800 outline-none transition-colors duration-200"
                    style={{ borderBottom: `2px solid ${error ? '#e53e3e' : 'rgba(255,255,255,0.12)'}` }}
                  />
                </div>
              )}

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 text-xs font-medium flex items-center gap-1.5"
                    style={{ color: '#f87171' }}
                  >
                    <span>⚠</span> {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="mt-12 flex items-center gap-4">
            <motion.button
              onClick={handleNext}
              disabled={isSubmitting}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white text-sm transition-all duration-200 disabled:opacity-40"
              style={{ backgroundColor: '#e53e3e', boxShadow: '0 4px 20px rgba(229,62,62,0.3)' }}
              whileHover={{ scale: 1.03, boxShadow: '0 6px 28px rgba(229,62,62,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <>{isLast ? 'Submit' : 'Continue'} <ArrowRight size={15} /></>
              )}
            </motion.button>

            {!isLast && (
              <span className="text-xs" style={{ color: '#374151' }}>
                or press <kbd className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#6b7280', border: '1px solid rgba(255,255,255,0.08)' }}>Enter ↵</kbd>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookACallPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BookACallForm />
    </Suspense>
  )
}
