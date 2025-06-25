import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;