// src/components/About/About.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import Avatar from "../../assets/Piyushi.jpg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <Particle />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About <span className="text-purple-500">Me</span>
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-purple-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <AboutCard />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-xl shadow-purple-500/20">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-indigo-600/20 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-56 md:h-56 rounded-full" >
                    <img
                         src={Avatar}
                         alt="avatar"
                         className="object-contain w-full h-full"
                       />
                    </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 px-6 py-2 rounded-full text-white font-medium shadow-lg">
                Developer
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Professional <span className="text-purple-500">Skillset</span>
          </h2>
          <Techstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-purple-500">Tools</span> I Use
          </h2>
          <Toolstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Days I <span className="text-purple-500">Code</span>
          </h2>
          <Github />
        </motion.div>
      </div>
    </div>
  );
}

export default About;