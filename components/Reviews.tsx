import { Star } from "lucide-react";
import { SectionHeading } from "./Destinations";

const reviews = [
  {
    name: "Ramesh K.",
    trip: "Hospet → Hampi, full-day sightseeing",
    rating: 5,
    text: "Driver arrived on time and knew exactly where to take us for sunrise at Matanga Hill. Car was spotless.",
  },
  {
    name: "Priya S.",
    trip: "Hospet → Goa, round trip",
    rating: 5,
    text: "Booked an Innova Crysta for a family trip to Goa. Comfortable the whole way and driver was very courteous.",
  },
  {
    name: "Suresh Traders",
    trip: "Tempo Traveller, company outing",
    rating: 5,
    text: "Used their 17-seater Tempo Traveller for a company trip to Coorg. Smooth booking over WhatsApp, no surprises on pricing.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-basalt-950 py-20">
      <div className="container">
        <SectionHeading eyebrow="Customer reviews" title="What travellers say after the trip" light />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="carved-card p-6">
              <div className="flex gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brass-500 text-brass-500" />
                ))}
              </div>
              <p className="mt-4 text-sm text-parchment-200/85">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-5 font-display text-sm font-semibold text-parchment-50">{r.name}</p>
              <p className="text-xs text-parchment-200/60">{r.trip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
