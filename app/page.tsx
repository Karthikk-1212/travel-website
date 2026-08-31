import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import Destinations from "@/components/Destinations";
import Vehicles from "@/components/Vehicles";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <Destinations />
      <Vehicles />
      <WhyChooseUs />
      <Packages />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  );
}
