const destinationData = {
  "Kishanganj District": [
    {
      id: 1,
      title: "Bahadurganj Tea Gardens",
      category: "Nature & Agriculture",
      description: "Sprawling tea plantations with lush green landscapes offering scenic beauty and insight into local tea production. Experience the serene environment and learn about traditional tea cultivation methods.",
      img: "https://images.pexels.com/photos/4464078/pexels-photo-4464078.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      distance: "12 km",
      duration: "25 minutes",
      coordinates: { lat: 26.2547, lng: 87.8331 },
      travelModes: {
        car: { time: "25 min", route: "Via NH27 → Bahadurganj Road", cost: "₹150" },
        bus: { time: "35 min", route: "Local bus from Kishanganj Bus Stand", cost: "₹25" },
        bike: { time: "30 min", route: "NH27 → Tea Garden Road", cost: "₹50" },
        walking: { time: "2.5 hours", route: "Pedestrian path through villages", cost: "Free" }
      },
      highlights: ["Tea Plantation Tours", "Photography Spots", "Local Tea Tasting", "Nature Walks"],
      bestTime: "October to March",
      facilities: ["Parking", "Refreshments", "Guide Services", "Rest Areas"]
    },
    {
      id: 2,
      title: "Kishanganj Cultural Heritage Museum",
      category: "Heritage & Education",
      description: "Comprehensive museum showcasing the rich cultural heritage, history, and traditions of Kishanganj district. Features artifacts, photographs, and interactive displays about local culture and development.",
      img: "https://images.pexels.com/photos/1467633/pexels-photo-1467633.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      distance: "2 km",
      duration: "5 minutes",
      coordinates: { lat: 26.1047, lng: 87.9431 },
      travelModes: {
        car: { time: "5 min", route: "City Center → Museum Road", cost: "₹30" },
        bus: { time: "10 min", route: "City bus Route 1", cost: "₹8" },
        bike: { time: "8 min", route: "Main Road → Heritage Street", cost: "₹15" },
        walking: { time: "20 min", route: "Heritage walk route", cost: "Free" }
      },
      highlights: ["Historical Artifacts", "Cultural Displays", "Educational Tours", "Photography Gallery"],
      bestTime: "Year-round",
      facilities: ["Guided Tours", "Audio Guide", "Library", "Cafe", "Gift Shop", "Parking"]
    }
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
      coordinates: { lat: 26.1247, lng: 87.9531 },
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
  "Natural Attractions": [
    {
      id: 4,
      title: "Mahananda Wildlife Sanctuary",
      category: "Wildlife & Nature",
      description: "Protected forest area spanning diverse ecosystems with rich flora and fauna. Home to various species of birds, mammals, and rare plants. Offers nature trails and wildlife viewing opportunities.",
      img: "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      distance: "35 km",
      duration: "1 hour",
      coordinates: { lat: 26.8247, lng: 88.3531 },
      travelModes: {
        car: { time: "1 hour", route: "NH27 → Sanctuary Road via Siliguri", cost: "₹350" },
        bus: { time: "1.5 hours", route: "Interstate bus to Siliguri → Local transport", cost: "₹80" },
        bike: { time: "1.2 hours", route: "Highway route through forest roads", cost: "₹150" },
        walking: { time: "7 hours", route: "Not recommended - too far", cost: "Free" }
      },
      highlights: ["Wildlife Spotting", "Nature Trails", "Bird Watching", "Photography"],
      bestTime: "November to April",
      facilities: ["Entry Gate", "Guide Services", "Rest House", "Nature Interpretation Center"]
    }
  ],
  "Hill Stations & Tourism": [
    {
      id: 5,
      title: "Darjeeling Hills",
      category: "Hill Station & Tourism",
      description: "World-renowned hill station famous for its tea gardens, stunning mountain views, and pleasant climate. Experience the historic toy train, visit tea estates, and enjoy panoramic Himalayan vistas.",
      img: "https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      distance: "85 km",
      duration: "2.5 hours",
      coordinates: { lat: 27.0360, lng: 88.2627 },
      travelModes: {
        car: { time: "2.5 hours", route: "NH27 → Hill Cart Road via Siliguri", cost: "₹800" },
        bus: { time: "3.5 hours", route: "Kishanganj → Siliguri → Darjeeling", cost: "₹200" },
        bike: { time: "3 hours", route: "Scenic mountain roads", cost: "₹300" },
        train: { time: "6 hours", route: "Toy Train from New Jalpaiguri", cost: "₹150" }
      },
      highlights: ["Tiger Hill Sunrise", "Tea Garden Tours", "Toy Train Ride", "Mall Road Shopping"],
      bestTime: "March to May, September to November",
      facilities: ["Hotels", "Restaurants", "Tourist Information", "Transport Hub"]
    }
  ],
  "Border Trade & Culture": [
    {
      id: 6,
      title: "Nepal Border Market",
      category: "Shopping & Culture",
      description: "Vibrant international border market offering unique cross-cultural shopping experience. Find traditional handicrafts, spices, textiles, and experience the blend of Indian and Nepalese cultures.",
      img: "https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
      distance: "18 km",
      duration: "35 minutes",
      coordinates: { lat: 26.3547, lng: 87.7331 },
      travelModes: {
        car: { time: "35 min", route: "Border Road via Immigration Post", cost: "₹200" },
        bus: { time: "50 min", route: "Local bus to border crossing", cost: "₹30" },
        bike: { time: "40 min", route: "Direct border route", cost: "₹80" },
        walking: { time: "3.5 hours", route: "Border walking path", cost: "Free" }
      },
      highlights: ["Cross-Border Shopping", "Cultural Exchange", "Traditional Crafts", "Local Cuisine"],
      bestTime: "Year-round (check border timings)",
      facilities: ["Immigration Office", "Currency Exchange", "Parking", "Food Courts"]
    }
  ]
};

export default destinationData;