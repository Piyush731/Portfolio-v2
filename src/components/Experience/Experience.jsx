// src/components/Experience/Experience.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaChevronDown, 
  FaCertificate,
  FaTimes,
  FaExternalLinkAlt
} from "react-icons/fa";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedItems, setExpandedItems] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const experiences = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      organization: "Graphic Era Hill University",
      period: "2021 - 2025",
      description: [
        "Focus on Programming Languages, Data Structures, Algorithms, and Software Engineering",
        "Studied Full Stack Web Development, Database Management, and System Security",
        "Current CGPA: 8.5/10",
        "Relevant Coursework: Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Software Engineering"
      ],
      skills: [
        "Java", "Python", "C++", "JavaScript", 
        "React", "Node.js", "SQL", "Data Structures",
        "Algorithms", "OOP", "DBMS"
      ],
      icon: <FaGraduationCap className="text-xl text-purple-500" />,
      logo: "gehu.jpg",
      achievements: [
        "Awarded academic excellence scholarship for maintaining top 10% in the program",
        "Developed multiple full-stack applications as part of academic curriculum",
        "Participated in national-level coding competitions"
      ],
      projects: [
        "ERP Management System: Java-based solution for university administration",
        "CareerCraft: ATS-optimized resume analyzer using Gemini AI",
        "Portfolio Website: Showcasing skills and projects"
      ],
      impact: "Developed strong foundation in computer science principles and practical software development skills."
    },
    {
  id: 2,
  type: "experience",
  title: "Salesforce Developer Intern",
  organization: "The Smart Bridge (Salesforce Virtual Internship)",
  period: "July 2024 – Sep 2024",
  description: [
    "Completed a 2-month virtual internship focused on Salesforce development and enterprise automation",
    "Built custom Salesforce applications using Apex classes, triggers, and flows",
    "Designed Lightning Web Components with secure, role-based access control",
    "Implemented automated workflows using Process Builder and validation rules",
    "Tested and debugged in Salesforce sandbox environments"
  ],
  skills: [
    "Salesforce", "Apex", "Lightning Web Components",
    "SOQL", "Process Builder", "Debugging", "Field-level Security"
  ],
  icon: <FaBriefcase className="text-xl text-indigo-500" />,
  logo: "salesforce.PNG",
  certificate: "https://skillwallet.smartinternz.com/internships/salesforce_certificates/177db6acfe388526a4c7bff88e1feb15",
  achievements: [
    "Earned Trailhead Ranger status with 50+ badges",
    "Completed internship deliverables ahead of schedule",
    "Successfully deployed working components with field-level security"
  ],
  projects: [
    "Garage Management System: Custom object-based automotive service tracker",
    "Sales Automation: Lead and opportunity tracking with process flows",
    "Customer Portal: Lightning interface for service request management"
  ],
  impact: "Gained hands-on experience with Salesforce CRM, automation, and cloud-based enterprise systems."
},
{
  id: 5,
  type: "experience",
  title: "Web Development Intern",
  organization: "InternPe",
  period: "Sep 2024 – Nov 2024",
  description: [
    "Built full-stack applications using HTML, CSS, JavaScript, Node.js, and MongoDB",
    "Integrated user authentication using JWT tokens and implemented secure login routes",
    "Worked on responsive frontends and REST API design",
    "Used Git and GitHub for version control and project collaboration"
  ],
  skills: [
    "Node.js", "MongoDB", "HTML", "CSS", 
    "JavaScript", "Express.js", "JWT Auth", "Git"
  ],
  icon: <FaBriefcase className="text-xl text-indigo-500" />,
  logo: "internpe.png", // update to actual file if needed
  certificate: "https://internpe.com/certificate-link", // replace with real link if you have it
  achievements: [
    "Successfully completed two real-world project modules during internship",
    "Applied JWT authentication securely across frontend and backend",
    "Received positive feedback on code quality and responsiveness"
  ],
  projects: [
    "Portfolio Website with contact form and dynamic routing",
    "Basic Task Manager with login/signup and CRUD operations"
  ],
  impact: "Strengthened foundational web development skills with practical project exposure and secure backend implementation."
},
{
  id: 3,
  type: "education",
  title: "Senior Secondary Education (Class 12)",
  organization: "Foothills Academy, Rishikesh",
  period: "July 2019 – June 2020",
  description: [
    "Completed CBSE curriculum with specialization in PCM (Physics, Chemistry, Mathematics)",
    "Scored 81.8% in Class 12 board examinations",
    "Top 5 rank in the batch with strong focus on logical reasoning and computer fundamentals",
    "Participated in inter-school coding and science events"
  ],
  skills: [
    "Mathematics", "Physics", "Computer Science", 
    "Problem Solving", "Logical Reasoning"
  ],
  icon: <FaGraduationCap className="text-xl text-purple-500" />,
  logo: "foothills.png", // change image filename as needed
  achievements: [
    "Top 5 Rank in Class 12 board results",
    "Active member of school coding club",
    "Contributed to science exhibitions and model projects"
  ],
  projects: [
    "Math Quiz App",
    "School Website UI (HTML/CSS prototype)",
  ],
  impact: "Laid the foundation in analytical thinking, science, and programming that shaped future academic and technical pursuits."
}

  ];

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  const toggleExpand = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(itemId => itemId !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const openExperienceModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeExperienceModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedExperience(null);
    }, 300);
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
            My <span className="text-white">Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience and educational background that shaped my career
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeTab === "education"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap /> Education
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
              activeTab === "experience"
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase /> Experience
          </motion.button>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 z-0 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-24">
            {filteredExperiences.map((experience, index) => (
              <motion.div 
                key={experience.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900 z-10 hidden md:flex items-center justify-center">
                  {experience.icon}
                </div>
                
                {/* Date Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-1/2 text-sm text-indigo-300 font-medium hidden md:block">
                  {experience.period}
                </div>
                
                {/* Card Container - Alternating sides */}
                <div className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-center gap-8`}>
                  {/* Date for mobile */}
                  <div className="md:hidden text-center mb-2">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-900/30 text-indigo-300 rounded-full">
                      {experience.icon}
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div 
                      className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl h-full cursor-pointer"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openExperienceModal(experience)}
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                          <div>
                            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                            <p className="text-indigo-400">{experience.organization}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {experience.description
                              .slice(0, expandedItems.includes(experience.id) ? experience.description.length : 2)
                              .map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-indigo-400 mr-2">◦</span>
                                  <span className="text-gray-300">{item}</span>
                                </li>
                              ))}
                          </ul>
                          
                          {experience.description.length > 2 && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleExpand(experience.id);
                              }}
                              className="text-indigo-400 hover:text-indigo-300 mt-2 flex items-center gap-1 text-sm"
                            >
                              {expandedItems.includes(experience.id) ? "Show less" : "Show more"} 
                              <FaChevronDown className={`transition-transform ${expandedItems.includes(experience.id) ? 'rotate-180' : ''}`} />
                            </button>
                          )}
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
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaCertificate /> View Certificate
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-2/12"></div>
                  
                  {/* Detailed Panel - Always on right for mobile, alternating for desktop */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <motion.div 
                      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 p-6 h-full cursor-pointer"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ 
                        backgroundColor: "rgba(55, 65, 81, 0.7)",
                        borderColor: "rgb(99, 102, 241)"
                      }}
                      onClick={() => openExperienceModal(experience)}
                    >
                      <h3 className="text-xl font-bold text-white mb-4">Key Highlights</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-indigo-300 font-medium mb-2">Achievements</h4>
                          <p className="text-gray-300 line-clamp-3">
                            {experience.achievements[0]}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-indigo-300 font-medium mb-2">Projects</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {experience.projects[0]}
                            </li>
                            <li className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {experience.projects[1]}
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-indigo-300 font-medium mb-2">Impact</h4>
                          <p className="text-gray-300 line-clamp-3">
                            {experience.impact}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-right">
                        <span className="text-indigo-400 text-sm font-medium inline-flex items-center gap-1">
                          View Details <FaExternalLinkAlt className="text-xs" />
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                <FaGraduationCap className="text-xl text-white" />
              </div>
              <div className="text-4xl font-bold text-indigo-400">3+</div>
            </div>
            <div className="text-lg text-white">Years of Learning</div>
            <div className="text-gray-400 mt-2">Since starting my CS degree journey</div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                <FaBriefcase className="text-xl text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-400">10+</div>
            </div>
            <div className="text-lg text-white">Projects Completed</div>
            <div className="text-gray-400 mt-2">Including academic and personal projects</div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6 backdrop-blur-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                <FaCertificate className="text-xl text-white" />
              </div>
              <div className="text-4xl font-bold text-indigo-400">5+</div>
            </div>
            <div className="text-lg text-white">Certifications</div>
            <div className="text-gray-400 mt-2">Including Salesforce, Java Development, and programming</div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Experience Modal */}
      <AnimatePresence>
        {isModalOpen && selectedExperience && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeExperienceModal}
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
                      {selectedExperience.title}
                    </h2>
                    <p className="text-indigo-400 text-xl mt-1">
                      {selectedExperience.organization}
                    </p>
                    <p className="text-gray-400 mt-2">{selectedExperience.period}</p>
                  </div>
                  <button
                    onClick={closeExperienceModal}
                    className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                    <ul className="space-y-3">
                      {selectedExperience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-400 mr-2">◦</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedExperience.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Achievements</h3>
                      <ul className="space-y-3">
                        {selectedExperience.achievements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Projects</h3>
                      <ul className="space-y-3">
                        {selectedExperience.projects.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-400 mr-2">◦</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Impact</h3>
                      <p className="text-gray-300">
                        {selectedExperience.impact}
                      </p>
                    </div>
                  </div>
                </div>
                
                {selectedExperience.certificate && (
                  <div className="mt-8 text-center">
                    <a 
                      href={selectedExperience.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors font-medium"
                    >
                      <FaCertificate /> View Certificate
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;