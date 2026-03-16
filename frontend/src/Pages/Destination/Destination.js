import lakeImg from '../../assets/destination/lake.png';
import churliImg from '../../assets/destination/churli.png';
import nehruParkImg from '../../assets/destination/nehru-park.png';
import mahanandaImg from '../../assets/destination/mahananda.png';
import teaGardenImg from '../../assets/destination/tea-garden.png';
import kankiImg from '../../assets/destination/kanki.png';
import panitankiImg from '../../assets/destination/panitanki.png';

const destinationData = {
  "Kishanganj District": [
    {
      id: 7,
      title: "Kachuudah Lake",
      category: "Nature & Birdwatching",
      description: "A large, scenic freshwater lake surrounded by greenery — a peaceful natural retreat. Migratory birds visit during winter, making it a great spot for birdwatchers and photography.",
      img: lakeImg,
      distance: "35-40 km",
      duration: "~1 hour",
  coordinates: { lat: 26.37707, lng: 88.11280 },
      travelModes: {
        car: { time: "1 hour", route: "Kishanganj → Thakurganj/Belwa route", cost: "₹400-₹600 (approx)" },
        bus: { time: "1.5 hours", route: "Local bus toward Thakurganj/Belwa then local transport", cost: "₹50-₹120" },
        bike: { time: "1.5 hours", route: "District roads via Thakurganj", cost: "₹150-₹250" },
        walking: { time: "Not recommended", route: "N/A", cost: "N/A" }
      },
      highlights: ["Birdwatching", "Boating (seasonal)", "Sunset views", "Picnic spots", "Photography"],
      bestTime: "November to February",
      facilities: ["Limited refreshments/tea stalls", "Basic parking (seasonal)", "Limited public washrooms"]
    },
    {
      id: 8,
      title: "Ruins of Churli Estate",
      category: "Historical Site",
      description: "Remains of an old estate/haveli from the colonial era — partly in ruins but historically significant. Offers a rustic village ambiance and good photography opportunities.",
      img: churliImg,
      distance: "20-25 km",
      duration: "~40-50 minutes",
  coordinates: { lat: 26.340, lng: 88.070 },
      travelModes: {
        car: { time: "40 min", route: "Kishanganj → Thakurganj direction", cost: "₹300-₹450" },
        bus: { time: "1 hour", route: "Bus to Thakurganj then short rickshaw", cost: "₹30-₹80" },
        bike: { time: "45 min", route: "District roads via Thakurganj", cost: "₹120-₹200" },
        walking: { time: "Not recommended", route: "N/A", cost: "N/A" }
      },
      highlights: ["Photography", "Local history exploration", "Rustic village ambiance"],
      bestTime: "October to March",
      facilities: ["No formal amenities", "Village shops nearby (limited)", "No official restrooms"]
    },
    {
      id: 9,
      title: "Nehru Shanti Park",
      category: "Leisure & Family",
      description: "A town park with lush lawns, walking paths, and shaded seating — ideal for family strolls, relaxed evenings, and casual photography.",
      img: nehruParkImg,
      distance: "2 km",
      duration: "5-10 minutes",
  coordinates: { lat: 26.0995, lng: 87.9383 },
      travelModes: {
        car: { time: "5-10 min", route: "Within Kishanganj town", cost: "₹30" },
        bus: { time: "10-15 min", route: "Local rickshaw/auto", cost: "₹10" },
        bike: { time: "8 min", route: "Local streets", cost: "₹10" },
        walking: { time: "20-30 min", route: "Town pedestrian routes", cost: "Free" }
      },
      highlights: ["Family strolls", "Evening relaxation", "Photography"],
      bestTime: "Year-round (evenings preferred)",
      facilities: ["Seating", "Shaded areas", "Nearby eateries and hotels"]
    },
    {
      id: 10,
      title: "Mahananda River (Udra / Bagalbari Ghats)",
      category: "Riverfront & Picnic",
      description: "Scenic riverbanks along the Mahananda River such as Udra Ghat and Bagalbari Ghat — popular local picnic and sunset spots where locals gather for outings.",
      img: mahanandaImg,
      distance: "6-15 km",
      duration: "15-35 minutes",
  coordinates: { lat: 26.4371, lng: 88.2175 },
      travelModes: {
        car: { time: "15-35 min", route: "Local roads along riverfront", cost: "₹150-₹300" },
        bus: { time: "20-45 min", route: "Local bus/auto routes", cost: "₹20-₹60" },
        bike: { time: "20-40 min", route: "Local roads", cost: "₹50-₹150" },
        walking: { time: "Depends on ghat location", route: "N/A", cost: "Free" }
      },
      highlights: ["River views", "Picnics", "Local culture", "Sunset photography"],
      bestTime: "October to March",
      facilities: ["Basic local stalls", "Limited seating areas", "No formal restrooms at all ghats"]
    },
    {
      id: 12,
      title: "Belwa Tea Gardens",
      category: "Scenic Rural Drive",
      description: "Rolling tea gardens and countryside views near Belwa — one of the few tea cultivation areas in Bihar, ideal for photography and leisurely drives.",
      img: teaGardenImg,
      distance: "10-15 km",
      duration: "20-40 minutes",
  coordinates: { lat: 26.4190, lng: 88.1700 },
      travelModes: {
        car: { time: "20-40 min", route: "Kishanganj → Belwa Tea Garden Road", cost: "₹200-₹350" },
        bus: { time: "30-50 min", route: "Local bus to Belwa area", cost: "₹20-₹60" },
        bike: { time: "25-40 min", route: "Local roads", cost: "₹80-₹150" },
        walking: { time: "Not recommended for long distances", route: "N/A", cost: "N/A" }
      },
      highlights: ["Photography", "Countryside drive", "Learning about local tea production"],
      bestTime: "October to March",
      facilities: ["No hotels on-site", "Basic local shops", "Return to Kishanganj for lodging"]
    },
    {
      id: 14,
      title: "Panitanki (India–Nepal Border)",
      category: "Border Trade & Culture",
      description: "A major India–Nepal border crossing point near Siliguri with a lively cross-border trade atmosphere.",
  img: panitankiImg,
      distance: "~50 km",
      duration: "1.5 hours",
      mapLink: "https://maps.google.com/?q=Panitanki",
  coordinates: { lat: 26.64, lng: 88.17 },
      travelModes: {
        car: { time: "1.5 hours", route: "NH27 toward Siliguri", cost: "₹800-₹1200 (approx)" },
        bus: { time: "1.5-2 hours", route: "Intercity bus via NH27", cost: "₹150-₹300" },
        bike: { time: "2+ hours", route: "Highway route", cost: "₹300-₹500" },
        walking: { time: "Depends on border procedures", route: "N/A", cost: "N/A" }
      },
      highlights: ["Mechi River", "Border gate & security checkpost", "Nepal market (Kakarbhitta) across the border", "Lively cross-border trade"],
      bestTime: "Year-round (check border timings)",
      facilities: ["Hotels and restaurants", "Petrol pumps", "Washrooms in eateries", "Currency exchange & shops"],
      bestFor: "Border tourism & short international experience (carry valid ID)"
    },
    {
      id: 13,
      title: "Kanki Kali Mandir (Kanki Temple)",
      category: "Religious & Cultural",
      description: "A very famous Kali temple in Kanki village, visited by devotees from Bihar, West Bengal, and Nepal.",
      img: kankiImg,
      distance: "~18–20 km",
      duration: "30–35 minutes",
      mapLink: "https://maps.google.com/?q=Kanki+Kali+Mandir+Bihar",
  coordinates: { lat: 25.58, lng: 86.48 },
      travelModes: {
        car: { time: "30-35 min", route: "Kishanganj → Kanki via local roads", cost: "₹250-₹400 (approx)" },
        bus: { time: "40-50 min", route: "Local bus toward Kanki / shared jeep", cost: "₹30-₹80" },
        bike: { time: "35-45 min", route: "Local roads", cost: "₹80-₹150" },
        walking: { time: "Not recommended", route: "N/A", cost: "N/A" }
      },
      highlights: ["Beautiful idol of Goddess Kali", "Large temple campus", "Devotional atmosphere", "Major crowd during Navratri & Kali Puja"],
      bestTime: "Navratri & Kali Puja; evenings year-round",
      facilities: ["Shops selling prasad & flowers", "Basic washrooms (seasonal improvements during festivals)", "Small eateries nearby", "No luxury stay at temple — stay in Kishanganj town"],
      bestFor: "Religious tourism & cultural experience"
    },
  ],
  "Religious Heritage": [
    {
      id: 3,
      title: "Kali Mandir Temple",
      category: "Religious & Cultural",
      description: "Ancient temple dedicated to Goddess Kali, serving as a spiritual center with rich cultural heritage. The temple features traditional architecture and hosts various religious festivals throughout the year.",
      img: "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      distance: "3 km",
      duration: "8 minutes",
  coordinates: { lat: 26.7167, lng: 88.4167 },
      travelModes: {
        car: { time: "8 min", route: "Temple Road via City Center", cost: "₹50" },
        bus: { time: "15 min", route: "City bus Route 2", cost: "₹10" },
        bike: { time: "12 min", route: "Main Road → Temple Street", cost: "₹20" },
        walking: { time: "35 min", route: "Direct pedestrian route", cost: "Free" }
      },
      highlights: ["Ancient Architecture", "Religious Ceremonies", "Festival Celebrations", "Spiritual Experience"],
      bestTime: "Year-round, special during Kali Puja",
      facilities: ["Prayer Hall", "Parking", "Shoe Storage", "Prasad Counter"]
    }
  ],

};

export default destinationData;