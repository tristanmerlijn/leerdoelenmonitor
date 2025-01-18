import { BarChart2, Users2, LineChart, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export function Features() {
  const features: Feature[] = [
    {
      icon: Target,
      title: "Persoonlijke leerdoelen",
      description: "Stel individuele leerdoelen op en volg de voortgang.",
      image: "/lovable-uploads/71e48a55-967a-4797-8ed8-a0eb3ffd6711.png"
    },
    {
      icon: BarChart2,
      title: "Getailleerde voortgang",
      description: "Volg de ontwikkeling per leerdoel en identificeer verbeterpunten.",
      image: "/lovable-uploads/b8ef671f-3cb4-41ef-82c7-4b3363c8e67d.png"
    },
    {
      icon: Users2,
      title: "Groepsoverzicht",
      description: "Bekijk de voortgang van de hele klas in één oogopslag.",
      image: "/lovable-uploads/80ce6447-2f5d-49b6-bfd1-cfa4bdfe1d17.png"
    },
    {
      icon: LineChart,
      title: "Data-gedreven inzichten",
      description: "Krijg waardevolle inzichten op basis van verzamelde data.",
      image: "/lovable-uploads/778e38a9-df1c-4ea9-8022-9b8f91c3024d.png"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Belangrijkste functies
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ontdek hoe onze tool je helpt bij het monitoren en begeleiden van leerdoelen
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative overflow-hidden rounded-lg border bg-white p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-6 w-6" />
                      <h3 className="font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="relative h-[120px] overflow-hidden rounded-md">
                      <img
                        alt={feature.title}
                        className="object-cover w-full h-full"
                        src={feature.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}