
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
      <footer className="py-6 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto text-center text-sm text-gray-500">
          © 2025 Tijmen Hulshoff. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
};

export default Index;
