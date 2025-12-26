'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mitike Bezabh',
      jobTitle: 'Software Developer',
      description: 'Software Developer specializing in React, Node.js, Next.js, and WordPress development',
      url: 'https://mitike-portfolio.vercel.app',
      sameAs: [
        'https://github.com/mitikmol',
        'https://www.linkedin.com/in/mitike-bezabh-8104b5326/',
      ],
      email: 'mitikebezabh@gmail.com',
      knowsAbout: [
        'React',
        'Next.js',
        'Node.js',
        'WordPress',
        'JavaScript',
        'TypeScript',
        'Web Development',
        'Full Stack Development',
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null
}
