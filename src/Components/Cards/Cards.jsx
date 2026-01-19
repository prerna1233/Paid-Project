import React from "react";
import cardData from "./CardData";
import "./Cards.css";

function Cards() {
  return (
    <div className="card-container">
      {cardData.map((data, index) => (
        <div className="card" key={index}>
          <img src={data.image} alt={data.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{data.title}</h3>
            <p className="card-description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;