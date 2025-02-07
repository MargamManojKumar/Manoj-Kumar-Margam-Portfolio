import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/Manoj_Kumar_CV.pdf';
    window.open(cvUrl, '_blank');
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Margam Manoj Kumar
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            React.js Developer | Building seamless UIs with performance in mind
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary dark:text-white rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              onClick={handleDownloadCV}
            >
              Download CV
            </motion.button>
          </div>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
