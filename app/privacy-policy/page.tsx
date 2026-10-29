'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const sections = [
  {
    title: '1. Who We Are',
    content: `Spiral Up Digital is a video production and digital marketing agency based in India. We create cinematic brand films, reels, performance marketing campaigns, and growth strategies for businesses across India and internationally.

If you have any questions about this policy, you can reach us at:
Email: abhishek@spiralup.digital
WhatsApp: +91 77100 43210`,
  },
  {
    title: '2. What Information We Collect',
    content: `We collect information you voluntarily provide when you:

• Fill out a contact or enquiry form on our website
• Book a discovery call or consultation
• Send us an email or WhatsApp message
• Subscribe to updates or newsletters

The information we may collect includes:
• Your name and business name
• Email address and phone number
• Information about your brand, goals, and marketing needs
• Any files or assets you choose to share with us

We also automatically collect standard technical data when you visit our website, including your IP address, browser type, pages visited, and time spent — through cookies and analytics tools such as Google Analytics.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:

• Respond to your enquiries and set up calls or consultations
• Understand your business needs and prepare proposals
• Deliver the services you have engaged us for
• Send you relevant updates, case studies, or offers (only if you have opted in)
• Improve our website and understand how visitors engage with it
• Meet our legal and contractual obligations

We do not use your data for automated decision-making or profiling.`,
  },
  {
    title: '4. How We Share Your Information',
    content: `We do not sell, rent, or trade your personal information to any third party.

We may share your data only with:

• Trusted service providers who assist in running our business (e.g. scheduling tools, email platforms, cloud storage) — they are bound by confidentiality obligations
• Professional advisors such as accountants or lawyers where legally required
• Law enforcement or regulatory authorities if required by applicable law

All third parties we work with are required to handle your data securely and in line with applicable data protection laws.`,
  },
  {
    title: '5. Cookies',
    content: `Our website uses cookies to improve your browsing experience and to help us understand how visitors use the site.

Types of cookies we use:
• Essential cookies — necessary for the website to function correctly
• Analytics cookies — help us understand traffic patterns and page performance (via Google Analytics)

You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of some parts of the site.`,
  },
  {
    title: '6. Data Retention',
    content: `We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law.

• Enquiry and contact data: retained for up to 3 years unless we enter into a business relationship, in which case we retain it for the duration of the relationship plus a reasonable period thereafter
• Analytics data: retained per Google Analytics default settings (up to 26 months)

Once data is no longer needed, we securely delete or anonymise it.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have rights regarding your personal data, including:

• The right to access the data we hold about you
• The right to correct inaccurate or incomplete data
• The right to request deletion of your data ("right to be forgotten")
• The right to object to or restrict how we process your data
• The right to data portability (receiving your data in a structured format)
• The right to withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us at abhishek@spiralup.digital. We will respond within 30 days.`,
  },
  {
    title: '8. Data Security',
    content: `We take reasonable technical and organisational steps to protect your personal information from unauthorised access, loss, or misuse. These include:

• Secure storage of files and communications
• Limited access to personal data within our team on a need-to-know basis
• Use of reputable, secure third-party platforms

While we take these precautions, no method of transmission over the internet is completely secure. If you have concerns about data security, please contact us directly.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website may contain links to third-party websites such as social media platforms, partner tools, or client case studies. We are not responsible for the privacy practices of those sites and encourage you to review their own privacy policies.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our services are intended for businesses and professionals. We do not knowingly collect personal information from anyone under the age of 18. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically.

Continued use of our website after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions, concerns, or requests related to this Privacy Policy, please get in touch:

Spiral Up Digital
Email: abhishek@spiralup.digital
WhatsApp: +91 77100 43210
Website: spiralupdigital.com`,
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
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            Last updated: August 2026
          </p>
          <div className="mt-6 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg leading-relaxed mb-14"
          style={{ color: '#d1d5db' }}
        >
          At Spiral Up Digital, we respect your privacy and are committed to handling your personal information responsibly. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights in relation to it.

          By using our website or engaging with our services, you agree to the practices described in this policy.
        </motion.p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
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
