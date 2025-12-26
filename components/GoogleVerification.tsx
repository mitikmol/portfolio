'use client'

import { useEffect } from 'react'

export default function GoogleVerification() {
  useEffect(() => {
    // Remove any existing verification tag
    const existingTag = document.querySelector('meta[name="google-site-verification"]')
    if (existingTag) {
      existingTag.remove()
    }

    // Add the verification meta tag
    const meta = document.createElement('meta')
    meta.name = 'google-site-verification'
    meta.content = 'G8U3fxAKjpkbzKW3JNCEf9sVDDuPZaQMlYWlZ_DQTZc'
    document.head.appendChild(meta)

    return () => {
      const tag = document.querySelector('meta[name="google-site-verification"]')
      if (tag) {
        tag.remove()
      }
    }
  }, [])

  return null
}

