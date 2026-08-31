import { PrismaClient } from "@prisma/client";
import { destinations } from "../data/destinations";
import { routes, vehicles } from "../data/routes-vehicles";

const prisma = new PrismaClient();

async function main() {
  for (const v of vehicles) {
    await prisma.vehicle.upsert({
      where: { slug: v.slug },
      update: {},
      create: {
        slug: v.slug,
        name: v.name,
        category: v.category,
        seatingCapacity: v.seating,
        acType: v.ac,
        features: v.features,
        images: { create: [{ url: v.image, altText: v.name, order: 0 }] },
      },
    });
  }

  for (const d of destinations) {
    await prisma.destination.upsert({
      where: { slug: d.slug },
      update: {},
      create: {
        slug: d.slug,
        name: d.name,
        state: d.state,
        region: d.region,
        tagline: d.tagline,
        about: d.about,
        bestTimeToVisit: d.bestTimeToVisit,
        nearbyAttractions: d.nearbyAttractions,
        travelTips: d.travelTips,
        images: { create: [{ url: d.image, altText: d.name, order: 0 }] },
      },
    });
  }

  for (const r of routes) {
    await prisma.route.upsert({
      where: { slug: r.slug },
      update: {},
      create: {
        slug: r.slug,
        fromCity: r.from,
        toCity: r.to,
        distanceKm: r.distanceKm,
        travelTime: r.travelTime,
        suggestedVehicle: r.suggestedVehicle,
        placesToVisit: r.placesToVisit,
        faqs: {
          create: r.faqs.map((f, i) => ({ question: f.q, answer: f.a, order: i })),
        },
      },
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
