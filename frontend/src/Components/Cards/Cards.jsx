import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="no-data">
        <p>No items to display</p>
      </div>
    );
  }

  return (
    <div className="card-container">
      {data.map((item, index) => {
        const CardContent = (
          <div className="card">
            <img src={item.image} alt={item.title || item.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.title || item.name}</h3>
              <p className="card-description">{item.description || item.type}</p>
              
              {/* Show rating if available (for hotels) */}
              {item.rating && (
                <div className="card-rating">
                  <span className="rating-score">
                    {item.rating > 5 ? `Rating: ${Math.round(item.rating)}/10` : `⭐ ${item.rating}`}
                  </span>
                </div>
              )}
              
              {/* Show location if available */}
              {item.location && <p className="card-location">📍 {item.location}</p>}
              
              {/* Show distance if available */}
              {item.distance && <p className="card-distance">{item.distance}</p>}
              
              {/* Show price if available */}
              {item.price && (
                <p className="card-price">₹{item.price} <span className="price-period">per night</span></p>
              )}
              
              {/* Show amenities if available */}
              {item.amenities && item.amenities.length > 0 && (
                <div className="card-amenities">
                  {item.amenities.slice(0, 2).map((amenity, i) => (
                    <span key={i} className="amenity-tag">{amenity}</span>
                  ))}
                  {item.amenities.length > 2 && <span className="more-amenities">+{item.amenities.length - 2} more</span>}
                </div>
              )}
            </div>
          </div>
        );

        // If link is provided, wrap in Link component
        return item.link ? (
          <Link key={item.id || index} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            {CardContent}
          </Link>
        ) : (
          <div key={item.id || index}>
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}

export default Cards;