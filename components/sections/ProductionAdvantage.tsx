'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const metrics = [
  {
    title: '⅕ Cost',
    subtitle: 'Production Value',
    description: 'High production value at one fifth the cost of a comparable traditional full scale production.',
    value: '20%',
    color: '#C8FF00',
    chartType: 'bars'
  },
  {
    title: '10× Faster',
    subtitle: 'Delivery Speed',
    description: 'A faster journey from approved concept to finished film without compromising on quality.',
    value: '10×',
    color: '#C8FF00',
    chartType: 'donut'
  },
  {
    title: 'Infinite',
    subtitle: 'Possibilities',
    description: 'Carefully crafted lighting, texture and movement. Work you can judge for yourself.',
    value: '∞',
    color: '#C8FF00',
    chartType: 'area'
  },
]

const guarantees = [
  {
    title: 'Product accuracy',
    desc: 'Your product\'s shape, colours, packaging and details stay true to your references.',
  },
  {
    title: 'Lifelike realism',
    desc: 'Believable people, natural movement and visuals that feel real.',
  },
  {
    title: 'Brand consistency',
    desc: 'Your identity carried through every frame, across every film.',
  },
]

export default function ProductionAdvantage() {
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-14 md:py-24">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
              THE PRODUCTION ADVANTAGE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Great videos.<br />No shoot expense.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg max-w-3xl"
            style={{ color: '#d1d5db' }}
          >
            Cinematic ads, reels and brand films without the cost and logistics of a production shoot.
          </motion.p>
        </div>

        {/* Three Metric Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: i === 0 ? 'linear-gradient(135deg, rgba(200,255,0,0.15) 0%, rgba(200,255,0,0.05) 100%)' : 
                            'linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(15,15,15,0.9) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at top, rgba(200,255,0,0.1), transparent 70%)'
                }}
              />

              <div className="relative z-10">
                {/* Title and subtitle */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: metric.color }}>
                    {metric.title}
                  </h3>
                  <p className="text-sm text-white/60">{metric.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#9ca3af' }}>
                  {metric.description}
                </p>

                {/* Chart/Visual representation */}
                <div className="relative h-32 mb-6">
                  {metric.chartType === 'bars' && (
                    <div className="flex items-end justify-between h-full gap-2">
                      {[40, 55, 75, 45, 85, 60, 70].map((height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className="flex-1 rounded-t-lg"
                          style={{
                            background: idx % 2 === 0 
                              ? 'linear-gradient(to top, rgba(200,255,0,0.8), rgba(200,255,0,0.4))'
                              : 'linear-gradient(to top, rgba(100,100,100,0.6), rgba(60,60,60,0.4))'
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {metric.chartType === 'donut' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-32 h-32 transform -rotate-90">
                        {/* Background circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="rgba(100,100,100,0.2)"
                          strokeWidth="12"
                        />
                        {/* Animated progress circle */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={metric.color}
                          strokeWidth="12"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 251.2" }}
                          whileInView={{ strokeDasharray: "188.4 251.2" }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ color: metric.color }}>75%</span>
                      </div>
                    </div>
                  )}

                  {metric.chartType === 'area' && (
                    <div className="relative h-full">
                      <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`areaGradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={metric.color} stopOpacity="0.3" />
                            <stop offset="100%" stopColor={metric.color} stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area path */}
                        <motion.path
                          d="M 0 80 L 20 70 L 40 65 L 60 55 L 80 50 L 100 45 L 120 40 L 140 35 L 160 30 L 180 25 L 200 20 L 200 100 L 0 100 Z"
                          fill={`url(#areaGradient-${i})`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ duration: 1 }}
                        />
                        
                        {/* Line path */}
                        <motion.path
                          d="M 0 80 L 20 70 L 40 65 L 60 55 L 80 50 L 100 45 L 120 40 L 140 35 L 160 30 L 180 25 L 200 20"
                          fill="none"
                          stroke={metric.color}
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Large metric value */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl md:text-6xl font-black"
                  style={{ 
                    color: metric.color,
                    textShadow: `0 0 30px ${metric.color}40`
                  }}
                >
                  {metric.value}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">We guarantee:</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {guarantees.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#C8FF00',
                    boxShadow: '0 0 20px rgba(200,255,0,0.4)'
                  }}
                >
                  <Check size={18} strokeWidth={3} style={{ color: '#000' }} />
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold text-white mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="w-full md:w-auto py-4 px-12 rounded-2xl font-bold text-white text-base md:text-lg flex items-center justify-center gap-3 group transition-all duration-200 shadow-lg hover:shadow-xl mx-auto"
            style={{ backgroundColor: '#e53e3e' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#c53030'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#e53e3e'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Let&apos;s talk about your next film
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}

