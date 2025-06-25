// src/components/Projects/ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl h-48 flex items-center justify-center mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-4/5 h-4/5 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Project Image</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              {project.description}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={project.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
            >
              <FaGithub /> View on GitHub
            </a>
            
            {project.demoLink && project.demoLink !== "#" && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
              >
                <FaExternalLinkAlt /> View Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;