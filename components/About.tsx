'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex justify-center items-center">
              {/* Profile picture - displays full image without cropping */}
              <div className="w-full max-w-sm bg-white dark:bg-slate-700 rounded-lg overflow-hidden relative shadow-2xl p-2">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                  <img 
                    src="/profile.jpg.jpg" 
                    alt="Mitike Bezabh - Software Developer" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback gradient if image doesn't exist yet
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dedicated Software Developer Crafting Innovative Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a software developer with expertise in modern web technologies, specializing in 
              React, Next.js, Node.js, and WordPress development. My approach combines technical 
              excellence with user-centered design principles to deliver robust, scalable applications 
              that exceed client expectations.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development, I excel at building 
              full-stack solutions that are performant, maintainable, and aligned with industry best 
              practices. I am committed to writing clean, efficient code and staying current with 
              emerging technologies to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Collaborative
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Results-Driven
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

