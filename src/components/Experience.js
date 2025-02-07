import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      title: 'Senior React Developer',
      company: 'Tech Solutions Inc.',
      date: '2022 - Present',
      location: 'Remote',
      points: [
        'Led development of multiple React-based web applications',
        'Implemented responsive designs using Tailwind CSS',
        'Optimized application performance and reduced load times by 40%',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      date: '2020 - 2022',
      location: 'Hyderabad, India',
      points: [
        'Developed and maintained client websites using React and Redux',
        'Collaborated with UI/UX team to implement pixel-perfect designs',
        'Integrated REST APIs and implemented state management solutions',
        'Participated in agile development processes',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'University Name',
      date: '2018 - 2020',
      location: 'City, State',
      points: [
        'Specialized in Web Technologies',
        'Completed projects in React and Node.js',
        'Graduated with distinction',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'College Name',
      date: '2015 - 2018',
      location: 'City, State',
      points: [
        'Foundation in Computer Science',
        'Web Development fundamentals',
        'Academic excellence award',
      ],
    },
  ];

  const tabVariants = {
    active: {
      backgroundColor: 'rgb(14, 165, 233)',
      color: 'white',
    },
    inactive: {
      backgroundColor: 'transparent',
      color: 'currentColor',
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'work' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('work')}
              className="flex items-center px-4 py-2 rounded-md space-x-2"
            >
              <FaBriefcase />
              <span>Work</span>
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'education' ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('education')}
              className="flex items-center px-4 py-2 rounded-md space-x-2"
            >
              <FaGraduationCap />
              <span>Education</span>
            </motion.button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'work' ? (
              <div className="space-y-8">
                {workExperience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary mb-2">{exp.company}</p>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{exp.date}</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-primary mb-2">{edu.institution}</p>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{edu.date}</span>
                      <span>{edu.location}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                      {edu.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
