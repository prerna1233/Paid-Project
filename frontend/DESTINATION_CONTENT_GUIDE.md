# Quick Reference: Destination Categories & Filters

## Category Definitions

### 🌳 Nature & Eco-Tourism
**What to include:**
- Tea gardens and plantations
- Parks and gardens
- Rivers and water bodies
- Hills and valleys
- Scenic viewpoints
- Nature trails
- Eco-tourism spots

**Example destinations:**
- Bahadurganj Tea Gardens
- Riverfront areas
- Green spaces

---

### 🐾 Wildlife & Forest Areas
**What to include:**
- Wildlife sanctuaries
- Forest reserves
- Bird-watching zones
- Butterfly parks
- Conservation areas
- Safari zones

**Example destinations:**
- Mahananda Wildlife Sanctuary
- Protected forest areas
- Bird-watching spots near borders

---

### 🙏 Religious & Spiritual Places
**What to include:**
- Hindu temples
- Mosques
- Dargahs (Sufi shrines)
- Churches
- Buddhist sites
- Sacred groves
- Pilgrimage sites

**Example destinations:**
- Kali Mandir Temple
- Local mosques
- Dargah sharifs

**Important notes:**
- Include dress code requirements
- Photography restrictions
- Prayer time schedules
- Entry rules for non-followers

---

### 🏛️ Culture & Heritage
**What to include:**
- Museums
- Historical buildings
- Archaeological sites
- Cultural centers
- Heritage buildings
- Colonial architecture
- Old markets

**Example destinations:**
- Kishanganj Cultural Heritage Museum
- Historical structures
- Heritage walks routes

---

### 🚜 Rural & Community Tourism
**What to include:**
- Traditional villages
- Farming communities
- Local markets
- Handicraft centers
- Rural homestays
- Agricultural tourism
- Traditional occupations (weaving, pottery)

**What makes it special in Kishanganj:**
- Tea workers' communities
- Border villages with multi-cultural identity
- Traditional Bengali-Bihari rural life
- Local food experiences

**Activities:**
- Village walks
- Farm visits
- Handicraft workshops
- Local cuisine experiences
- Meet local artisans

---

### 🥾 Adventure & Outdoor
**What to include:**
- Trekking routes
- Hiking trails
- Cycling paths
- Rock climbing spots
- Water sports areas
- Camping sites
- Photography expeditions

**Kishanganj specific:**
- Nature photography (tea gardens, border hills)
- Bird watching expeditions
- Cycling routes through tea estates
- Trekking near hills
- Border region exploration (with permits)

---

## Filter Implementation Guide

### Distance Filter Logic
```javascript
// Extract numeric distance from string like "12 km"
const distanceKm = parseInt(destination.distance);

// Filter logic:
- "10 km" → distanceKm <= 10
- "50 km" → distanceKm <= 50
- "100 km" → distanceKm <= 100
```

### Season Filter Logic
```javascript
// Match best time with selected season
destination.bestTime.toLowerCase().includes(selectedSeason)

Seasons:
- "october" → October-March (Winter)
- "april" → April-June (Summer)
- "july" → July-September (Monsoon)
- "year-round" → Matches all seasons
```

### Category Filter Logic
```javascript
// Flexible category matching
destination.category.toLowerCase().includes(selectedCategory.toLowerCase())

Examples:
- "Nature & Eco-Tourism" matches "nature"
- "Wildlife & Forest" matches "wildlife"
- "Religious & Cultural" matches "religious"
```

---

## Adding New Destinations - Checklist

When adding a new destination to the database, ensure:

### Required Fields:
- [ ] **id**: Unique number
- [ ] **title**: Official name
- [ ] **category**: One of the 6 main categories
- [ ] **description**: 2-3 sentences, factual tone
- [ ] **img**: High-quality image URL (landscape, 1200x800 min)
- [ ] **distance**: Format "XX km"
- [ ] **duration**: Travel time from district center
- [ ] **coordinates**: { lat, lng } - accurate GPS
- [ ] **bestTime**: Specify season

