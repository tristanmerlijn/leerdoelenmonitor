
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, BarChart2, Target, CheckCircle2, LucideIcon } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export function Features() {
  const features: Feature[] = [
    {
      icon: Users,
      title: "Leerlingendashboard",
      description: "Overzichtelijk dashboard met real-time inzichten in de voortgang van alle leerlingen.",
      image: "/lovable-uploads/e7a547eb-b759-4e8a-b613-fe70d3bab0f0.png"
    },
    {
      icon: BarChart2,
      title: "Getailleerde voortgang",
      description: "Volg de ontwikkeling per leerdoel en identificeer verbeterpunten.",
      image: "/lovable-uploads/b8ef671f-3cb4-41ef-82c7-4b3363c8e67d.png"
    },
    {
      icon: Target,
      title: "Leerdoelen analyse",
      description: "Stel persoonlijke leerdoelen en monitor de voortgang richting deze doelen.",
      image: "/lovable-uploads/501b644d-12cc-4fd5-a80b-0d1632abc9f3.png"
    },
    {
      icon: BookOpen,
      title: "Voortgang op leerdoelen",
      description: "Gedetailleerd inzicht in de ontwikkeling van elke individuele leerling.",
      image: "/lovable-uploads/a7d5a3d9-bf23-4ff0-80c0-72530af78090.png"
    }
  ];

  // Create refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  
  // New scroll-driven animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.2, 0.4], [50, 0, 0]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Parallax scroll effect for cards
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.5, 0.5, 0])
        }}
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"
      />
      
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], [100, -50]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.7, 0.7, 0.2])
        }}
        className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-purple-100/20 blur-3xl"
      />
      
      <motion.div 
        style={{ 
          y: useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0])
        }}
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-green-100/20 blur-3xl"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          ref={titleRef}
          style={{ opacity: headerOpacity, y: headerY }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-3 max-w-[800px]">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <motion.div
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Krachtige Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              Alles wat je nodig hebt voor effectief onderwijs
            </h2>
            <p className="text-gray-500 md:text-lg lg:text-xl max-w-[600px] mx-auto">
              Ontdek hoe onze tool het leerproces inzichtelijk en effectief maakt met deze essentiële functies
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="feature-card"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px",
                y: useTransform(
                  scrollYProgress, 
                  [0, 0.5, 1], 
                  [50 * (index % 2), 0, -30 * (index % 2)]
                )
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                    <motion.div 
                      className="rounded-full bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors duration-300"
                      initial={{ scale: 0.8, rotate: -5 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(59, 130, 246, 0)",
                          "0 0 8px rgba(59, 130, 246, 0.3)",
                          "0 0 0 rgba(59, 130, 246, 0)"
                        ],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: index * 0.5
                        }
                      }}
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                  <motion.div 
                    className="relative rounded-xl overflow-hidden shadow-md"
                    whileInView={{ 
                      scale: [0.95, 1],
                      opacity: [0, 1]
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-primary/10 opacity-0 group-hover:opacity-100"
                        animate={{
                          opacity: [0, 0.5, 0],
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop"
                          }
                        }}
                      />
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[300px] object-cover rounded-xl transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                      />
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
