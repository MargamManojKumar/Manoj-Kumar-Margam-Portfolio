import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaGitAlt, FaNpm, FaHtml5, FaCss3, FaNode, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiTypescript, SiJest, SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tools', name: 'Tools' },
  ];

  const skillsByCategory = {
    frontend: [
      { name: 'React', icon: FaReact, color: 'text-blue-500', proficiency: 90 },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', proficiency: 85 },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', proficiency: 95 },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', proficiency: 80 },
      { name: 'Redux', icon: SiRedux, color: 'text-purple-500', proficiency: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', proficiency: 90 },
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', proficiency: 95 },
      { name: 'CSS3', icon: FaCss3, color: 'text-blue-400', proficiency: 90 },
    ],
    backend: [
      { name: 'Node.js', icon: FaNode, color: 'text-green-500', proficiency: 85 },
      { name: 'Express.js', icon: FaNode, color: 'text-gray-600', proficiency: 80 },
      { name: 'REST APIs', icon: FaDatabase, color: 'text-indigo-500', proficiency: 90 },
    ],
    database: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', proficiency: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', proficiency: 75 },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500', proficiency: 80 },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', proficiency: 90 },
      { name: 'Jest', icon: SiJest, color: 'text-red-600', proficiency: 75 },
      { name: 'NPM', icon: FaNpm, color: 'text-red-500', proficiency: 85 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsByCategory[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`text-3xl ${skill.color} mr-3`} />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-right">
                    <span className="text-sm font-semibold inline-block text-primary">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>
                <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col justify-center bg-primary"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
