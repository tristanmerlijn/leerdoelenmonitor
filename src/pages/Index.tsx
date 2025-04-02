
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { ImageViewer } from "@/components/ImageViewer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      
      {/* Student progress section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Gedetailleerde voortgang per leerling
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Krijg een compleet overzicht van hoe leerlingen presteren op specifieke leerdoelen en bepaal waar extra begeleiding nodig is.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-4xl rounded-2xl border bg-white shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5" />
              <ImageViewer
                src="/lovable-uploads/ce922511-0fbc-4a04-b2ef-5ed96bd1171e.png"
                alt="Leerlingvoortgang Dashboard"
                className="w-full"
                aspectRatio="auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto text-center text-sm text-gray-500 py-6 bg-white">
        © 2025 Tijmen Hulshoff. Alle rechten voorbehouden.
      </div>
    </div>
  );
};

export default Index;
