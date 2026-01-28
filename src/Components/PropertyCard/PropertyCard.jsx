import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ name, rating, distance, price, imageUrl }) => {
  return (
    <div className="property-card">
      <img src={imageUrl} alt={name} className="property-image" />
      <div className="property-details">
        <h3 className="property-name">{name}</h3>
        <p className="property-rating">Rating: {rating}</p>
        <p className="property-distance">Distance: {distance} km</p>
        <p className="property-price">Price: ₹{price}</p>
        <button className="view-deal-button">View Deal</button>
      </div>
    </div>
  );
};

export default PropertyCard;