import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-parchment-50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Explore Karnataka, Kerala, Tamil Nadu, Goa, Andhra Pradesh, & beyond" 
          title="Where the road out of Hospet can take you"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative block overflow-hidden rounded-card"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={d.image}
                  alt={`${d.name}, ${d.state}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-basalt-950 via-basalt-950/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-brass-400">
                  {d.region}
                </p>
                <h3 className="font-display text-2xl font-semibold text-parchment-50">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-parchment-200/80">{d.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  light,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-600">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold sm:text-4xl ${
          light ? "text-parchment-50" : "text-basalt-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
