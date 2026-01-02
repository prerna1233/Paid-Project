import "./Banner.css";

const images = [
  "https://i.pinimg.com/564x/57/8d/f4/578df40125d23f0c19d7d3f619a2ee47.jpg",
  "https://i.pinimg.com/474x/8e/e6/c8/8ee6c8287f2ad5b16ddd5fff16155cd1.jpg",
  "https://i.pinimg.com/564x/27/5a/fd/275afdd80e4b052a378bcb439cc29532.jpg",
  "https://i.pinimg.com/236x/c3/fa/df/c3fadf6c121bffc37d6c1297bc393d0a.jpg",
  "https://i.pinimg.com/564x/f6/0d/f4/f60df417aa182ae9b62258cf52f883e2.jpg",
  "https://i.pinimg.com/236x/2f/b1/a9/2fb1a9b2926710703ac3b463f38b3b0a.jpg",
  "https://i.pinimg.com/236x/5d/58/71/5d5871a29b1fd35ee2f8583490509217.jpg",
  "https://i.pinimg.com/236x/18/19/c2/1819c2563999696f4e9f89da7bc9e837.jpg",
  "https://i.pinimg.com/236x/5b/1f/b2/5b1fb25ec1ea19be2e5352ad9a99466d.jpg",
  "https://i.pinimg.com/564x/3d/0a/45/3d0a458961bd44c6b8df62a603fbee2b.jpg",
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
