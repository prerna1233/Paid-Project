import React from "react";
import "./Accomodation.style.css";
import Cards from "../../Components/Cards/Cards.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Accomodation() {
  return (
    <>
    <div>
      <div className="accomodation-page-Hero-Section">
      </div>
      <p className="texxxxd">Hotels</p>
      <div>search bar</div>
      </div>
      <div className="card-section">
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Accomodation;