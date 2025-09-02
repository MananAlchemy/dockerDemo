import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            We are a team of passionate marketers dedicated to helping businesses succeed in the digital world. Our data-driven approach ensures that we deliver measurable results and a high return on investment.
          </p>
          <p>
            Founded in 2024, our mission is toprovide innovative marketing solutions that drive growth and create lasting value for our clients.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
            Logo
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
