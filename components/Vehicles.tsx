import Image from "next/image";
import { Users, Snowflake, Luggage, UserCheck } from "lucide-react";
import { vehicles } from "@/data/routes-vehicles";
import { SectionHeading } from "./Destinations";

export default function Vehicles() {
  return (
    <section id="vehicles" className="bg-basalt-950 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Our fleet"
          title="Popular vehicles for every group size"
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div key={v.slug} className="carved-card overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={v.image} alt={v.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-brass-400">
                  {v.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-parchment-50">
                  {v.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-parchment-200/75">
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {v.seating}</span>
                  <span className="flex items-center gap-1"><Snowflake className="h-3.5 w-3.5" /> {v.ac}</span>
                  <span className="flex items-center gap-1"><Luggage className="h-3.5 w-3.5" /> Luggage space</span>
                  <span className="flex items-center gap-1"><UserCheck className="h-3.5 w-3.5" /> Driver included</span>
                </div>

                <ul className="mt-4 space-y-1 text-sm text-parchment-200/70">
                  {v.features.map((f) => (
                    <li key={f}>&middot; {f}</li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-brass-400">
                    Contact Us for Best Price
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  <a
                    href="tel:+917975748092"
                    className="flex-1 rounded-card bg-brass-500 py-2 text-center text-xs font-semibold text-basalt-950 hover:bg-brass-400"
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/+917975748092"
                    className="flex-1 rounded-card border border-leaf-500 py-2 text-center text-xs font-semibold text-leaf-500 hover:bg-leaf-500/10"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="#booking"
                    className="flex-1 rounded-card border border-parchment-100/30 py-2 text-center text-xs font-semibold text-parchment-100 hover:border-brass-400"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
