import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Bihar/style.css";

export default function Bihar() {
  return (
    <>
      <div className="page">

        <h1 className="title">Welcome to Bihar</h1>

        {/* 🔹 Top Single Image Card */}
        <div className="main-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Mahabodhi_Temple%2C_Bodh_Gaya.jpg"
            alt="Mahabodhi Temple"
          />

          <div className="main-content">
            <h2>Mahabodhi Temple Tour</h2>
            <p>
              Mahabodhi Temple is a UNESCO World Heritage Site located in Bodh
              Gaya, Bihar. It is one of the most sacred places for Buddhists
              across the world.
            </p>

            <span className="location">📍 Bodh Gaya, Bihar</span>
          </div>
        </div>

        {/* 🔹 Other Places Section */}
        <h2 className="subtitle">Other Places in Bihar</h2>

        <div className="card-row">
          <div className="small-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Nalanda_University_ruins.jpg" />
            <h4>Nalanda University</h4>
            <p>Nalanda</p>
          </div>

          <div className="small-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Rajgir_Hills.jpg" />
            <h4>Rajgir Hills</h4>
            <p>Rajgir</p>
          </div>

          <div className="small-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Vikramshila_Ruins.jpg" />
            <h4>Vikramshila</h4>
            <p>Bhagalpur</p>
          </div>

          <div className="small-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Patna_Sahib_Gurudwara.jpg" />
            <h4>Takht Patna Sahib</h4>
            <p>Patna</p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
