import React from "react";
import Footer from "../../Components/Footer/Footer";
import placesData from "./Accomodation.js";
import "./Accomodation.style.css";
import Bihar from "../Boxmain2/Bihar";
import { Link } from 'react-router-dom';



function Accomodation() {
  return (
    <>
      <div className="sestion">
        <img src="src/assets/explorebg.jpg" alt="background" />
        <hr />
      </div>

      <div className="sestion2">
        {placesData.map((place) => (
          <div className="boxmain" key={place.id}>
            <img src={place.img} alt={place.title} />
            <h2>{place.title}</h2>
            <p>{place.desc}</p>
            <Link to="/Bihar" style={{textDecoration: "none"}}>
            <button>Read More</button>
            </Link>
           
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Accomodation;

