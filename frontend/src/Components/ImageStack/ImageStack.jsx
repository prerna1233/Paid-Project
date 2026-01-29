// import React from "react";
// import "./ImageStack.style.css"
// import "animate.css";

// const ImageStack = () => {
//     return (<div className="image-stack">
//         <img src="src/assets/1pic.png" alt="img1" className="img img-1 animate__animated animate__fadeInTopLeft animate__delay-0s" />
//         <img src="src/assets/2pic.png" alt="img2" className="img img-2 animate__animated animate__fadeInTopRight animate__delay-2s" />
//         <img src="src/assets/3pic.png" alt="img3" className="img img-3 animate__animated animate__fadeInBottomRight animate__delay-3s" />
//     </div>
//     );
// }; export default ImageStack;

// import React, { useEffect, useState } from "react";
// import "./ImageStack.style.css";
// import "animate.css";

// const ImageStack = () => {
//   const [showPositions, setShowPositions] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPositions(true);
//     }, 3000); // 👈 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="image-stack">
//       <img
//         src="src/assets/1pic.png"
//         alt="img1"
//         className={`img img-1 animate__animated animate__fadeInTopLeft ${
//           showPositions ? "image1" : ""
//         }`}
//       />

//       <img
//         src="src/assets/2pic.png"
//         alt="img2"
//         className={`img img-2 animate__animated animate__fadeInTopRight animate__delay-2s ${
//           showPositions ? "image2" : ""
//         }`}
//       />

//       <img
//         src="src/assets/3pic.png"
//         alt="img3"
//         className={`img img-3 animate__animated animate__fadeInBottomRight animate__delay-3s ${
//           showPositions ? "image3" : ""
//         }`}
//       />
//     </div>
//   );
// };

// export default ImageStack;


import React, { useEffect, useState } from "react";
import "./ImageStack.style.css";
import "animate.css";

const ImageStack = () => {
  const [showPositions, setShowPositions] = useState(false);
  const [removeAnim, setRemoveAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPositions(true);
      setRemoveAnim(true); // 👈 animation hata do
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="image-stack">
      <img
        src="src/assets/1pic.png"
        className={`img ${!removeAnim ? "animate__animated animate__fadeInTopLeft" : ""} ${showPositions ? "image1" : ""}`}
      />

      <img
        src="src/assets/2pic.png"
        className={`img ${!removeAnim ? "animate__animated animate__fadeInTopRight animate__delay-1s" : ""} ${showPositions ? "image2" : ""}`}
      />

      <img
        src="src/assets/3pic.png"
        className={`img ${!removeAnim ? "animate__animated animate__fadeInBottomRight animate__delay-2s" : ""} ${showPositions ? "image3" : ""}`}
      />
    </div>
  );
};

export default ImageStack;
