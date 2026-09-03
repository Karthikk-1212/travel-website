```tsx
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) return {};

  return {
    title: `${dest.name} Tour Package from Hospet — ${dest.tagline}`,
    description: `${dest.about} Book a cab or tour package from Hospet to ${dest.name} with AARUSHI Travels.`,
    alternates: { canonical: `/destinations/${dest.slug}` },
    openGraph: {
      title: `${dest.name}, ${dest.state}`,
      description: dest.tagline,
      images: [dest.image],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);

  if (!dest) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: dest.name,
    description: dest.about,
    address: {
      "@type": "PostalAddress",
      addressRegion: dest.state,
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative h-[50vh] min-h-[360px] w-full">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-basalt-950 via-basalt-950/30 to-transparent" />
        <div className="container relative z-10 flex h-full flex-col justify-end pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-brass-400">
            {dest.region} &middot; {dest.state}
          </p>
          <h1 className="font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
            {dest.name}
          </h1>
          <p className="mt-2 max-w-xl text-parchment-200/85">
            {dest.tagline}
          </p>
        </div>
      </section>

      <section className="bg-parchment-50 py-16">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-basalt-900">
              About {dest.name}
            </h2>
            <p className="mt-4 text-basalt-700">{dest.about}</p>

            <h3 className="mt-10 font-display text-xl font-semibold text-basalt-900">
              Travel Tips
            </h3>
            <ul className="mt-3 space-y-2 text-basalt-700">
              {dest.travelTips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-brass-600">&middot;</span> {tip}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="rounded-card border border-basalt-600/15 bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-basalt-500">
                Best Time to Visit
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-basalt-900">
                {dest.bestTimeToVisit}
              </p>
            </div>

            <div className="rounded-card border border-basalt-600/15 bg-white p-6">
              <p className="text-xs uppercase tracking-widest text-basalt-500">
                Nearby Attractions
              </p>
              <ul className="mt-2 space-y-1 text-sm text-basalt-700">
                {dest.nearbyAttractions.map((a) => (
                  <li key={a}>&middot; {a}</li>
                ))}
              </ul>
            </div>

            <a
              href="/#booking"
              className="block rounded-card bg-basalt-900 px-5 py-3 text-center text-sm font-semibold text-parchment-50 hover:bg-basalt-800"
            >
              Enquire About {dest.name}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
```
