import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ThreeDBackground from "./ThreeDBackground";
import Home2 from "./Home2";
import homeLogo from "../../assets/home-main.svg";
import Lottie from "lottie-react";
import developerAnimation from "../../assets/developer.json"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      damping: 12, 
      stiffness: 100 
    }
  }
};

const Type = () => (
  <Typewriter
    options={{
      strings: [
        "BTech CSE Student At Graphic Era Hill University",
        "Student Developer",
        "Enthusiastic Coder",
        "Aspiring Software Developer",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 30,
      cursor: "▋",
      cursorClassName: "text-indigo-400"
    }}
  />
);

const Home = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
   const [mousePosition, setMousePosition] = useState({ 
    x: 0, 
    y: 0,
    scrollY: 0 
  });
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX, 
        y: e.clientY,
        scrollY: window.scrollY
      });
    };
      const handleScroll = () => {
      setMousePosition(prev => ({
        ...prev,
        scrollY: window.scrollY
      }));
    };

     window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", handleScroll);
    
     return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y + mousePosition.scrollY - 16, // Add scroll position
      transition: { type: "spring", mass: 0.5 }
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y + mousePosition.scrollY - 50, // Add scroll position
      backgroundColor: "rgba(99, 102, 241, 0.2)",
      backdropFilter: "blur(3px)",
      mixBlendMode: "difference"
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y + mousePosition.scrollY - 40, // Add scroll position
      backgroundColor: "rgba(139, 92, 246, 0.3)",
      backdropFilter: "blur(3px)",
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <ThreeDBackground />
      
      {/* Animated Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-indigo-500/20 backdrop-blur-sm pointer-events-none z-50 border-2 border-indigo-400 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
      />
      
      <div className="relative pt-16 md:pt-32 px-4 sm:px-6 w-full z-10">
        <motion.div
          className="max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              className="lg:w-1/2 space-y-6 md:space-y-8"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-flex items-center gap-4 p-3 bg-indigo-900/20 backdrop-blur-sm rounded-full border border-indigo-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white animate-pulse" />
                </div>
                <span className="text-lg font-medium text-indigo-100">
                  Welcome to my Portfolio!
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                variants={itemVariants}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Hi, I'm Piyush Kashyap
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 min-h-[100px]"
                variants={itemVariants}
              >
                <Type />
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 md:gap-6"
                variants={itemVariants}
              >
                <motion.a
                  href="/about"
                  className="px-6 py-3 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold text-white transition-all shadow-lg shadow-indigo-500/20 relative overflow-hidden group"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Explore More</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
                
                <motion.a
                  href="mailto:piyushkashyap3247@gmail.com"
                  className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-indigo-500 rounded-xl font-bold text-white transition-all group relative overflow-hidden"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={textLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-indigo-900/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 w-full mt-10 lg:mt-0"
              variants={itemVariants}
            >
              <motion.div 
                className="w-full h-auto"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-indigo-500/30 rounded-2xl w-full aspect-square flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
              
                      <Lottie 
    animationData={developerAnimation} 
    loop={true} 
    className="w-full h-full p-4"
  />

                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Home2 />
    </div>
  );
};

export default Home;