'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'Website Development',
      description: 'AI-powered e-commerce platform with personalized recommendations',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['E-Commerce', 'AI', 'Next.js'],
    },
    {
      id: 2,
      title: 'Brand Awareness Campaign',
      category: 'Video & Advertising',
      description: 'Viral AI-generated video campaign reaching 10M+ views',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Video', 'AI', 'Marketing'],
    },
    {
      id: 3,
      title: 'Digital Transformation Suite',
      category: 'Web Development',
      description: 'Complete digital ecosystem for enterprise clients',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e12aaff3?w=500&h=300&fit=crop',
      tags: ['Enterprise', 'Web', 'Dashboard'],
    },
  ]

  return (
    <section className="py-20 bg-black" id="portfolio">
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
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of our best work and success stories
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-red-500/50 transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="text-sm text-red-400 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-xs text-red-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <motion.button
                  whileHover={{ gap: '12px' }}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  View Project
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
