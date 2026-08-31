export type Destination = {
  slug: string;
  name: string;
  region: string;
  state: string;
  tagline: string;
  about: string;
  bestTimeToVisit: string;
  nearbyAttractions: string[];
  travelTips: string[];
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "hampi",
    name: "Hampi",
    region: "North Karnataka",
    state: "Karnataka",
    tagline: "A UNESCO World Heritage boulder-city of forgotten empires",
    about:
      "Hampi was the capital of the Vijayanagara Empire and remains one of India's most striking ruin-scapes — stone chariots, boulder-strewn hills, and temple gopurams rising out of banana plantations along the Tungabhadra river.",
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Virupaksha Temple", "Vittala Temple", "Hampi Bazaar", "Matanga Hill", "Anegundi"],
    travelTips: [
      "Start sightseeing early to avoid the midday heat on the boulder terrain.",
      "Carry cash — many local stalls near the ruins don't accept cards.",
      "Hire a local guide near Virupaksha Temple for historical context.",
    ],
    image: "/images/hero-hampi.jpg",
  },
  {
    slug: "badami",
    name: "Badami",
    region: "North Karnataka",
    state: "Karnataka",
    tagline: "Rock-cut cave temples above a red sandstone gorge",
    about:
      "Badami's 6th-century cave temples are carved directly into sandstone cliffs overlooking Agastya Lake, a short detour from Hampi through the old Chalukyan heartland.",
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Badami Caves", "Agastya Lake", "Bhutanatha Temple", "Badami Fort"],
    travelTips: ["Wear grippy footwear for the cave steps.", "Combine with Pattadakal and Aihole in one day trip."],
    image: "/images/badami.jpg",
  },
  {
    slug: "mysore",
    name: "Mysore",
    region: "South Karnataka",
    state: "Karnataka",
    tagline: "Historic palace city known for its royal legacy and silk weaving",
    about:
      "Mysore is a historic palace city known for its royal legacy and silk weaving, located in the heart of South Karnataka.",
    bestTimeToVisit: "October to February",
    nearbyAttractions: ["Mysore Palace", "St. Mary's Cathedral", "Chamarajendra Zoological Gardens", "Windsor Palace", "Chamundi Hill"],
    travelTips: ["Visit the Mysore Palace during the Dasara festival for a spectacular display.", "Try the local Mysore Pak, a famous sweet treat."],
    image: "/images/mysore.jpg",
  },
  {
    slug: "udupi",
    name: "Udupi",
    region: "Coastal Karnataka",
    state: "Karnataka",
    tagline: "Temple town famous for its Krishna Matha and coastal cuisine",
    about:
      "Udupi is best known for the Sri Krishna Matha temple and as the birthplace of the udupi cuisine that spread across South India, with nearby beaches like Malpe and St. Mary's Island rounding out a low-key coastal stop.",
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Sri Krishna Matha", "Malpe Beach", "St. Mary's Island", "Kaup Beach & Lighthouse"],
    travelTips: ["Boats to St. Mary's Island don't run in rough monsoon seas.", "Try the local udupi thali at a matha-run restaurant for the most authentic version."],
    image: "/images/udupi.jpg",
  },
  {
    slug: "gokarna",
    name: "Gokarna",
    region: "Coastal Karnataka",
    state: "Karnataka",
    tagline: "Sacred town on the Konkan coast, known for its Shiva temples and pristine beaches",
    about:
      "Gokarna is a sacred town on the Konkan coast, known for its Shiva temples and pristine beaches. It is a popular destination for devotees and tourists seeking a peaceful retreat.",
    bestTimeToVisit: "November to February",
    nearbyAttractions: ["Durga Temple", "Kapardha Beach", "Gokarna Beach", "Mookambika Temple","Murudeshwar Temple"],
    travelTips: ["Visit the Durga Temple during the Navratri festival for a spectacular display.", "Try the local Gokarna cuisine at a traditional restaurant."],
    image: "/images/gokarna2.jpg",
  },
  {
    slug: "ooty",
    name: "Ooty",
    region: "Nilgiri Hills",
    state: "Tamil Nadu",
    tagline: "Colonial-era hill station in the Nilgiris famous for tea gardens",
    about:
      "Ooty (Udhagamandalam) is a former British hill station ringed by tea estates, eucalyptus groves, and the narrow-gauge Nilgiri Mountain Railway, making it one of South India's classic hill retreats.",
    bestTimeToVisit: "October to June",
    nearbyAttractions: ["Ooty Lake", "Botanical Garden", "Doddabetta Peak", "Nilgiri Mountain Railway"],
    travelTips: ["Book the toy train tickets well in advance, especially in peak season.", "Carry a light jacket — evenings turn cold even in summer months."],
    image: "/images/ooty.jpg",
  },
  {
    slug: "coorg",
    name: "Coorg",
    region: "Western Ghats",
    state: "Karnataka",
    tagline: "Coffee plantations and misty hills in the Western Ghats",
    about:
      "Coorg (Kodagu) is a lush hill district in the Western Ghats, famous for its coffee plantations, misty hills, and scenic waterfalls.",
    bestTimeToVisit: "October to March",
    nearbyAttractions: ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Talakaveri"],
    travelTips: ["Hire a local guide for plantation tours.", "Carry insect repellent for trekking in the forests."],
    image: "/images/coorg.jpg",
  }
];
