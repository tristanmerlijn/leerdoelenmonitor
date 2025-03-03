
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Detect if page has been scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollIndicator(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Floating Elements that react to scroll */}
      <motion.div
        className="fixed top-1/4 left-10 w-8 h-8 rounded-full bg-blue-400/20 blur-xl hidden lg:block"
        style={{ 
          y: useScroll().scrollYProgress.get() * 100,
          opacity: useScroll().scrollYProgress.get() < 0.5 ? 1 : 0
        }}
      />
      
      <motion.div
        className="fixed top-1/3 right-16 w-12 h-12 rounded-full bg-purple-400/20 blur-xl hidden lg:block"
        style={{ 
          y: useScroll().scrollYProgress.get() * -150,
          opacity: useScroll().scrollYProgress.get() < 0.7 ? 1 : 0
        }}
      />
      
      {/* Animated Scroll Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-40 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Hero />
      <Features />
      <Benefits />
    </div>
  );
};

export default Index;
