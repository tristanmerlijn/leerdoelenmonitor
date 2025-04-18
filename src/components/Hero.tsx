
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ImageViewer } from "./ImageViewer";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white pointer-events-none" />
      <div className="container relative px-4 py-16 md:px-6 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <AnimateOnScroll>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Nieuw: Verbeterde leerling analyses
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Inzicht in leergroei
                </h1>
                <p className="text-lg text-gray-600 md:text-xl max-w-[600px]">
                  Volg en begeleid de ontwikkeling van je leerlingen met een innovatieve leerdoelen monitor. Ontworpen voor het moderne onderwijs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => window.open('https://leerdoelenmonitor.nl/teacher', '_blank')}
                >
                  Registreer als docent op: leerdoelenmonitor.nl/teacher
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <div className="relative rounded-2xl border bg-white/50 backdrop-blur-sm shadow-xl">
                <ImageViewer
                  src="/lovable-uploads/0435f3a2-d6ea-407f-8e65-9891c49aceca.png"
                  alt="Dashboard Preview"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
