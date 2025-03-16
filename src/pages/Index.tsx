
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Stats />
      <div className="container mx-auto text-center text-sm text-gray-500 py-6">
        © 2025 Tijmen Hulshoff. Alle rechten voorbehouden.
      </div>
    </div>
  );
};

export default Index;
