import Image from "next/image";
import { SectionHeading } from "./Destinations";

const images = [
  { src: "/images/gallery-hampi-1.jpg", alt: "Vittala Temple stone chariot, Hampi" },
  { src: "/images/gallery-hampi-2.jpg", alt: "Boulder landscape at sunset, Hampi" },
  { src: "/images/gallery-hospet-1.jpg", alt: "Hospet town street" },
  { src: "/images/gallery-tempo.jpg", alt: "Tempo Traveller fleet" },
  { src: "/images/gallery-goa.jpg", alt: "Goa beach coastline" },
  { src: "/images/gallery-coorg.jpg", alt: "Coorg coffee plantation hills" },
  { src: "/images/gallery-Udupi.jpg", alt: "Udupi Shri Krishna Temple"},
  { src: "/images/gallery-dandeli.jpg", alt: "Dandeli Kali Reserve Forest"},
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-parchment-50 py-20">
      <div className="container">
        <SectionHeading eyebrow="Gallery" title="Hampi, the highway, and everything between" />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {images.map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-card">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition duration-500 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
