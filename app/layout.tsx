import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aarushitravels.in";
const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "AArushi Travels";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Cab, Innova & Tempo Traveller Rental in Hospet & Hampi`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Book reliable outstation cabs, Innova Crysta, Tempo Traveller and mini bus rentals from Hospet for Hampi, Goa, Kerala, Mysore, Coorg, Tirupati and across South India. 24x7 support, experienced local drivers.",
  keywords: [
    "Vijayanagara car service",
    "Hampi car service",
    "Travels in vijayanagar (hampi)",
    "Travels in hospet",
    "Travels in hampi",
    "Travels in Ballary",
    "ballary car service",
    "Travels in koppala",
    "tour Travels in karnataka ",
    "goa pickup drop from hampi, hospete, ballary,koppala",
    "Tour packages in karnataka (Hampi)",
    "taxi service in hampi, ballary, Hospet, Koppala",
    "car rental hospet",
    "taxi service hospet",
    "tempo traveller hospet",
    "hampi tour package",
    "hospet taxi",
    "hospet to goa cab",
    "hospet to kerala cab",
    "innova rental hospet",
    "travel agency hospet",
  ],
  openGraph: {
    type: "website",
    siteName: COMPANY_NAME,
    locale: "en_IN",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: COMPANY_NAME,
    image: `${SITE_URL}/images/hero-hampi.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: "+91-7975748092",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vijayanagar District",
      addressLocality: "Hospet (Hosapete)",
      addressRegion: "Karnataka",
      postalCode: "583201",
      addressCountry: "IN",
    },
    areaServed: [
      "Hospet", "Hampi", "Karnataka","South Karnataka", "North Karnataka", "Western Karnataka", "Kerala", "Goa", "Andhra Pradesh", "Telangana", "Tamil Nadu",
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
