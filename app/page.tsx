'use client'

import Hero from '@/components/sections/Hero'
import OurWork from '@/components/sections/OurWork'
import LogoStrip from '@/components/sections/LogoStrip'
import ProductionAdvantage from '@/components/sections/ProductionAdvantage'
import HowItWorksNew from '@/components/sections/HowItWorksNew'
import WhyDifferent2 from '@/components/sections/WhyDifferent2'
import About from '@/components/sections/About'
import PerformanceWork from '@/components/sections/PerformanceWork'

import Pricing from '@/components/sections/Pricing'
import TheProof from '@/components/sections/TheProof'
import VideoPlaceholder from '@/components/sections/VideoPlaceholder'
import WhatElseWeDo from '@/components/sections/WhatElseWeDo'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import GetStarted from '@/components/sections/GetStarted'


import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      {/* <Hero /> */}
      <OurWork />
      <LogoStrip />
      <ProductionAdvantage />
      <HowItWorksNew />
      <TheProof />
      <WhyDifferent2 />
      <About />
      <WhatElseWeDo />
      <FAQ />
      <VideoPlaceholder />
      <Testimonials />
      <GetStarted />
      {/* <Pricing /> */}
      <Footer />
    </main>
  )
}
