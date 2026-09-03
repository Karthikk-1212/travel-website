import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "@/data/routes-vehicles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const route = routes.find((r) => r.slug === slug);

  if (!route) return notFound();

  return {
    title: `${route.from} to ${route.to} Cab & Taxi Service | Distance, Fare Enquiry`,
    description: `Book a one-way or round-trip cab from ${route.from} to ${route.to}. Distance ${route.distanceKm} km, approx. ${route.travelTime}. Innova, Sedan and Tempo Traveller options.`,
    alternates: {
      canonical: `/routes/${route.slug}`,
    },
  };
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;

  const route = routes.find((r) => r.slug === slug);

  if (!route) notFound();

  return (
    <main>
      <h1>
        {route.from} to {route.to} Cab & Taxi Service
      </h1>

      <p>
        Book a reliable cab from {route.from} to {route.to}.
      </p>

      <div>
        <p>
          <strong>Distance:</strong> {route.distanceKm} km
        </p>

        <p>
          <strong>Travel Time:</strong> {route.travelTime}
        </p>
      </div>
    </main>
  );
}