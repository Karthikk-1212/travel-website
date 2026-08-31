import { SectionHeading } from "./Destinations";

const packages = [
  {
    name: "Hampi Heritage Day Trip",
    duration: "3 Days / 2 Night",
    covers: "South Hampi(Virupaksha Temple, Vittala Temple, Hampi Zoo, Hampi Museum, Hampi Bazaar, Matanga Hill), North Hampi(Anegundi,  Sanapur Lake, Anjanadri, Gangavathi, Some Places..), Tungabradhra Dam,  Hospet  Some Places..",
  },
  {
    name: "North Karnataka Circuit",
    duration: "3 Days / 2 Nights",
    covers: " Badami, Pattadakal, Aihole, Kudala Sangamma, Vijayapura, ",
  },
  {
    name: "Karnataka–Goa Coastal Run",
    duration: "4 Days / 3 Nights",
    covers: "Hospet, Mangaluru, Udupi, Murudeshwara, Gokarna, Honnavara, Dandeli, Goa, Anshi National Park, Dudhsagar Falls detour",
  },
  {
    name: "South India Cultural Tour",
    duration: "5 Days / 4 Nights",
    covers: "Hospet, Hampi, Mysore, Coorg, Ooty",
  },
  {
    name: "WESTERN GHATS EXPLORER",
    duration: "6 Days / 5 Nights",
    covers: "Hospet, Chikmagalur, Sakleshpur, Yettina Buja, Devaramane Betta, Coorg, Kemmanagundi, Kodachadari,  Agumbe, Kudremukh,  SOME PLACES.....",
  },
  {
    name: "Kerala",
    duration: "6 Days / 5 Nights",
    covers: "Bandipur, Ooty, Wayanad, Gavi, Kannur, Kasargod, Kodaikanal, Munnar, Kozhikode, Cochin"
  },
  {
    name: "Maharastra",
    duration: "Call us",
    covers: "Solapur, Pandrapur, Shiridi, gadaikal, More placess....."
  },
   {
    name: "We Travel all over SOUTH INDIA",
    duration: "How Many Days You Want !",
    covers: "Where ever you TRAVEL"
   },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-parchment-50 py-20">
      <div className="container">
        <SectionHeading eyebrow="Tour packages" title="Ready-made itineraries, or we'll build one with you" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-card border border-basalt-600/15 bg-white p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-brass-600">{p.duration}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-basalt-900">{p.name}</h3>
              <p className="mt-2 text-sm text-basalt-700">{p.covers}</p>
              <a
                href="#booking"
                className="mt-5 inline-block rounded-card bg-basalt-900 px-4 py-2 text-xs font-semibold text-parchment-50 hover:bg-basalt-800"
              >
                Enquire About This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
