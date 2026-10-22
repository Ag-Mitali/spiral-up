'use client'

import OurWork from '@/components/sections/OurWork'
import LogoStrip from '@/components/sections/LogoStrip'
import ProductionAdvantage from '@/components/sections/ProductionAdvantage'
import HowItWorksNew from '@/components/sections/HowItWorksNew'
import TheProof from '@/components/sections/TheProof'
import WhyDifferent2 from '@/components/sections/WhyDifferent2'
import About from '@/components/sections/About'
import WhatElseWeDo from '@/components/sections/WhatElseWeDo'
import FAQ from '@/components/sections/FAQ'
import VideoPlaceholder from '@/components/sections/VideoPlaceholder'
import Testimonials from '@/components/sections/Testimonials'
import GetStarted from '@/components/sections/GetStarted'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <OurWork />
      <LogoStrip />
      <ProductionAdvantage />
      <HowItWorksNew />
      <TheProof />
      <WhatElseWeDo />
      {/* <WhyDifferent2 /> */}
      <About />
      <FAQ />
      <VideoPlaceholder />
      {/* <Testimonials /> */}
      <GetStarted />
      <Footer />
    </main>
  )
}
