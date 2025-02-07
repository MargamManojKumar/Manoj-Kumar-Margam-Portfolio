import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate React.js developer with over 3 years of experience in building
                modern web applications. Currently working at CJSS Technologies, I specialize in
                creating seamless user experiences with a focus on performance and scalability.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My expertise includes developing robust user authentication systems, optimizing
                checkout flows, and building scalable e-commerce solutions. I'm particularly
                skilled in React, Redux, JavaScript, and Tailwind CSS.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me enjoying a game of Free Fire or exploring
                the latest gaming trends. I believe that gaming helps me maintain creativity
                and problem-solving skills that I bring to my development work.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>🚀 Currently working at CJSS Technologies</li>
                <li>💻 3+ years of React.js experience</li>
                <li>🛠️ Specialized in e-commerce solutions</li>
                <li>📚 Passionate about clean code and best practices</li>
                <li>🎮 Gaming enthusiast (Free Fire player)</li>
                <li>📝 Technical documentation expert</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
