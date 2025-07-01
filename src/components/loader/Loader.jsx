import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/assets/logo_two.png";
import "./loader.css";

const Loader = ({ onFinish }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        onFinish();
      }, 1200); 

      return () => clearTimeout(timer);
    }
  }, [isLoaded, onFinish]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className='loader-wrapper'
          initial={{ y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.65, 0, 0.35, 1],
            delay: isLoaded ? 0.3 : 0, 
          }}
        >
          <motion.img
            src={logo}
            alt='Logo'
            className='loader-logo'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.8, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
