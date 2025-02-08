import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/ManojKumarMargam_Cv.pdf';
    link.target = '_blank';  // Open in new tab
    link.rel = 'noopener noreferrer';
    link.setAttribute('download', 'ManojKumarMargam_Cv.pdf');  // Force download
    
    // Simulate click
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/MargamManojKumar', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFtC3jkGJE6RAAAAZThi1coBQjvG9yoqurjlrSOjY9BDMZWmldvEIjHLIU_2GRuXcbv0MUTtwVhDSRo-SPD9immpOQDO4KHr2_Y2yZMPRcEWtFy2Q8lfzeb9mj0OFlPUhUl3z4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmargam-manoj-kumar-479475243', label: 'LinkedIn' },
    // { icon: FaInstagram, url: 'https://www.instagram.com/yourusername', label: 'Instagram' },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      value: '+91 9100572103',
      href: 'tel:+919100572103',
    },
    {
      icon: FaEnvelope,
      value: 'manojmargam830@gmail.com',
      href: 'mailto:manojmargam830@gmail.com',
    },
    {
      icon: FaMapMarkerAlt,
      value: 'Hyderabad, India',
      href: null,
    },
  ];

  return (
    <section id="hero" className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
            Hi, I'm Margam Manoj Kumar
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-2">
            React.js Frontend Developer | Specializing in Modern Web Applications
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-gray-600 dark:text-gray-300"
              >
                <info.icon className="w-5 h-5 text-primary mr-2" />
                {info.href ? (
                  <a
                    href={info.href}
                    className="font-medium text-primary hover:text-primary-dark dark:text-primary dark:hover:text-primary-dark transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span>{info.value}</span>
                )}
                {index < contactInfo.length - 1 && (
                  <span className="mx-4 hidden sm:block">•</span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
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
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
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
