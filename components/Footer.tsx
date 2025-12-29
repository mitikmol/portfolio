'use client'

import { Mail, Linkedin, Github } from 'lucide-react'

const socialLinks = [
  { icon: Mail, href: 'mailto:mitikebezabh@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mitike-bezabh-8104b5326/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/mitikmol', label: 'GitHub' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} Mitike Bezabh. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}





