
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  // Create scroll-driven animations
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} className="relative overflow-hidden bg-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white pointer-events-none" />
      
      <motion.div 
        style={{ opacity }}
        className="container relative px-4 py-10 md:px-6 md:py-16 z-10"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600"
              >
                Nieuw: Verbeterde leerling analyses
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-primary"
              >
                Inzicht in leergroei
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-base text-gray-600 md:text-lg max-w-[600px]"
              >
                Volg en begeleid de ontwikkeling van je leerlingen met onze innovatieve leerdoelen monitor. Ontworpen voor het moderne onderwijs.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.open('https://leerdoelenmonitor.nl/teacher', '_blank')}
              >
                Registreer als docent op: leerdoelenmonitor.nl/teacher
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-3 text-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -10 * i, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                    className="inline-block h-7 w-7 rounded-full border-2 border-white bg-gray-100"
                  />
                ))}
              </div>
              <p className="text-gray-600">
                Al in gebruik door 500+ docenten
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl border bg-white/50 backdrop-blur-sm shadow-xl overflow-hidden">
              <img
                src="/lovable-uploads/0435f3a2-d6ea-407f-8e65-9891c49aceca.png"
                alt="Dashboard Preview"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute top-20 right-[10%] w-48 h-48 rounded-full bg-blue-200/20 blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        className="absolute bottom-20 left-[15%] w-56 h-56 rounded-full bg-purple-200/20 blur-3xl"
      />
    </section>
  );
}
