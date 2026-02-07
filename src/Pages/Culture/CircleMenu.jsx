import { useState } from "react";
import "./CircleMenu.css";
import traditionalDress from "../../assets/aloo_bhujiya.png";
import rasgulla from "../../assets/rasgulla.png";
import saree from "../../assets/dal_puri.png";

export default function CircleMenu() {
  const [active, setActive] = useState(null);

  return (
    <div className="circle-wrapper">
      <svg viewBox="0 0 200 200" className="circle-svg">

        {/* PART 1 */}
        <g
          className={`part ${active && active !== 1 ? "fade" : ""}`}
          onMouseEnter={() => setActive(1)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M100 100 L100 0 A100 100 0 0 1 186.6 150 Z"
            fill="url(#img1)"
          />
        </g>

        {/* PART 2 */}
        <g
          className={`part ${active && active !== 2 ? "fade" : ""}`}
          onMouseEnter={() => setActive(2)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M100 100 L186.6 150 A100 100 0 0 1 13.4 150 Z"
            fill="url(#img2)"
          />
        </g>

        {/* PART 3 */}
        <g
          className={`part ${active && active !== 3 ? "fade" : ""}`}
          onMouseEnter={() => setActive(3)}
          onMouseLeave={() => setActive(null)}
        >
          <path
            d="M100 100 L13.4 150 A100 100 0 0 1 100 0 Z"
            fill="url(#img3)"
          />
        </g>

        {/* IMAGES */}
        <defs>
  <pattern id="img1" patternUnits="userSpaceOnUse" width="200" height="200">
    <image
      href={rasgulla}
      x="0"
      y="0"
      width="200"
      height="200"
      preserveAspectRatio="xMidYMid slice"
    />
  </pattern>

  <pattern id="img2" patternUnits="userSpaceOnUse" width="200" height="200">
    <image
      href={traditionalDress}
      x="0"
      y="0"
      width="200"
      height="200"
      preserveAspectRatio="xMidYMid slice"
    />
  </pattern>

  <pattern id="img3" patternUnits="userSpaceOnUse" width="200" height="200">
    <image
      href={saree}
      x="0"
      y="0"
      width="200"
      height="200"
      preserveAspectRatio="xMidYMid slice"
    />
  </pattern>
</defs>


      </svg>
    </div>
  );
}
