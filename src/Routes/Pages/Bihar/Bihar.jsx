import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Bihar.style.css';
import placesData from '../Accomodation/Accomodation.js';
export default function Bihar() {
  const { placeId } = useParams();
  
  // Find the specific place based on ID from URL
  const selectedPlace = placesData.find(place => place.id === parseInt(placeId));
  
  // If place not found, show error
  if (!selectedPlace) {
    return (
      <div className="container">
        <h1>Place Not Found</h1>
        <Link to="/Accomodation">
          <button>Back to Accommodation</button>
        </Link>
      </div>
    );
  }

  // Set up state for image gallery
  const [places, setPlaces] = useState(selectedPlace.subtitle);
  
  const handleSwitch = (clickedIndex) => {
    const newOrder = [...places];
    const [clickedPlace] = newOrder.splice(clickedIndex + 1, 1);
    newOrder.unshift(clickedPlace);
    setPlaces(newOrder);
  };
  
  const activeImage = places[0];
  const sliderImages = places.slice(1);

  return (
    <div className="container">
      <Link to="/Accomodation" className="back-button">
        ← Back to Places
      </Link>
      
      {/* Image gallery section */}
      <h3>Explore {selectedPlace.title}</h3>
      <div className="main-card">
        <div className="card-image">
          <img src={activeImage.img} alt={activeImage.desc} />
        </div>
        <div className="card-content">
          <h2>{activeImage.desc}</h2>
          <p>Discover the beauty and culture of {selectedPlace.title}</p>
        </div>
      </div>

      <hr />

      <h3>More Views of {selectedPlace.title}</h3>
      <div className="thumbnail-grid">
        {sliderImages.map((image, index) => (
          <div 
            key={index} 
            className="thumb-item" 
            onClick={() => handleSwitch(index)}
          >
            <img src={image.img} alt={image.desc} />
            <div className="thumb-info">
              <h4>{image.desc}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

