
import { ImageViewer } from "./ImageViewer";

export const Stats = () => {
  return (
    <div className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vertrouwd door scholen in heel Nederland
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
              Ontdek waarom steeds meer scholen kiezen voor onze leerdoelen monitor
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Actieve gebruikers", "2k+"],
              ["Scholen", "50+"],
              ["Leerdoelen behaald", "150k+"],
              ["Gebruikerstevredenheid", "98%"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-primary-foreground/80">{label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <ImageViewer 
          src="/lovable-uploads/c2bdd2cd-0390-4a05-a389-d19bd999edb0.png" 
          alt="Leerlingen die nog moeite hebben" 
          className="max-w-xl w-full rounded-lg shadow-lg"
          aspectRatio="video"
        />
      </div>
    </div>
  );
};
