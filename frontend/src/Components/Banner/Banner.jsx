// import React from "react";
// import "./Banner.css";

// const images = [
//   "src/assets/1pic.png",
//   "src/assets/2pic.png",
//   "src/assets/3pic.png",
//   "src/assets/4pic.webp",
//   "src/assets/5pic.jpg",
//   "src/assets/6pic.png",
//   "src/assets/7pic.webp",
//   "src/assets/8pic.webp",
//   "src/assets/9pic.jpg",
//   "src/assets/10pic.webp",
// ];

// const Banner = () => {
//   return (
//     <div className="banner">
//       <div className="slider" style={{ "--quantity": images.length }}>
//         {images.map((img, index) => (
//           <div
//             className="item" key={index} style={{ "--position": index + 1 }}>
//             <img src={img} alt={`slide-${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React, { useEffect, useState } from "react";
import "./Banner.css";

import img1 from "../../assets/1pic.png";
import img2 from "../../assets/2pic.png";
import img3 from "../../assets/3pic.png";
import img4 from "../../assets/4pic.webp";
import img5 from "../../assets/5pic.jpg";
import img6 from "../../assets/6pic.png";

const images = [
  { src: img1, title: "Kishanganj" },
  { src: img2, title: "Kishanganj" },
  { src: img3, title: "Kishanganj" },
  { src: img4, title: "Kishanganj" },
  { src: img5, title: "Kishanganj" },
  { src: img6, title: "Kishanganj" },
];
export default function Banner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 const getClassName = (index) => {
  const total = images.length;
  // This math ensures the 'left' and 'right' wrap around 360 degrees
  let dist = index - active;
  
  if (dist > total / 2) dist -= total;
  if (dist < -total / 2) dist += total;

  if (dist === 0) return "card active";
  if (dist === 1) return "card right";
  if (dist === -1) return "card left";
  if (dist === 2) return "card far-right";
  if (dist === -2) return "card far-left";
  return "card hidden";
};
  return (
    <div className="banner">
      <h2 className="banner-title" style={{color: 'white', marginBottom: '40px', fontSize: '36px'}}>
       <b> Most Popular Destinations </b>
      </h2>
      <div className="coverflow">
        {images.map((item, index) => (
          <div key={index} className={getClassName(index)}>
            <img src={item.src} alt={item.title} />
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
