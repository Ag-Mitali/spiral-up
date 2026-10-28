'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    number: '01',
    question: 'What happens on the first call?',
    answer: "Tell us about your business, what you want to achieve and what's getting in the way. We'll ask questions, share our initial thinking and explore where we can help. If there's a fit, we follow up with a proposed direction for your approval. No obligation.",
  },
  {
    number: '02',
    question: "We already do marketing. Can you help us figure out what's missing?",
    answer: "Yes. We look at what you're already doing, what's working and where the gaps are. That could mean supporting your existing team, improving one part of the marketing or taking on a broader role. The recommendation follows the business need.",
  },
  {
    number: '03',
    question: 'How much of my time will this take?',
    answer: "We need your business knowledge, access to the right information and feedback at agreed checkpoints. We handle the planning, coordination and execution, with a clear process for your approvals.",
  },
  {
    number: '04',
    question: 'Can we start with one specific problem?',
    answer: "Absolutely. You might need better leads, stronger sales, a clearer brand story or support with a launch. We can start with a focused brief and build from there as the business needs evolve.",
  },
  {
    number: '05',
    question: "What if what we're asking for isn't what the business needs?",
    answer: "We'll tell you. We question the brief, explain our reasoning and recommend where we believe your effort and budget will do more good. You approve the direction before we proceed.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          {/* Removed FAQ prefix */}
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Straight answers,<br /><span className="text-red-600">no fluff</span><span className="text-red-600">.</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              The questions we get the most, answered.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-colors duration-200"
                style={{
                  border: `1px solid ${openIndex === i ? 'rgba(200,255,0,0.3)' : 'rgba(255,255,255,0.1)'}`,
                  backgroundColor: openIndex === i ? 'rgba(200,255,0,0.03)' : 'transparent',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start gap-6 px-5 py-4 text-left group"
                >
                  <span className="text-sm font-semibold w-6 flex-shrink-0 mt-0.5" style={{ color: '#C8FF00' }}>
                    {faq.number}
                  </span>
                  <span className="flex-1 text-base font-semibold text-white group-hover:text-[#C8FF00] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{
                      border: '1.5px solid rgba(255,255,255,0.12)',
                      backgroundColor: openIndex === i ? 'rgba(200,255,0,0.1)' : 'transparent',
                      borderColor: openIndex === i ? 'rgba(200,255,0,0.4)' : 'rgba(255,255,255,0.12)',
                    }}
                  >
                    {openIndex === i
                      ? <Minus size={14} style={{ color: '#C8FF00' }} />
                      : <Plus size={14} style={{ color: '#9ca3af' }} />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 px-5 pl-[4.5rem] text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
