import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaGitAlt, FaNpm, FaHtml5, FaCss3Alt, FaChrome, FaBootstrap, FaRoute, } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiPostman, SiGithub, SiFigma, SiVscodium, SiBitbucket, SiJira, SiSourcetree } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'development-tools', name: 'Development Tools' },
  ];

  const skillsByCategory = {
    frontend: [
      { name: 'React.js', icon: FaReact, color: 'text-blue-400', proficiency: 90 },
      { name: 'Redux', icon: SiRedux, color: 'text-purple-500', proficiency: 85 },
      { name: 'React Router', icon: FaRoute, color: 'text-purple-500', proficiency: 80 },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', proficiency: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', proficiency: 90 },
      { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600', proficiency: 85 },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', proficiency: 85 },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', proficiency: 90 },
    ],
    'development-tools': [
      { name: 'VS Code', icon: SiVscodium, color: 'text-blue-500', proficiency: 95 },
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500', proficiency: 95 },
      { name: 'GitHub', icon: SiGithub, color: 'text-gray-800', proficiency: 90 },
      { name: 'Bitbucket', icon: SiBitbucket, color: 'text-blue-400', proficiency: 95 },
      { name: 'Sourcetree', icon: SiSourcetree, color: 'text-blue-600', proficiency: 90 },
      { name: 'Jira', icon: SiJira, color: 'text-blue-500', proficiency: 95 },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500', proficiency: 80 },
      { name: 'Chrome DevTools', icon: FaChrome, color: 'text-blue-500', proficiency: 95 },
      { name: 'npm', icon: FaNpm, color: 'text-red-500', proficiency: 95 },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500', proficiency: 95 },
    ],
  };

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Tools</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsByCategory[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center">
                <skill.icon className={`w-12 h-12 ${skill.color} dark:text-gray-300 mb-4`} />
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {skill.proficiency}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
