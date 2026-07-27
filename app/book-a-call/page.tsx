'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

interface FormData {
  name: string
  email: string
  phoneNumber: string
  company: string
  companyWebsite: string
  roleTitle: string
  inquiry: string
}

const questions = [
  {
    id: 'name',
    question: "What's your full name?",
    intro: "Let's start with introductions.",
    placeholder: 'Your full name',
    type: 'text',
  },
  {
    id: 'email',
    question: 'What\'s your email?',
    intro: 'We\'ll use this to contact you.',
    placeholder: 'your@email.com',
    type: 'email',
  },
  {
    id: 'phoneNumber',
    question: 'What\'s your phone number?',
    intro: 'How can we reach you?',
    placeholder: '+1 (555) 123-4567',
    type: 'tel',
  },
  {
    id: 'company',
    question: 'What\'s your company name?',
    intro: 'Tell us about your brand.',
    placeholder: 'Your company name',
    type: 'text',
  },
  {
    id: 'companyWebsite',
    question: 'What\'s your company website?',
    intro: 'Any website or social link?',
    placeholder: 'https://yourcompany.com',
    type: 'url',
  },
  {
    id: 'roleTitle',
    question: 'What\'s your role & title?',
    intro: 'What do you do?',
    placeholder: 'e.g., Marketing Manager',
    type: 'text',
  },
  {
    id: 'inquiry',
    question: 'What are you inquiring about?',
    intro: 'Why do you want to schedule a call?',
    placeholder: 'Tell us about your project...',
    type: 'textarea',
  },
]

export default function BookACallPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const referrer = searchParams.get('from') || '/'
  
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    companyWebsite: '',
    roleTitle: '',
    inquiry: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showError, setShowError] = useState(false)

  const currentQuestion = questions[currentStep]

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
    setShowError(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isCurrentFieldEmpty) {
      if (currentQuestion.type === 'textarea') {
        // For textarea, allow Shift+Enter to submit, regular Enter for new line
        if (e.shiftKey) {
          e.preventDefault()
          if (isLastQuestion) {
            handleSubmit()
          } else {
            handleNext()
          }
        }
      } else {
        // For text inputs, Enter submits
        e.preventDefault()
        if (isLastQuestion) {
          handleSubmit()
        } else {
          handleNext()
        }
      }
    }
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      console.log('Form submitted:', formData)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isLastQuestion = currentStep === questions.length - 1
  const isCurrentFieldEmpty = !formData[currentQuestion.id as keyof FormData]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h1 className="text-4xl font-serif text-white mb-4">
            Thank you!
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            We've received your information and we'll get back to you soon.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(referrer)}
            className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-xl"
      >
        {/* Card Container */}
        <div className="bg-black border border-gray-800 rounded-2xl p-5">
          
          {/* Header with Back Button and Title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(referrer)}
                className="p-1 hover:bg-gray-900 rounded-lg transition-colors"
              >
                <ArrowLeft size={18} className="text-gray-400 hover:text-white" />
              </motion.button>
              <h1 className="text-lg font-serif text-white">
                Spiral Up Digital
              </h1>
            </div>
            <div className="text-xl">👋</div>
          </div>

          {/* Step Indicator and Progress */}
          <div className="mb-6">
            <p className="text-gray-500 text-xs mb-2">
              Step {currentStep + 1} of {questions.length}
            </p>
            
            {/* Progress Bar */}
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                style={{
                  boxShadow: '0 0 16px rgba(255, 0, 0, 0.6)',
                }}
              />
            </div>
          </div>

          {/* Question Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-8"
            >
              {/* Intro Text */}
              <p className="text-gray-500 text-xs mb-2">
                {currentQuestion.intro}
              </p>
              
              {/* Main Question */}
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
                {currentQuestion.question}
              </h2>

              {/* Input Field */}
              <div>
                {currentQuestion.type === 'textarea' ? (
                  <textarea
                    autoFocus
                    value={formData[currentQuestion.id as keyof FormData]}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    rows={2}
                    className="w-full bg-transparent border-b-2 border-gray-700 focus:border-red-500 text-white text-base placeholder-gray-600 focus:outline-none transition-colors py-0 resize-none font-serif leading-tight"
                  />
                ) : (
                  <input
                    autoFocus
                    type={currentQuestion.type}
                    value={formData[currentQuestion.id as keyof FormData]}
                    onChange={(e) => handleInputChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={currentQuestion.placeholder}
                    className="w-full bg-transparent border-b-2 border-gray-700 focus:border-red-500 text-white text-base placeholder-gray-600 focus:outline-none transition-colors py-2 font-serif"
                  />
                )}
              </div>

              {/* Error Message */}
              {showError && isCurrentFieldEmpty && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 mt-2 text-red-500 text-xs"
                >
                  <AlertCircle size={14} />
                  <span>Please complete this field</span>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Continue Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (isCurrentFieldEmpty) {
                setShowError(true)
              } else {
                if (isLastQuestion) {
                  handleSubmit()
                } else {
                  handleNext()
                }
              }
            }}
            disabled={isSubmitting}
            className="w-full mt-8 px-8 py-3 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
            style={{
              boxShadow: '0 0 16px rgba(255, 0, 0, 0.4)',
            }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                {isLastQuestion ? 'Submit' : 'Continue'}
                <ArrowRight size={20} />
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
