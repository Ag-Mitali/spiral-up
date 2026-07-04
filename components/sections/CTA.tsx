'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-black" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/50 rounded-2xl p-12 md:p-16 overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Digital Presence?
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's work together to bring your vision to life. Our team is ready to create something amazing for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                Schedule a Call
              </motion.button>
            </div>

            <p className="text-sm text-gray-400 pt-4">
              Or reach out directly at hello@spiralupdigital.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