### Travel Modes Object:
```javascript
travelModes: {
  car: { time: "25 min", route: "Description", cost: "" },
  bus: { time: "35 min", route: "Description", cost: "" },
  bike: { time: "30 min", route: "Description", cost: "" },
  // Add walking, train if applicable
}
```
**Note:** Keep cost empty or use descriptive text, not ₹ amounts

### Highlights Array:
- [ ] 4-6 bullet points
- [ ] Use descriptive, not promotional language
- [ ] Focus on what visitors will experience

Examples:
```javascript
highlights: [
  "Traditional Tea Processing",
  "Scenic Valley Views",
  "Bird Watching Opportunities",
  "Local Culture Experience"
]
```

### Facilities Array:
```javascript
facilities: [
  "Parking",           // Physical facilities
  "Restrooms",         // Amenities
  "Drinking Water",    // Basic needs
  "Guide Services",    // Services available
  "Wheelchair Access", // Accessibility
  "Photography Allowed" // Rules
]
```

### Best Practices:
- ✅ Use official/local names
- ✅ Be accurate with distances
- ✅ Include safety notes if needed
- ✅ Mention permit requirements
- ✅ Use neutral, informative tone
- ❌ No promotional language
- ❌ No pricing (except transport reference)
- ❌ No ratings or reviews

---

## Special Categories for Kishanganj

### Border Region Attractions
**Note:** Some areas near international border may require special permits

**Include in description:**
- Permit requirement status
- Restrictions (photography, etc.)
- Contact for permits
- Best route avoiding restricted areas

### Tri-Junction Cultural Sites
**Unique to Kishanganj:** Where Bihar, West Bengal, and Nepal meet

**Highlight:**
- Cultural fusion
- Multi-lingual experiences
- Cross-border trade heritage
- Unique festivals

---

## Content Writing Guidelines

### Destination Descriptions (50-80 words)
**Structure:**
1. What it is (1 sentence)
2. What makes it special (1-2 sentences)
3. What visitors experience (1-2 sentences)

**Good Example:**
"Sprawling tea plantations with lush green landscapes offering scenic beauty and insight into local tea production. Experience the serene environment and learn about traditional tea cultivation methods practiced by generations of local families."

**Bad Example (Too promotional):**
"Amazing tea gardens that will blow your mind! Best place to visit in Kishanganj. Don't miss this incredible opportunity! Book now for special discounts!"

### Highlight Points (4-6 items)
**Format:** Noun + Descriptor
**Examples:**
- ✅ "Tea Plantation Tours"
- ✅ "Photography Opportunities"
- ✅ "Traditional Architecture"
- ❌ "Amazing Views!" (too promotional)
- ❌ "Best Tea Ever!" (subjective)

### Travel Route Descriptions
**Format:** "Via [Road/Highway] → [Landmark/Area]"
**Examples:**
- ✅ "Via NH27 → Bahadurganj Road"
- ✅ "Local bus from Kishanganj Bus Stand"
- ✅ "Pedestrian path through villages"

---

## Image Guidelines

### Specifications:
- **Format:** JPEG or WebP
- **Dimensions:** Minimum 1200x800px (3:2 ratio)
- **Size:** Under 500KB (optimized)
- **Quality:** High resolution, good lighting

### Content Requirements:
- ✅ Show actual location
- ✅ Recent photos (within 2 years)
- ✅ Clear, professional quality
- ✅ Respectful of religious/cultural sites
- ✅ No people's faces (privacy) or get permissions
- ❌ No watermarks except govt logo
- ❌ No heavily edited/filtered images
- ❌ No misleading representations

### Accessibility:
- Always provide descriptive alt text
- Example: "Lush green tea gardens on rolling hills with workers plucking tea leaves"

---

## Icon Reference

### Category Icons (React Icons):
```javascript
import {
  FaTree,         // Nature & Eco-Tourism
  FaPaw,          // Wildlife & Forest
  FaPrayingHands, // Religious & Spiritual
  FaLandmark,     // Culture & Heritage
  FaTractor,      // Rural & Community
  FaHiking        // Adventure & Outdoor
} from 'react-icons/fa';
```

