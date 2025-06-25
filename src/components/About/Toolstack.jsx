// src/components/About/Toolstack.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWindows } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { 
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiXampp,
  SiGooglecloud,
  SiJsonwebtokens,
  SiEclipseide
} from "react-icons/si";
import { FaSalesforce } from "react-icons/fa";

const toolItems = [
  { icon: <FaWindows className="text-4xl" />, name: "Windows", color: "from-blue-500 to-cyan-500" },
  { icon: <DiVisualstudio className="text-4xl" />, name: "VS Code", color: "from-blue-500 to-purple-600" },
   { icon: <SiEclipseide className="text-4xl" />, name: "Eclipse IDE", color: "from-purple-500 to-indigo-700" },
  { icon: <SiIntellijidea className="text-4xl" />, name: "IntelliJ IDEA", color: "from-purple-500 to-indigo-700" },
  { icon: <SiGit className="text-4xl" />, name: "Git", color: "from-orange-500 to-red-600" },
  { icon: <SiGithub className="text-4xl" />, name: "GitHub", color: "from-gray-700 to-black" },
  { icon: <SiXampp className="text-4xl" />, name: "XAMPP", color: "from-green-500 to-blue-600" },
  { icon: <SiGooglecloud className="text-4xl" />, name: "Google Cloud", color: "from-blue-500 to-indigo-700" },
  { icon: <FaSalesforce className="text-4xl" />, name: "Salesforce", color: "from-blue-400 to-cyan-500" },
  { icon: <SiJsonwebtokens  className="text-4xl" />, name: "JWT Auth", color: "from-purple-500 to-pink-600" },
];

function Toolstack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {toolItems.map((item, index) => (
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

export default Toolstack;