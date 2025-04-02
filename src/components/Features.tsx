
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, BarChart2, Target, CheckCircle2, LucideIcon } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ImageViewer } from "./ImageViewer";

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
      description: "Overzichtelijk dashboard met real-time inzichten in de voortgang.",
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
      description: "Geef feedback bij de score van een leerdoel.",
      image: "/lovable-uploads/501b644d-12cc-4fd5-a80b-0d1632abc9f3.png"
    },
    {
      icon: BookOpen,
      title: "Voortgang op leerdoelen",
      description: "Gedetailleerd inzicht in de ontwikkeling van elke leerling.",
      image: "/lovable-uploads/a7d5a3d9-bf23-4ff0-80c0-72530af78090.png"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <AnimateOnScroll>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-3 max-w-[800px]">
              <div className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Krachtige Features</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight">
                Alles wat je nodig hebt voor effectief onderwijs
              </h2>
              <p className="text-gray-500 md:text-lg lg:text-xl max-w-[600px] mx-auto">
                Ontdek hoe je het leerproces inzichtelijk en effectief maakt.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} delay={index * 100}>
              <Card className="group relative overflow-hidden border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                    <div className="rounded-full bg-primary/10 p-2">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                  <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ImageViewer
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[300px]"
                      imageClassName="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