### Meta Information Icons:
```javascript
import {
  FaMapMarkerAlt,  // Location/Distance
  FaCalendarAlt,   // Best Time/Season
  FaClock,         // Duration/Time
  FaInfoCircle,    // Information
  FaExclamationTriangle, // Warning/Alert
  FaWheelchair,    // Accessibility
  FaPhone,         // Contact
  FaRoute          // Directions
} from 'react-icons/fa';
```

---

## Quality Assurance Checklist

Before publishing new destination:

### Content Review:
- [ ] No promotional language
- [ ] No pricing information
- [ ] Factually accurate
- [ ] Grammar and spelling checked
- [ ] Respectful of local culture
- [ ] Safety information included if needed

### Technical Review:
- [ ] Image loads correctly
- [ ] Coordinates accurate (verify on map)
- [ ] All required fields present
- [ ] Travel modes realistic
- [ ] Category appropriate

### Accessibility Review:
- [ ] Image alt text descriptive
- [ ] Wheelchair access noted if available
- [ ] Parking information included
- [ ] Public transport options listed

### Legal/Compliance:
- [ ] Copyright cleared for image
- [ ] Permit requirements stated
- [ ] Photography rules mentioned
- [ ] No misleading information

---

## Common Mistakes to Avoid

### ❌ Don't:
1. Copy from commercial travel websites
2. Use superlatives ("best", "amazing", "incredible")
3. Include hotel/restaurant promotions
4. Add fake or stock photos
5. Exaggerate distances or times
6. Promise specific experiences
7. Include tour operator contacts
8. Add booking links

### ✅ Do:
1. Write in neutral, informative tone
2. Provide accurate, verifiable information
3. Include government resources
4. Mention accessibility features
5. State permit requirements clearly
6. Add safety advisories
7. Update seasonal information
8. Credit photo sources

---

## Example: Complete Destination Entry

```javascript
{
  id: 6,
  title: "Kishanganj Tea Estate Heritage Trail",
  category: "Rural & Community Tourism",
  description: "A guided walking trail through historic tea estates established during the British era. Visitors can observe traditional tea processing methods, interact with tea workers' communities, and learn about the region's colonial agricultural heritage. The trail offers insights into sustainable tea cultivation and the socio-economic importance of tea industry in Kishanganj.",
  img: "/images/tea-estate-trail.jpg",
  distance: "8 km",
  duration: "20 minutes",
  coordinates: { lat: 26.1234, lng: 87.9567 },
  travelModes: {
    car: { 
      time: "20 min", 
      route: "Via NH27 → Tea Estate Road",
      cost: "Government bus or private vehicle"
    },
    bus: { 
      time: "30 min", 
      route: "Local bus service from district headquarters",
      cost: "Regular public transport fare"
    },
    bike: { 
      time: "25 min", 
      route: "Scenic route through village roads",
      cost: "Personal vehicle"
    }
  },
  highlights: [
    "Traditional Tea Processing Demonstration",
    "Colonial Era Estate Buildings",
    "Workers' Community Interaction",
    "Sustainable Agriculture Practices",
    "Photography Opportunities",
    "Local Cuisine Tasting"
  ],
  bestTime: "October to March (pleasant weather for walks)",
  facilities: [
    "Guided Tours",
    "Parking",
    "Restrooms",
    "Drinking Water",
    "Shaded Rest Areas",
    "Basic First Aid"
  ],
  permits: "No special permit required. Prior registration recommended.",
  accessibility: "Partial wheelchair access on main paths",
  safetyNotes: "Wear comfortable walking shoes. Stay on marked trails."
}
```

---

## Contact for Content Queries

### Department of Tourism, Kishanganj
- **Email:** tourism-kishanganj@bihar.gov.in
- **Phone:** 06456-222100
- **Tourist Helpline:** 1363

### Web Administration
- **Technical Issues:** webadmin-kishanganj@nic.in
- **Content Updates:** content-approval@kishanganj.gov.in

---

**Document Version:** 1.0  
**Last Updated:** February 7, 2026  
**Next Review:** August 2026
