import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-basalt-950">
      <Image
        src="/images/hero-hampi.jpg"
        alt="Boulder ruins of Hampi at golden hour, Karnataka"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt-950 via-basalt-950/40 to-basalt-950/70" />
      <div className="absolute inset-0 bg-boulder-texture" />

      <div className="container relative z-10 pt-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass-400">
          Hospet &middot; Hampi &middot; Vijayanagar District
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-parchment-50 sm:text-5xl md:text-6xl">
          Travel South India the way the empire once did —
          <span className="italic text-brass-400"> from Hampi's gates outward.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-parchment-200/85">
          Outstation cabs, Innovas and Tempo Travellers based in Hospet, ready
          for Hampi, Goa, Kerala, Mysore, Coorg, Western Ghats and beyond — with
          experienced local drivers who know every temple gate and hill pass.
        </p>

        <div className="route-ribbon my-10 max-w-xl" />

        <div className="flex flex-wrap gap-4">
          <a
            href="#booking"
            className="rounded-card bg-brass-500 px-6 py-3 text-sm font-semibold text-basalt-950 transition hover:bg-brass-400"
          >
            Check Availability
          </a>
          <a
            href="https://wa.me/+917975748092"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-card border border-parchment-100/30 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:border-brass-400 hover:text-brass-400"
          >
            WhatsApp an Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
