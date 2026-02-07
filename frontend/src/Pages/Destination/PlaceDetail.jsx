import React from 'react';
import { useParams } from 'react-router-dom';
import destinationData from './Destination.js';
import './PlaceDetail.style.css';

function PlaceDetail() {
  const { placeName } = useParams();
  
  // Find the place in destination data
  const place = destinationData.find(item => 
    item.title.replace(/\s+/g, '') === placeName
  );

  if (!place) {
    return (
      <div className="place-detail-container">
        <div className="place-not-found">
          <h1>Place Not Found</h1>
          <p>The place you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="place-detail-container">
      <div className="place-hero">
        <img src={place.img} alt={place.title} className="place-hero-image" />
        <div className="place-hero-content">
          <div className="place-category">{place.category}</div>
          <h1>{place.title}</h1>
          <div className="place-meta">
            <span className="distance">{place.distance}</span>
            <span className="duration">{place.duration}</span>
          </div>
        </div>
      </div>

      <div className="place-content">
        <div className="place-description">
          <h2>About {place.title}</h2>
          <p>{place.description}</p>
        </div>

        {place.subtitle && place.subtitle.length > 0 && (
          <div className="place-gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {place.subtitle.map((item, index) => (
                <div key={index} className="gallery-item">
                  <img src={item.img} alt={item.desc} />
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="place-info">
          <div className="info-card">
            <h3>How to Reach</h3>
            <p>Distance: {place.distance}</p>
            <p>Travel Time: {place.duration}</p>
          </div>
          
          <div className="info-card">
            <h3>Category</h3>
            <p>{place.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetail;