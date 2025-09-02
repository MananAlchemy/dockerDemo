import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'We help you rank higher in search results and drive organic traffic to your website.',
  },
  {
    title: 'Social Media Marketing',
    description: 'We create and manage social media campaigns to engage your audience and build your brand.',
  },
  {
    title: 'Content Marketing',
    description: 'We produce high-quality content that attracts, educates, and converts your target audience.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
