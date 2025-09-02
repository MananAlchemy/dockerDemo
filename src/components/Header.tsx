import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent text-white p-4 flex justify-between items-center fixed w-full top-0 z-10"
    >
      <div className="text-2xl font-bold">Marketing Co.</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
