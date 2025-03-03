
import { Check } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function Benefits() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll position
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.6], [50, 0, 0]);
  
  // New scroll-based transformations
  const rotation = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 1]);
  const decorX = useParallax(scrollYProgress, 100);
  const decorY = useParallax(scrollYProgress, 50);
  
  const benefits = [
    "Real-time voortgangsmonitoring",
    "Persoonlijke leerdoelen instellen",
    "Automatische voortgangsrapporten",
    "Intuïtieve dashboards",
    "Data-gedreven inzichten",
    "Eenvoudige implementatie",
    "Hulpmiddel bij gesprekken over leerdoelen",
    "Feedback geven per leerdoel"
  ];

  // Stagger animations for list items
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={containerRef} className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Parallax decorative elements with enhanced motion */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          x: decorX,
          rotate: useTransform(scrollYProgress, [0, 1], [-5, 5]) 
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          x: useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, 0]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />
      
      {/* Additional floating elements that react to scroll */}
      <motion.div
        style={{ 
          y: decorY,
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-100/20 rounded-full blur-xl hidden lg:block"
      />
      
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [50, -50]),
          x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 0]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
        }}
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-green-100/20 rounded-full blur-xl hidden lg:block"
      />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            style={{ 
              y: imageY,
              rotate: rotation,
              scale: scale
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-2xl" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video rounded-2xl border bg-white/50 backdrop-blur-sm shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
              <motion.img
                whileInView={{ scale: [1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src="/lovable-uploads/936ffdb2-0d2b-4c0d-9fc9-76c813f8a8c2.png"
                alt="Platform Overview"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Waarom kiezen voor onze leerdoelen monitor?
              </h2>
              <p className="text-gray-500 md:text-lg">
                Onze tool biedt alles wat je nodig hebt om de ontwikkeling van leerlingen effectief te volgen en te stimuleren.
              </p>
            </motion.div>
            
            <motion.ul 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  custom={index}
                  className="flex items-center gap-3"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
                    className="rounded-full bg-primary/10 p-1"
                    animate={{
                      scale: [1, 1.05, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.2
                      }
                    }}
                  >
                    <Check className="h-4 w-4 text-primary" />
                  </motion.div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
