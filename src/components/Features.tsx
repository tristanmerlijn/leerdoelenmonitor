import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, BarChart2, Target, CheckCircle2 } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Leerlingendashboard",
      description: "Overzichtelijk dashboard met real-time inzichten in de voortgang van alle leerlingen.",
      image: "/lovable-uploads/71e48a55-967a-4797-8ed8-a0eb3ffd6711.png"
    },
    {
      icon: BarChart2,
      title: "Getailleerde voortgang",
      description: "Volg de ontwikkeling per vaardigheid en identificeer verbeterpunten.",
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
      title: "Individueel overzicht",
      description: "Gedetailleerd inzicht in de ontwikkeling van elke individuele leerling.",
      image: "/lovable-uploads/d5ebb3b1-415d-4972-a294-5603e05d6710.png"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-[800px]">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h4 className="text-primary font-medium">Krachtige Features</h4>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Alles wat je nodig hebt voor effectief onderwijs
            </h2>
            <p className="text-gray-500 md:text-lg">
              Ontdek hoe onze tool het leerproces inzichtelijk en effectief maakt met deze essentiële functies
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500">{feature.description}</p>
                <div className="relative rounded-lg overflow-hidden border bg-white/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full rounded-lg transition-transform group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}