'use client'

import { motion } from 'framer-motion'
import { Zap, Video, Palette, Smartphone, ArrowRight, Play } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import OurWork from '@/components/sections/OurWork'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import BrandNeeds from '@/components/sections/BrandNeeds'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <Hero />
      <OurWork />
      <About />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <BrandNeeds />
      <Footer />
    </main>
  )
}
