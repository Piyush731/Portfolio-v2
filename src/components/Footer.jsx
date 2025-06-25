import React from "react";
import { motion } from "framer-motion";
import { 
  AiFillGithub, 
  AiFillInstagram 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/Piyush731', 
      icon: <AiFillGithub className="text-xl" /> 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/piyush-kashyap731', 
      icon: <FaLinkedinIn className="text-xl" /> 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/piyush_k731', 
      icon: <AiFillInstagram className="text-xl" /> 
    },
  ];

  return (
    <motion.footer 
      className="w-full py-0  bg-gray-900/60 backdrop-blur-sm border-t border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-medium text-white">
              Designed and Developed by Piyush Kashyap
            </h3>
            <p className="text-gray-400 mt-1">© {year} All Rights Reserved</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors text-white"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-0 text-center text-gray-500 text-sm">
          <p>Built with React, Three.js, and Tailwind CSS</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;