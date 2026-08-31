export type RouteInfo = {
  slug: string;
  from: string;
  to: string;
  distanceKm: number;
  travelTime: string;
  suggestedVehicle: string;
  placesToVisit: string[];
  faqs: { q: string; a: string }[];
};

export const routes: RouteInfo[] = [
  {
    slug: "hospet-to-hampi",
    from: "Hospet",
    to: "Hampi",
    distanceKm: 13,
    travelTime: "25–30 minutes",
    suggestedVehicle: "Sedan or Hatchback",
    placesToVisit: ["Virupaksha Temple", "Vittala Temple", "Hampi Bazaar", "Matanga Hill Sunrise Point"],
    faqs: [
      { q: "How far is Hampi from Hospet railway station?", a: "Hampi is about 13 km from Hospet Junction, roughly a 25–30 minute drive." },
      { q: "Can I do a Hampi day trip from Hospet?", a: "Yes — most of our customers book a half-day or full-day sightseeing package covering the main Hampi ruins from Hospet." },
    ],
  },
  {
    slug: "hospet-to-goa",
    from: "Hospet",
    to: "Goa",
    distanceKm: 320,
    travelTime: "6.5–7.5 hours",
    suggestedVehicle: "Innova Crysta or Tempo Traveller",
    placesToVisit: ["Dandeli", "Anshi National Park", "Dudhsagar Falls detour"],
    faqs: [
      { q: "Is there a direct cab from Hospet to Goa?", a: "Yes, we run direct one-way and round-trip outstation cabs from Hospet to both North and South Goa." },
      { q: "What's the best route from Hospet to Goa?", a: "Most drivers take the Hubballi–Dharwad–Belagavi corridor, with an optional detour through Dandeli." },
    ],
  },
];

export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  seating: string;
  ac: string;
  features: string[];
  image: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "Toyota Rumion",
    name: "Toyota Rumion",
    category: "SUV car",
    seating: "6 + 1 seater",
    ac: "AC | Non AC",
    features: ["Comfortable ride", "Experienced driver"],
    image: "/images/vehicle-Rumion.jpg",
  },
  {
    slug: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    seating: "6 + 1 Seater",
    ac: "AC | Non AC",
    features: ["Push-back seating", "Extra legroom", "Ample luggage space", "Driver included"],
    image: "/images/vehicle-innova-crysta12.jpg",
  },
  {
    slug: "sedan",
    name: "Sedan",
    category: "Car",
    seating: "4 Seater",
    ac: "AC | Non AC",
    features: ["City & local sightseeing", "Comfortable ride", "Driver included"],
    image: "/images/swift1.jpg",
  },
  {
    slug: "toyota-innova",
    name: "SUV",
    category: "SUV",
    seating: "7 Seater",
    ac: "AC | Non AC",
    features: ["Comfortable long-distance ride", "Spacious boot", "Driver included"],
    image: "/images/vehicle-innova.jpg",
  },
  {
    slug: "Hundai platinum",
    name: "Hundai platinum",
    category: "Sedan",
    seating: "4 Seater",
    ac: "AC | Non AC",
    features: ["City & local sightseeing", "Comfortable ride", "Driver included"],
    image: "/images/hundai-platina.jpg",
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    category: "Group Travel",
    seating: "12 / 17 Seater",
    ac: "AC | Non AC",
    features: ["Pushback seats", "Ideal for family groups", "Luggage carrier"],
    image: "/images/vehicle-tempo-traveller.jpg",
  },
 
  {
    slug: "mini-bus",
    name: "Mini Bus",
    category: "Group Travel",
    seating: "20 / 25 Seater",
    ac: "AC | Non AC",
    features: ["Ideal for large groups", "Ample luggage capacity", "Experienced driver"],
    image: "/images/vehicle-mini-bus.jpg",
  },
  
  
];
