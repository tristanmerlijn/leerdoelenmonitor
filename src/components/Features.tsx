import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, BarChart2, Target } from "lucide-react";

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Belangrijkste Functies
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ontdek hoe onze tool het leerproces inzichtelijk en effectief maakt
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Docenten Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/lovable-uploads/80ce6447-2f5d-49b6-bfd1-cfa4bdfe1d17.png"
                alt="Docenten Dashboard"
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Gedetailleerde Voortgang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/lovable-uploads/1b607ca9-4f63-448f-ad99-c2f66fae86d8.png"
                alt="Voortgangsoverzicht"
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Leerdoelen Analyse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/lovable-uploads/3ff3caeb-6b08-45a1-ace1-9425ec494909.png"
                alt="Leerdoelen Analyse"
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Individueel Overzicht
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/lovable-uploads/778e38a9-df1c-4ea9-8022-9b8f91c3024d.png"
                alt="Individueel Overzicht"
                className="w-full rounded-lg border"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );