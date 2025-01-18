import { Check } from "lucide-react";

export function Benefits() {
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

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl blur-2xl" />
            <div className="relative aspect-video rounded-2xl border bg-white/50 backdrop-blur-sm shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
              <img
                src="/lovable-uploads/936ffdb2-0d2b-4c0d-9fc9-76c813f8a8c2.png"
                alt="Platform Overview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Waarom kiezen voor onze leerdoelen monitor?
              </h2>
              <p className="text-gray-500 md:text-lg">
                Onze tool biedt alles wat je nodig hebt om de ontwikkeling van leerlingen effectief te volgen en te stimuleren.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}