'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Hi, I'm{' '}
            </span>
            <span className="text-gray-900 dark:text-white">Mitike Bezabh</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Software Developer
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Specializing in modern web development with React, Next.js, Node.js, and WordPress. 
            I craft scalable, performant solutions that deliver exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

