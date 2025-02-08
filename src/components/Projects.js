import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    title: "iShop Changi",
    description: `iShopChangi.com (ISC) was on a 5 year old legacy platform that was limited in terms of its capability, stability, scalability and extensibility,
hampering the growth of the business to scale to support the growing market opportunity. The challenge was to build a travel retail
marketplace befitting the world's best airport, providing a tax and duty-free e-store, and support Changi’s vision of an O+o = omnichannel
strategy. The aim was to create a seamless and holistic shopping experience for passengers and achieve 10 times growth for ISC in the
next five years.`,
    url: "https://ishopchangi.com",
  },
  {
    title: "Madmate",
    description: "Founded in 2019 to bridge the gap between traditional healthcare and modern convenience, Medmate is more than a telehealth service—it’s your partner in health. From online doctor consultations to simple prescription renewals and medication delivery, we simplify the healthcare experience, ensuring you can prioritise your health without the hurdles.",
    url: "https://medmate.com.au/",
  },

];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My work experience
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            {projects.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  {exp.title} 
                </h3>
                <p className="text-primary mb-2">{exp.company}</p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{exp.date}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li >{exp.description}</li>
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                      <span className="text-black mr-1">Link:</span> {exp.title} <FaLink className="ml-1" />
                    </a>   
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
