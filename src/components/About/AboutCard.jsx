import React from "react";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <motion.div 
      className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-purple-500/20"
      whileHover={{ y: -5, boxShadow: "0 20px 50px -10px rgba(126, 58, 242, 0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="text-gray-300 mb-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="mb-4">
          I'm <span className="text-purple-400 font-medium">Piyush Kashyap</span>, a final-year B.Tech CSE student from Uttarakhand, India, with a strong focus on Java, MERN stack development, and scalable web solutions.
        </p>
        <p className="mb-4">
          I specialize in building full-stack applications, integrating tools like Gitea, JIRA, and RESTful APIs, with a keen eye on performance and clean UI/UX. I thrive in agile, product-driven teams and am passionate about solving real-world problems through code.
        </p>
      </motion.div>

      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Outside the terminal, I enjoy:</h3>
        <ul className="space-y-3">
          {["Exploring tech communities", "Solving logic puzzles", "Casual gaming & travel"].map((item, index) => (
            <motion.li 
              key={index}
              className="flex items-center text-gray-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 + (index * 0.1), duration: 0.4 }}
            >
              <ImPointRight className="text-purple-400 mr-3" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className="border-t border-purple-500/30 pt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <blockquote className="italic text-purple-300 text-lg">
          "Build with purpose. Iterate with curiosity. Grow with consistency."
        </blockquote>
        <p className="text-right text-gray-400 mt-2">— Piyush</p>
      </motion.div>
    </motion.div>
  );
}

export default AboutCard;
