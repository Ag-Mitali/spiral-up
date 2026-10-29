'use client'

import OurWork from '@/components/sections/OurWork'
import LogoStrip from '@/components/sections/LogoStrip'
import ProductionAdvantage from '@/components/sections/ProductionAdvantage'
import HowItWorksNew from '@/components/sections/HowItWorksNew'
import TheProof from '@/components/sections/TheProof'
import About from '@/components/sections/About'
import WhatElseWeDo from '@/components/sections/WhatElseWeDo'
import FAQ from '@/components/sections/FAQ'
import GetStarted from '@/components/sections/GetStarted'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <div id="work"><OurWork /></div>
      <LogoStrip />
      <ProductionAdvantage />
      <div id="how-it-works"><HowItWorksNew /></div>
      <div id="results"><TheProof /></div>
      <div id="services"><WhatElseWeDo /></div>
      <div id="about"><About /></div>
      <FAQ />
      <div id="contact"><GetStarted /></div>
      <Footer />
    </main>
  )
}
