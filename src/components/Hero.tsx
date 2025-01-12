import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Leerdoelen Monitor
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Volg de voortgang van je leerlingen op leerdoelen en help ze groeien. Een krachtige tool voor het voortgezet onderwijs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1">
                Start nu
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/d7bb4ecd-3770-4f89-8369-1ab7875428ad.png"
              alt="Leerling Dashboard"
              className="w-full aspect-auto rounded-lg border border-gray-200 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );