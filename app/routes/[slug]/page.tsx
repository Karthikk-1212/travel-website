import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "@/data/routes-vehicles";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const route = routes.find((r) => r.slug === params.slug);
  if (!route) return {};
  return {
    title: `${route.from} to ${route.to} Cab & Taxi Service | Distance, Fare Enquiry`,
    description: `Book a one-way or round-trip cab from ${route.from} to ${route.to}. Distance ${route.distanceKm} km, approx. ${route.travelTime}. Innova, Sedan and Tempo Traveller options.`,
    alternates: { canonical: `/routes/${route.slug}` },
  };
}

export default function RoutePage({ params }: Props) {
  const route = routes.find((r) => r.slug === params.slug);
  if (!route) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: route.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-basalt-950 py-16">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-widest text-brass-400">Route Guide</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-parchment-50 sm:text-4xl">
            {route.from} <span className="text-brass-500">→</span> {route.to} Cab Service
          </h1>

          <div className="route-ribbon my-8 max-w-md" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat label="Distance" value={`${route.distanceKm} km`} />
            <Stat label="Travel Time" value={route.travelTime} />
            <Stat label="Suggested Vehicle" value={route.suggestedVehicle} />
            <Stat label="Pricing" value="On request" />
          </div>
        </div>
      </section>

      <section className="bg-parchment-50 py-16">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-basalt-900">Places to Visit En Route</h2>
            <ul className="mt-4 space-y-2 text-basalt-700">
              {route.placesToVisit.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-brass-600">&middot;</span> {p}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-semibold text-basalt-900">FAQs</h2>
            <div className="mt-4 space-y-4">
              {route.faqs.map((f) => (
                <div key={f.q} className="rounded-card border border-basalt-600/15 bg-white p-5">
                  <p className="font-medium text-basalt-900">{f.q}</p>
                  <p className="mt-1 text-sm text-basalt-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="rounded-card border border-basalt-600/15 bg-white p-6">
              <p className="text-sm text-basalt-700">
                Price will be shared after confirmation based on vehicle and dates.
              </p>
              <a
                href="/#booking"
                className="mt-4 block rounded-card bg-basalt-900 px-5 py-3 text-center text-sm font-semibold text-parchment-50 hover:bg-basalt-800"
              >
                Get a Fare Enquiry
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="carved-card p-4">
      <p className="text-[11px] uppercase tracking-widest text-parchment-200/50">{label}</p>
      <p className="mt-1 font-display text-lg font-semibold text-parchment-50">{value}</p>
    </div>
  );
}
