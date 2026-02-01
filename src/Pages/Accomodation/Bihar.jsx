import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Bihar.style.css';
import placesData from './Accomodation.js';
import Footer from '../../Components/Footer/Footer';

export default function Bihar() {
  const { placeName } = useParams(); // Get place name from URL (everything after Bihar_)
  
  // Debug logging
  console.log('Bihar component - URL placeName:', placeName);
  console.log('Bihar component - placesData:', placesData);
  
  // Find the place based on URL parameter
  const placeKey = placeName?.toLowerCase().replace(/\s+/g, '');
  
  console.log('Bihar component - placeKey:', placeKey);
  
  const selectedPlace = placesData.find(place => 
    place.title.toLowerCase().replace(/\s+/g, '') === placeKey
  );
  
  console.log('Bihar component - selectedPlace:', selectedPlace);

  // If place not found, show error
  if (!selectedPlace) {
    return (
      <div className="container">
        <Link to="/Accomodation" className="back-button">
          ← Back to Places
        </Link>
        <h1>Place Not Found</h1>
        <p>Sorry, we couldn't find information about "{placeName}"</p>
      </div>
    );
  }

  // Set up state for the interactive gallery using subtitle images
  const [places, setPlaces] = useState(selectedPlace.subtitle || []);
  
  const handleSwitch = (clickedIndex) => {
    const newOrder = [...places];
    const [clickedItem] = newOrder.splice(clickedIndex, 1);
    newOrder.unshift(clickedItem);
    setPlaces(newOrder);
  };

  // First item is the main display, rest go to thumbnails
  const activeImage = places[0];
  const thumbnailImages = places.slice(1);

  return (
    <>
      <div className="container">
        <Link to="/Accomodation" className="back-button">
          ← Back to Places
        </Link>
        
        <h1>Welcome to {selectedPlace.title}</h1>
        
        {/* Main Feature Card */}
        <div className="main-card">
          <div className="card-image">
            <img src={activeImage?.img || selectedPlace.img} alt={activeImage?.desc || selectedPlace.title} />
          </div>
          <div className="card-content">
            <h2>{activeImage?.desc || selectedPlace.title}</h2>
            <p>{selectedPlace.desc}</p>
            
            <div className="place-info">
              <h3>Explore {selectedPlace.title}</h3>
              <p>Click on the images below to see different attractions and places in {selectedPlace.title}.</p>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {thumbnailImages.length > 0 && (
          <div className="thumbnail-section">
            <h3>More places in {selectedPlace.title}</h3>
            <div className="thumbnail-grid">
              {thumbnailImages.map((place, index) => (
                <div 
                  key={index} 
                  className="thumbnail-item"
                  onClick={() => handleSwitch(index + 1)}
                >
                  <img src={place.img} alt={place.desc} />
                  <div className="thumbnail-overlay">
                    <p>{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
