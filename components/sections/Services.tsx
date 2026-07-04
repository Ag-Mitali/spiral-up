'use client'

import { motion } from 'framer-motion'
import { Video, Zap, Palette, Smartphone, Sparkles, Cog } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'AI Video Production',
      description: 'Create stunning, professional videos powered by AI technology. From concept to delivery in record time.',
      features: ['AI Script Generation', 'Automated Editing', 'Multi-language Support'],
    },
    {
      icon: Zap,
      title: 'Digital Advertising',
      description: 'Targeted ad campaigns that convert. Reach your audience with precision and maximize ROI.',
      features: ['Campaign Strategy', 'Creative Design', 'Performance Analytics'],
    },
    {
      icon: Smartphone,
      title: 'Web Design & Development',
      description: 'Responsive, fast, and beautiful websites built with the latest technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Complete brand identity solutions that tell your story and resonate with your audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    },
    {
      icon: Sparkles,
      title: 'AI Content Creation',
      description: 'Generate engaging content at scale with intelligent AI tools.',
      features: ['Copy Writing', 'Image Generation', 'Social Media Content'],
    },
    {
      icon: Cog,
      title: 'Marketing Automation',
      description: 'Streamline your marketing workflows with intelligent automation.',
      features: ['Email Campaigns', 'Lead Nurturing', 'CRM Integration'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-black" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 rounded-xl transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
