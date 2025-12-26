import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import GoogleVerification from '@/components/GoogleVerification'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mitike Bezabh - Software Developer | React, Node.js, Next.js, WordPress',
  description: 'Mitike Bezabh is a software developer specializing in React, Node.js, Next.js, and WordPress development. View portfolio, projects, and contact information.',
  keywords: ['Mitike Bezabh', 'Software Developer', 'React Developer', 'Node.js Developer', 'Next.js Developer', 'WordPress Developer', 'Web Developer', 'Full Stack Developer', 'Portfolio'],
  authors: [{ name: 'Mitike Bezabh' }],
  creator: 'Mitike Bezabh',
  publisher: 'Mitike Bezabh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mitike-portfolio.vercel.app',
    title: 'Mitike Bezabh - Software Developer Portfolio',
    description: 'Software Developer specializing in React, Node.js, Next.js, and WordPress. View my portfolio and projects.',
    siteName: 'Mitike Bezabh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitike Bezabh - Software Developer',
    description: 'Software Developer specializing in React, Node.js, Next.js, and WordPress.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G8U3fxAKjpkbzKW3JNCEf9sVDDuPZaQMlYWlZ_DQTZc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleVerification />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}

