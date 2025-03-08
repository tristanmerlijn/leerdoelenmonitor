
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    <section ref={containerRef} className="w-full py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative elements that move on scroll */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <motion.div 
            style={{ y: imageY }}
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
            className="space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Waarom kiezen voor onze leerdoelen monitor?
              </h2>
              <p className="text-gray-500 md:text-base">
                Onze tool biedt alles wat je nodig hebt om de ontwikkeling van leerlingen effectief te volgen en te stimuleren.
              </p>
            </motion.div>
            
            <motion.ul 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  custom={index}
                  className="flex items-center gap-2"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
                    className="rounded-full bg-primary/10 p-1"
                  >
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </motion.div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
