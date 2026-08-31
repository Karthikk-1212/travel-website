import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-basalt-600/40 bg-basalt-900 py-12 text-parchment-200/70">
      <div className="container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-parchment-50">
            AArushi <span className="text-brass-500">Travels</span>
          </p>
          <p className="mt-3 text-sm">
            Outstation cabs and tour packages from Hospet, serving Hampi and
            South India.
          </p>
        </div>

        <FooterCol
          title="Explore"
          links={[
            ["Destinations", "/#destinations"],
            ["Vehicles", "/#vehicles"],
            ["Packages", "/#packages"],
            ["Gallery", "/#gallery"],
          ]}
        />
        <FooterCol
          title="Popular Routes"
          links={[
            ["Hospet to Hampi", "/routes/hospet-to-hampi"],
            ["Hospet to Goa", "/routes/hospet-to-goa"],
            ["Hospet to Badami", "/routes/hospet-to-badami"],
            ["Hospet to Dandeli", "/routes/hospet-to-dandeli"],
            ["Hospet to Udupi", "/routes/hospet-to-udupi"],
            ["Hospet to Bangalore", "/routes/hospet-to-bangalore"],
            ["Hospet to Mysore", "/routes/hospet-to-mysore"],
            ["Hospet to Coorg", "/routes/hospet-to-coorg"],
            ["Hospet to Kerala", "/routes/hospet-to-kerala"],
            ["Hospet to Chikkamagaluru", "/routes/hospet-to-chikkamagaluru"],
            ["Hospet to Ooty", "/routes/hospet-to-ooty"],
            ["Hospet to Pondicherry", "/routes/hospet-to-pondicherry"],
            ["Hospet to Sakleshpur", "/routes/hospet-to-sakleshpur"],
          
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            ["About Us", "/about"],
            ["Contact", "/#contact"],
            ["FAQs", "/faq"],
          ]}
        />
      </div>

      <div className="container mt-10 border-t border-basalt-600/30 pt-6 text-xs">
        © {new Date().getFullYear()} AArushi Travels, Hospet. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-parchment-100">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="hover:text-brass-500">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
