import React from "react";
import "./Accomodation.style.css";
import Cards from "../../Components/Cards/Cards.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Accomodation() {
  return (
    <>
      <div>
        <div className="accomodation-page-top-section">
          <div className="accomodation-page-top-section-content">
            <h2>Kishanganj hotels</h2>
            <input className="location" id="location" placeholder="Enter your location"></input>
            <div className="date" >
              <input placeholder="Start date"></input>
              <input placeholder="End date"></input>
            </div>
            <input className="guests" placeholder="No. of guests"></input>
            box white
            Kishanganj hotels heading1
            location input
            date to and fro calender input
            guests input
            search btn
          </div>
        </div>
        {/* <p className="texxxxd">Hotels</p> */}
      </div>
      <div className="card-section">
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Accomodation;