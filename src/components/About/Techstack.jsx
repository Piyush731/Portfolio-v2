// src/components/About/Techstack.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaJava,FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { 
  SiC, 
  SiCplusplus,
  SiPython,
  SiReact,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiJira
} from "react-icons/si";

const techItems = [
  { icon: <FaJava className="text-4xl" />, name: "Java", color: "from-orange-500 to-red-600" },
    { icon: <BiLogoSpringBoot className="text-4xl" />, name: "Spring Boot", color: "from-green-500 to-green-700" },
  { icon: <SiC className="text-4xl" />, name: "C", color: "from-blue-500 to-purple-600" },
  { icon: <SiCplusplus className="text-4xl" />, name: "C++", color: "from-blue-400 to-indigo-700" },
  { icon: <IoLogoJavascript className="text-4xl" />, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  { icon: <SiReact className="text-4xl" />, name: "React.js", color: "from-blue-400 to-cyan-500" },
  { icon: <DiNodejs className="text-4xl" />, name: "Node.js", color: "from-green-500 to-green-700" },
  { icon: <SiExpress className="text-4xl" />, name: "Express.js", color: "from-gray-500 to-black" },
  { icon: <SiPython className="text-4xl" />, name: "Python", color: "from-yellow-500 to-blue-600" },
  { icon: <SiMysql className="text-4xl" />, name: "MySQL", color: "from-blue-400 to-blue-700" },
  { icon: <SiMongodb className="text-4xl" />, name: "MongoDB", color: "from-green-500 to-green-700" },
  { icon: <SiPostman className="text-4xl" />, name: "Postman", color: "from-orange-500 to-red-600" },
  { icon: <SiJira className="text-4xl" />, name: "JIRA", color: "from-blue-500 to-blue-700" },
  { icon: <FaHtml5 className="text-4xl" />, name: "HTML5", color: "from-blue-500 to-blue-700" },
  { icon: <FaCss3 className="text-4xl" />, name: "CSS3", color: "from-blue-500 to-blue-700" },
];

function Techstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {techItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-lg`}>
            {item.icon}
          </div>
          <span className="text-white font-medium">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;