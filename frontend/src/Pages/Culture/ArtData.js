import madhubani from "../../assets/artpage/madhubani2.png";
import dokra from "../../assets/artpage/dokra.png";
import jute from "../../assets/artpage/jute.png";
import sewing from "../../assets/artpage/sewing.png";
// removed unused artpage helper imports

const artData = [
  {
    id: 1,
    title: "Madhubani Painting",
    image: madhubani,
    definition: "Madhubani painting (Mithila art) is a traditional Indian folk painting style known for bold lines, geometric patterns, and mythological or nature-based themes.",
    short:
      "Madhubani painting is visible across Kishanganj through murals, workshops, and decorative items — a local adaptation of the Mithila tradition.",
    themes: [
      "Hindu mythological scenes",
      "Nature (peacocks, fish, trees)",
      "Geometric borders and line detailing"
    ],
    status: "Adopted locally for public art and workshops; not a historic Mithila production hub",
    full:
      "Madhubani painting originated in the Mithila region (Madhubani, Darbhanga). Kishanganj is not historically part of that heartland, yet the district has increasingly embraced Madhubani style. Local presence includes municipal murals and public beautification projects, school and cultural workshops, and artists producing Madhubani-inspired home décor (wall frames, painted pots, festival decorations). Themes used locally commonly include Hindu mythological scenes, peacocks, fish, trees, and geometric borders with detailed line work. Production in Kishanganj is smaller-scale and largely community-driven rather than industrial, representing creative adaptation and cultural appreciation rather than historical origin."
    ,
    whereToSee: "Municipal murals, local craft shops, school exhibitions, and cultural festival stalls in Kishanganj town and Sirsi.",
    workshops: "Occasional community workshops organised by cultural groups and schools that introduce basic Madhubani techniques and motifs.",
    marketAccess: "Local craft fairs, municipal events, and occasional online listings via regional craft marketplaces.",
    howToBuy: "Contact local craft sellers or visit craft stalls during festivals; commissioned murals and custom decorative pieces are available from local artists.",
    preservation: "Community workshops and municipal art projects help preserve and adapt Madhubani motifs for local identity and youth engagement."
  },
  {
    id: 2,
    title: "Dokra Metal Craft",
    image: dokra,
    definition: "Dokra is a traditional metal casting technique using the lost-wax method to make figurines and decorative metalware.",
    short:
      "Dokra-style metal items are available in local markets but not produced as a historic local craft in Kishanganj.",
    materials: ["Brass", "Bronze-like alloys"],
    status: "Available via traders and neighboring-state supply; not historically produced in Kishanganj",
    full:
      "Dokra is a lost-wax metal casting tradition found in Jharkhand, West Bengal, Odisha and other regions. Kishanganj does not have a documented Dokra production cluster; instead, metal handicrafts sold locally are often sourced from neighbouring districts or states. Small decorative metal items may be sold in handicraft shops, but large-scale traditional Dokra production is absent. If listed under Kishanganj crafts, it should be clarified as 'available in local markets but not originally produced in the district' to maintain accuracy."
    ,
    whereToSee: "Handicraft stalls, regional markets and some local gift shops that stock metal decorative items.",
    workshops: "No large-scale Dokra workshops in Kishanganj; interested buyers are usually directed to neighbouring-state craft centres.",
    marketAccess: "Sourced via traders; available at regional craft fairs and through inter-district trade channels.",
    howToBuy: "Buy from local handicraft vendors or request items via regional craft traders; custom Dokra pieces usually require contacting specialist producers outside the district.",
    preservation: "As Dokra is not locally produced, preservation efforts in Kishanganj focus on documenting suppliers and promoting authentic sourcing practices."
  },
  {
    id: 3,
    title: "Jute and Eco Crafts",
    image: jute,
    definition: "Jute and eco crafts are handmade products using natural fibers (jute), bamboo and recycled materials, focused on sustainable, biodegradable goods.",
    short:
      "Jute and eco-friendly crafts are among the most visible community-driven crafts in Kishanganj, often produced by SHGs and cottage artisans.",
    materials: ["Jute", "Bamboo", "Recycled paper", "Cloth scraps"],
    socialImpact:
      "Many products are created by women’s self-help groups (SHGs) and generate supplementary income for rural households.",
    full:
      "Kishanganj’s jute and eco-craft activity is small-scale but creative. Artisans use jute, bamboo, recycled paper, and cloth scraps to produce shopping bags, wall hangings, mats, baskets, and eco-gift items. These crafts are commonly produced by women and SHGs, contributing to household incomes and supporting sustainable/biodegradable product trends. Unlike large jute hubs elsewhere, Kishanganj’s practice is community-driven and focused on local markets and crafts fairs."
    ,
    whereToSee: "Village markets, SHG-run stalls, local handicraft fairs and small-scale exhibitions in the district.",
    workshops: "SHGs and NGOs sometimes run skill-building workshops focused on jute product design and small-business development.",
    marketAccess: "Local markets, cooperative stalls, and occasional tie-ups with regional handicraft aggregators; potential for e-commerce channels.",
    howToBuy: "Purchase directly at local markets or through SHG stalls during fairs; some groups accept orders for customized items.",
    preservation: "SHG programmes and microenterprise initiatives support knowledge transfer and keep jute craft practices viable for household incomes."
  },
  {
    id: 4,
    title: "Hand Sewing & Embroidery",
    image: sewing,
    definition: "Kheta embroidery is a regional hand-stitched textile tradition featuring geometric motifs and repetitive linear designs used on quilts and garments.",
    short:
      "Kheta and related hand-embroidery traditions continue to be practiced in Kishanganj, supporting women artisans and producing textile goods for local use and sale.",
    features: ["Geometric stitch patterns", "Repetitive linear designs", "Colorful thread on cotton"],
    originNote:
      "Kheta embroidery is a locally significant craft practiced particularly among Sher Shahabadi communities and has roots in the region's social history.",
    full:
      "Kheta embroidery is a culturally significant craft of Kishanganj with a long history. Practiced especially by women in Sher Shahabadi communities, it involves geometric stitching and repetitive linear motifs used on quilts, sarees, cushion covers, stoles, and decorative textiles. The craft supports women’s self-employment and preserves intergenerational stitching skills. Products are sold locally and through small craft networks, contributing to household incomes and cultural continuity."
    ,
    whereToSee: "Local textile sellers, women’s cooperative shops, seasonal fairs and household craft exhibitions.",
    workshops: "Community groups and local artisans sometimes teach Kheta stitches in short workshops aimed at younger women and SHG members.",
    marketAccess: "Sold locally, through SHG networks, and via small regional orders to neighbouring towns; opportunities exist to package products for tourism markets.",
    howToBuy: "Contact women’s cooperatives or visit local fairs; many pieces are custom-made by family workshops.",
    preservation: "Intergenerational transmission within families and SHG support are key to keeping Kheta embroidery alive; small grants or craft training programmes strengthen continuity."
  }
];
export default artData;
