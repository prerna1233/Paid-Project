import "./Banner.css";

const images = [
  "src/assets/1pic.png",
  "src/assets/2pic.png",
  "src/assets/3pic.png",
  "src/assets/4pic.webp",
  "src/assets/5pic.jpg",
  "src/assets/6pic.png",
  "src/assets/7pic.webp",
  "src/assets/8pic.webp",
  "src/assets/9pic.jpg",
  "src/assets/10pic.webp",
];

const Banner = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": images.length }}>
        {images.map((img, index) => (
          <div
            className="item" key={index} style={{ "--position": index + 1 }}>
            <img src={img} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
