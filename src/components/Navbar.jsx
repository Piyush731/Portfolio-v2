import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineFileText,
  AiFillGithub,
  AiFillStar
} from "react-icons/ai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: "/", name: "Home", icon: <AiOutlineHome /> },
    { path: "/about", name: "About", icon: <AiOutlineUser /> },
    { path: "/project", name: "Projects", icon: <AiOutlineFundProjectionScreen /> },
    { path: "/work", name: "Work/Education", icon: <AiOutlineFundProjectionScreen /> },
    { path: "/resume", name: "Resume", icon: <AiOutlineFileText /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/80 backdrop-blur-lg py-2 border-b border-indigo-500/30" 
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">PK</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">Piyush Kashyap</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-indigo-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            
            <a
              href="https://github.com/Piyush731/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-indigo-600 transition-colors"
            >
              <AiFillGithub className="mr-2" />
              <span>Source</span>
              <AiFillStar className="ml-1 text-yellow-400" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block h-0.5 bg-current ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-gray-900/80 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700"
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 ${
                    location.pathname === item.path
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              
              <a
                href="https://github.com/Piyush731/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800"
              >
                <AiFillGithub className="mr-3" />
                Source Code
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;