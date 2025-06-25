// src/components/Experience/ExperienceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-indigo-400">{experience.organization}</p>
            <p className="text-gray-400 text-sm">{experience.period}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-indigo-400 mr-2">◦</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.skills.slice(0, 4).map((skill, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {experience.skills.length > 4 && (
            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
              +{experience.skills.length - 4}
            </span>
          )}
        </div>
        
        {experience.certificate && (
          <a 
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors text-sm"
          >
            <FaExternalLinkAlt /> View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;