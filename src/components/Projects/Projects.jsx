// src/components/Projects/Projects.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaTimes
} from "react-icons/fa";
import Particle from "../Particle";
import collabImage from "../../assets/Projects/Collabspacehome.png"
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const projects = [
     {
      id: 1,
      title: "CollabSpace",
      image: collabImage,
      description: "A collaborative platform for developers to work together on projects in real-time with code sharing, video chat, and task management features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "WebRTC"],
      ghLink: "https://github.com/Piyush731/CollabSpace",
      demoLink: "#",
      category: "Full Stack",
      date: "Apr 2024",
      achievements: [
        "Real-time code synchronization across multiple users",
        "Integrated video conferencing for team collaboration",
        "Task management with drag-and-drop interface"
      ],
      challenges: "Managing real-time state synchronization across multiple clients",
      solutions: "Implemented conflict resolution algorithms and operational transforms"
    },
    {
      id: 2,
      title: "CareerCraft",
      image: collabImage,
      description: "An ATS (Applicant Tracking System) Optimized Resume Analyzer that provides insights into resume compatibility with job descriptions. This innovative system empowers job seekers by providing valuable insights into their resumes' compatibility with job descriptions, identifying missing keywords, and offering tailored profile summaries.",
      technologies: ["Python", "Gemini API", "React", "Node.js", "MongoDB"],
      ghLink: "https://github.com/Piyush731/ATS-optimized-resume-analyzer-using-gemini-model/",
      demoLink: "https://ats-optimized-resume-analyzer-using.onrender.com/",
      category: "AI/ML",
      date: "May 2024",
      achievements: [
        "Integrated Gemini AI for advanced resume analysis",
        "Achieved 95% accuracy in keyword matching",
        "Reduced resume screening time by 70% for recruiters"
      ],
      challenges: "Implementing real-time analysis with large language models while maintaining performance",
      solutions: "Optimized API calls and implemented caching mechanisms"
    },
    {
      id: 3,
      title: "Portfolio",
      image: collabImage,
      description: "My personal portfolio showcasing projects, skills, and experience as a software developer. Built with React.js, Node.js, and Express.js, and styled with CSS3, it reflects my commitment and expertise in crafting innovative web solutions.",
      technologies: ["React", "Node.js", "Express.js", "CSS3", "Framer Motion"],
      ghLink: "https://github.com/Piyush731/Portfolio",
      demoLink: "https://portfolio-mu-five-76.vercel.app/project",
      category: "Frontend",
      date: "Mar 2024",
      achievements: [
        "Showcased 10+ projects with interactive demos",
        "Implemented smooth animations with Framer Motion",
        "Responsive design across all device sizes"
      ],
      challenges: "Creating a unique visual identity while maintaining performance",
      solutions: "Optimized assets and implemented lazy loading for images"
    },
    {
      id: 4,
      title: "ERP Management System",
      image: collabImage,
      description: "Enterprise resource planning system for managing student and faculty records with role-based access control, attendance tracking, and grade management.",
      technologies: ["Java", "Spring Boot", "MySQL", "React", "REST API", "JWT"],
      ghLink: "https://github.com/Piyush731/ERP-Management-System",
      demoLink: "#",
      category: "Full Stack",
      date: "Feb 2024",
      achievements: [
        "Reduced administrative workload by 40%",
        "Implemented secure role-based access control",
        "Automated report generation for academic records"
      ],
      challenges: "Managing complex user permissions and data relationships",
      solutions: "Designed a flexible RBAC system with Spring Security"
    },
    {
      id: 5,
      title: "Tic-Tac-Toe",
      image: collabImage,
      description: "Classic implementation of the popular two-player game with AI opponent using minimax algorithm and difficulty levels.",
      technologies: ["Python", "Pygame", "AI Algorithms", "Minimax"],
      ghLink: "https://github.com/Piyush731/tic-tac-toe",
      demoLink: "https://tic-tac-toe-ntja.onrender.com/",
      category: "Game Dev",
      date: "Jan 2024",
      achievements: [
        "Implemented unbeatable AI using minimax algorithm",
        "Created 3 difficulty levels for varied gameplay",
        "Designed intuitive UI with Pygame"
      ],
      challenges: "Optimizing the minimax algorithm for performance",
      solutions: "Implemented alpha-beta pruning to reduce computation time"
    },
    {
      id: 6,
      title: "E-Commerce Store",
      image: collabImage,
      description: "Full-featured online shopping platform with product listings, cart functionality, payment processing, and order management.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Stripe API"],
      ghLink: "https://github.com/Piyush731/Ecommerce-Store",
      demoLink: "#",
      category: "Full Stack",
      date: "Dec 2023",
      achievements: [
        "Integrated secure payment processing with Stripe",
        "Implemented product search and filtering",
        "Created admin dashboard for inventory management"
      ],
      challenges: "Ensuring secure payment processing and data protection",
      solutions: "Used Stripe for payments and encrypted sensitive data"
    },
    {
      id: 7,
      title: "Garage Management System",
      image: collabImage,
      description: "Comprehensive solution for automotive repair facilities built on Salesforce Platform with customer management, service tracking, and inventory control.",
      technologies: ["Salesforce", "Apex", "Visualforce", "SOQL", "Lightning"],
      ghLink: "https://github.com/Piyush731/Garage-management-system",
      demoLink: "#",
      category: "Enterprise",
      date: "Nov 2023",
      achievements: [
        "Automated service scheduling and reminders",
        "Integrated inventory management system",
        "Created customer portal for service tracking"
      ],
      challenges: "Customizing Salesforce for automotive business workflows",
      solutions: "Created custom objects and automated processes with flows"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef(null); 
 const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

 const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
    timelineRef.current.style.cursor = "grabbing";
    timelineRef.current.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

   const handleMouseUp = () => {
    setIsDragging(false);
    timelineRef.current.style.cursor = "grab";
    timelineRef.current.style.userSelect = "auto";
  };
  useEffect(() => {
  const handleMouseLeave = () => setIsDragging(false);
  window.addEventListener("mouseup", handleMouseUp);
  window.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);
 
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects", icon: <FaTools /> },
    { id: "Full Stack", name: "Full Stack", icon: <FaCode /> },
    { id: "Frontend", name: "Frontend", icon: <FaCode /> },
    { id: "AI/ML", name: "AI/ML", icon: <FaServer /> },
    { id: "Enterprise", name: "Enterprise", icon: <FaDatabase /> },
    { id: "Game Dev", name: "Game Dev", icon: <FaTools /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const scrollPos = timelineRef.current.scrollLeft;
        const containerWidth = timelineRef.current.clientWidth;
        const newIndex = Math.round(scrollPos / containerWidth);
        setCurrentIndex(newIndex);
      }
    };

    if (timelineRef.current) {
      timelineRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({ left: 0, behavior: "auto" });
      setCurrentIndex(0);
    }
  }, [filter]);

   const scrollToProject = (index) => {
    if (timelineRef.current) {
      const containerWidth = timelineRef.current.clientWidth;
      const projectWidth = containerWidth / 3; // Each project takes 1/3 of container
      
      timelineRef.current.scrollTo({
        left: index * projectWidth,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };


  const nextProject = () => {
    if (currentIndex < filteredProjects.length - 1) {
      scrollToProject(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      scrollToProject(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
      <Particle />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
            My <span className="text-white">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent works. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => {
                setFilter(category.id);
                setCurrentIndex(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Timeline Navigation */}
        <div className="flex items-center justify-between mb-6">
          <motion.button 
            onClick={prevProject}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${
              currentIndex === 0 
                ? "text-gray-600 cursor-not-allowed" 
                : "text-white hover:bg-gray-800"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft className="text-xl" />
          </motion.button>
          
          <div className="text-center">
            <span className="text-lg font-medium text-indigo-400">
              {currentIndex + 1} / {filteredProjects.length}
            </span>
            <p className="text-sm text-gray-400">
              {filteredProjects[currentIndex]?.title}
            </p>
          </div>
          
          <motion.button 
            onClick={nextProject}
            disabled={currentIndex === filteredProjects.length - 1}
            className={`p-2 rounded-full ${
              currentIndex === filteredProjects.length - 1 
                ? "text-gray-600 cursor-not-allowed" 
                : "text-white hover:bg-gray-800"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight className="text-xl" />
          </motion.button>
        </div>

        {/* Timeline Container - Moved below tabs and navigation */}
         <div 
    ref={timelineRef}
    className="relative overflow-x-auto snap-x snap-mandatory py-10 scrollbar-hide"
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    style={{ cursor: "grab" }}
  >
    <div className="flex" style={{ minWidth: `${filteredProjects.length * 100}%` }}>
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          className="snap-center flex-shrink-1 sm:w-1/14 lg:w-1/6 px-6" // Fixed width classes
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: currentIndex === index ? -10 : 0,
            scale: currentIndex === index ? 1.05 : 0.95
          }}
          transition={{ duration: 0.5 }}
        >
                <motion.div 
                  className={`h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${
                    currentIndex === index 
                      ? 'border-indigo-500 shadow-xl z-10' 
                      : 'border-gray-700 opacity-80'
                  } cursor-pointer`}
                  whileHover={{ 
                    y: currentIndex === index ? -15 : -5,
                    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-48 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-4/5 h-4/5 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">
                        {project.image}
                        </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-indigo-400 text-sm font-medium flex items-center gap-1">
                        View Details
                      </span>
                      
                      <div className="flex gap-3">
                        <a 
                          href={project.ghLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-700 rounded-full hover:bg-indigo-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="text-white" />
                        </a>
                        {project.demoLink && project.demoLink !== "#" && (
                          <a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 rounded-full hover:bg-indigo-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt className="text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Dots (Mobile Navigation) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index 
                  ? "bg-indigo-500" 
                  : "bg-gray-700"
              }`}
            />
          ))}
        </div>

        {/* Mini Project Grid */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            All Projects
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 cursor-pointer"
                whileHover={{ y: -5, borderColor: "rgb(99, 102, 241)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-indigo-500/10 w-10 h-10 rounded-full flex items-center justify-center">
                    {categories.find(c => c.id === project.category)?.icon || <FaTools />}
                  </div>
                  <h3 className="font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-sm rounded-full">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-400 text-sm">{selectedProject.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                      <p className="text-gray-300">{selectedProject.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Achievements</h3>
                      <ul className="space-y-2">
                        {selectedProject.achievements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-400 mr-2">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 bg-gray-700 text-gray-300 text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Challenges & Solutions</h3>
                      <p className="text-gray-300 mb-2">
                        <span className="text-red-400 font-medium">Challenge:</span> {selectedProject.challenges}
                      </p>
                      <p className="text-gray-300">
                        <span className="text-green-400 font-medium">Solution:</span> {selectedProject.solutions}
                      </p>
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={selectedProject.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
                      >
                        <FaGithub /> GitHub
                      </a>
                      {selectedProject.demoLink && selectedProject.demoLink !== "#" && (
                        <a 
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;