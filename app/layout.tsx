import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Spiral Up Digital',
  description: 'Transform your vision into reality with cutting-edge AI videos, professional ads, and stunning websites. Your digital transformation starts here.',
  keywords: 'AI videos, digital marketing, advertising, web design, Spiral Up Digital',
  openGraph: {
    title: 'Spiral Up Digital',
    description: 'Transform your vision into reality with AI-powered solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
