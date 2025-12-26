'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and React. Features include smooth animations, dark mode support, and optimized performance.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/mitikmol',
    live: '#',
  },
  {
    title: 'Tour Reservation System',
    description: 'A comprehensive tour booking platform developed with PHP. Includes user management, booking system, and administrative dashboard for tour operators.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/mitikmol/tour-reservation-system',
    live: '#',
  },
  {
    title: 'Driving License Preparation',
    description: 'An educational web application designed to help users prepare for driving license examinations. Features interactive quizzes and progress tracking.',
    tech: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com/mitikmol/DrivingLicencesPreparationProject',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary-200 to-primary-400 dark:from-primary-900 dark:to-primary-700 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="relative z-10 text-white text-center px-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

