import { BookOpen, ChartBar, Users, Shield } from "lucide-react";

const features = [
  {
    name: "Overzichtelijk dashboard",
    description: "Bekijk in één oogopslag de voortgang van individuele leerlingen of hele klassen.",
    icon: ChartBar,
  },
  {
    name: "Persoonlijke leerdoelen",
    description: "Stel individuele leerdoelen op en volg de vooruitgang van elke leerling.",
    icon: Users,
  },
  {
    name: "Eenvoudig in gebruik",
    description: "Intuïtieve interface voor zowel docenten als leerlingen.",
    icon: BookOpen,
  },
  {
    name: "Veilig en betrouwbaar",
    description: "Alle gegevens worden veilig opgeslagen en zijn alleen toegankelijk voor bevoegden.",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Alles in één platform</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alle tools die je nodig hebt
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ontdek hoe onze leerdoelen monitor het onderwijs effectiever en persoonlijker maakt.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-primary/10 p-2 ring-1 ring-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};