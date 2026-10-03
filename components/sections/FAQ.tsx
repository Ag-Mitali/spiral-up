'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    number: '01',
    question: 'What does this cost?',
    answer: 'Most projects run ₹60,000–₹1,00,000 depending on volume. Brand films are quoted separately.',
  },
  {
    number: '02',
    question: "What if I don't like the first cut?",
    answer: 'One revision round included.',
  },
  {
    number: '03',
    question: 'How is this cheaper than a shoot?',
    answer: "We don't have the overheads of a traditional shoot — no large crews, locations or equipment costs — so we can create high-quality videos faster and at a lower cost.",
  },
  {
    number: '04',
    question: 'Do you need product samples?',
    answer: "Not always. If needed, we'll let you know.",
  },
  {
    number: '05',
    question: 'Who owns the footage?',
    answer: 'You do. Once the project is complete, you own the final footage and can use it across your channels.',
  },
  {
    number: '06',
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Yes. We can work within your existing brand guidelines.',
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
          <span className="text-sm font-semibold text-red-500 tracking-widest uppercase">
            08 · FAQ
          </span>
          <div className="h-px w-12 mt-2 bg-red-500/60" />
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Straight<br />answers<span className="text-red-600">.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#6b7280' }}>
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
