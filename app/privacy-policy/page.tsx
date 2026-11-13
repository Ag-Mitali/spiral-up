'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const sections = [
  {
    title: '1. Terms',
    content: `By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, applicable laws and regulations and their compliance. If you disagree with any of the stated terms and conditions, you are prohibited from using or accessing this site. The materials contained in this site are secured by relevant copyright and trade mark law.`,
  },
  {
    title: '2. Use License',
    content: `Permission is allowed to temporarily download one duplicate of the materials (data or programming) on Spiral Up Digital's site for individual and non-business use only. This is the just a permit of license and not an exchange of title, and under this permit you may not:

• Modify or copy the materials;
• Use the materials for any commercial use, or for any public presentation (business or non-business);
• Attempt to decompile or rebuild any product or material contained on Spiral Up Digital's site;
• Remove any copyright or other restrictive documentations from the materials; or
• Transfer the materials to someone else or even "mirror" the materials on other server.

This permit might consequently be terminated if you disregard any of these confinements and may be ended by Spiral Up Digital whenever deemed. After permit termination or when your viewing permit is terminated, you must destroy any downloaded materials in your ownership whether in electronic or printed form.`,
  },
  {
    title: '3. Disclaimer',
    content: `The materials on Spiral Up Digital's site are given "as is". Spiral Up Digital makes no guarantees, communicated or suggested, and thus renounces and nullifies every single other warranties, including without impediment, inferred guarantees or states of merchantability, fitness for a specific reason, or non-encroachment of licensed property or other infringement of rights. Further, Spiral Up Digital does not warrant or make any representations concerning the precision, likely results, or unwavering quality of the utilization of the materials on its Internet site or generally identifying with such materials or on any destinations connected to this website.`,
  },
  {
    title: '4. Constraints',
    content: `In no occasion should Spiral Up Digital or its suppliers subject for any harms (counting, without constraint, harms for loss of information or benefit, or because of business interference,) emerging out of the utilization or powerlessness to utilize the materials on Spiral Up Digital's Internet webpage, regardless of the possibility that Spiral Up Digital or a Spiral Up Digital approved agent has been told orally or in written of the likelihood of such harm. Since a few purviews don't permit constraints on inferred guarantees, or impediments of obligation for weighty or coincidental harms, these confinements may not make a difference to you.`,
  },
  {
    title: '5. Amendments and Errata',
    content: `The materials showing up on Spiral Up Digital's site could incorporate typographical, or photographic mistakes. Spiral Up Digital does not warrant that any of the materials on its site are exact, finished, or current. Spiral Up Digital may roll out improvements to the materials contained on its site whenever without notification. Spiral Up Digital does not, then again, make any dedication to update the materials.`,
  },
  {
    title: '6. Links',
    content: `Spiral Up Digital has not checked on the majority of the websites or links connected to its website and is not in charge of the substance of any such connected webpage. The incorporation of any connection does not infer support by Spiral Up Digital of the site. Utilization of any such connected site is at the user's own risk.`,
  },
  {
    title: '7. Site Terms of Use Modifications',
    content: `Spiral Up Digital may update these terms of utilization for its website whenever without notification. By utilizing this site you are consenting to be bound by the then current form of these Terms and Conditions of Use.`,
  },
  {
    title: '8. Governing Law',
    content: `Any case identifying with Spiral Up Digital's site should be administered by the laws of the country of India Spiral Up Digital State without respect to its contention of law provisions.

General Terms and Conditions applicable to Use of a Web Site.`,
  },
]

const privacySections = [
  {
    content: `Your privacy is critical to us. Likewise, we have built up this Policy with the end goal you should see how we gather, utilize, impart and reveal and make utilization of individual data. The following blueprints our privacy policy.

• Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.

• We will gather and utilization of individual data singularly with the target of satisfying those reasons indicated by us and for other good purposes, unless we get the assent of the individual concerned or as required by law.

• We will just hold individual data the length of essential for the satisfaction of those reasons.

• We will gather individual data by legal and reasonable means and, where fitting, with the information or assent of the individual concerned.

• Personal information ought to be important to the reasons for which it is to be utilized, and, to the degree essential for those reasons, ought to be exact, finished, and updated.

• We will protect individual data by security shields against misfortune or burglary, and also unapproved access, divulgence, duplicating, use or alteration.

• We will promptly provide customers with access to our policies and procedures for the administration of individual data.

• We are focused on leading our business as per these standards with a specific end goal to guarantee that the privacy of individual data is secure and maintained.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 pb-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-red-500 tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            Last updated: August 2026
          </p>
          <div className="mt-6 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
        </motion.div>

        {/* T&C Sections */}
        <div className="flex flex-col gap-6 mb-20">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: 'rgba(18,18,18,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h2 className="text-lg md:text-xl font-bold text-white mb-4">
                {section.title}
              </h2>
              <div className="text-sm md:text-base leading-relaxed whitespace-pre-line" style={{ color: '#9ca3af' }}>
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy Policy Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
            Privacy Policy
          </h2>
          <div className="mt-4 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
        </motion.div>

        {/* Privacy Policy Content */}
        <div className="flex flex-col gap-6">
          {privacySections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04 }}
              className="rounded-2xl p-7"
              style={{
                backgroundColor: 'rgba(18,18,18,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="text-sm md:text-base leading-relaxed whitespace-pre-line" style={{ color: '#9ca3af' }}>
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-sm" style={{ color: '#6b7280' }}>
            © {new Date().getFullYear()} Spiral Up Digital. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm font-semibold transition-colors duration-200"
            style={{ color: '#C8FF00' }}
          >
            ← Back to home
          </Link>
        </motion.div>

      </div>

      <Footer />
    </main>
  )
}
