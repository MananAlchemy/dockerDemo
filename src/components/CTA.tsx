import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Grow Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xl mb-8"
        >
          Contact us today for a free consultation.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          Get in Touch
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
