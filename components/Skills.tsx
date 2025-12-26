'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & CMS',
    skills: ['Node.js', 'Express', 'REST APIs', 'WordPress', 'PHP', 'Database Design'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'npm/yarn', 'Webpack', 'Responsive Design', 'API Integration', 'Version Control'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

