import { ShieldCheck, MapPinned, Clock4, BadgeIndianRupee } from "lucide-react";
import { SectionHeading } from "./Destinations";

const points = [
  {
    icon: MapPinned,
    title: "Local, on the ground",
    body: "Based in Hospet — drivers who know Hampi's back roads, not just the highway.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, maintained fleet",
    body: "Regularly serviced vehicles and verified, experienced drivers for every trip.",
  },
  {
    icon: Clock4,
    title: "24×7 support",
    body: "Reachable before, during and after your trip — by call or WhatsApp.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent pricing",
    body: "No hidden charges. Final price confirmed with you before you travel.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-parchment-50 py-20">
      <div className="container">
        <SectionHeading eyebrow="Why choose us" title="Built for the Hospet–Hampi corridor, ready for the whole south" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-card border border-basalt-600/15 bg-white p-6">
              <p.icon className="h-6 w-6 text-brass-600" />
              <h3 className="mt-4 font-display text-lg font-semibold text-basalt-900">{p.title}</h3>
              <p className="mt-2 text-sm text-basalt-700">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
