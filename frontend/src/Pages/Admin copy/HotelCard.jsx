import React, { useState } from 'react';
import { FaStar, FaEdit, FaTrash, FaMapMarkerAlt, FaDollarSign, FaChevronDown, FaChevronUp, FaConciergeBell } from 'react-icons/fa';

export default function HotelCard({ hotel, onEdit, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half" />);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={stars.length} className="star empty" />);
    }
    return stars;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const hasValidImage = hotel.image && 
                        typeof hotel.image === 'string' && 
                        hotel.image.trim().length > 0;

  return (
    <div className="hotel-card-modern">
      {/* Hotel Card Header */}
      <div className="hotel-card-top">
        {hasValidImage && (
          <div className="hotel-thumbnail">
            <img 
              src={hotel.image} 
              alt={hotel.name}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="no-image">No Image</div>';
              }}
            />
          </div>
        )}
        
        <div className="hotel-card-info">
          <h3 className="hotel-name-modern">{hotel.name}</h3>
          <p className="hotel-location-modern">
            <FaMapMarkerAlt /> {hotel.location}
          </p>
          <div className="hotel-rating-modern">
            {renderStars(hotel.rating)}
            <span className="rating-text">{hotel.rating.toFixed(1)}</span>
          </div>
          <div className="hotel-price-modern">
            <FaDollarSign />
            <span>₹{hotel.price.toLocaleString()}</span>
            <span className="price-period">/night</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="hotel-card-actions">
        <button 
          onClick={toggleExpand} 
          className="btn-view-details"
        >
          {isExpanded ? (
            <>
              <FaChevronUp /> Hide Details
            </>
          ) : (
            <>
              <FaChevronDown /> View Details
            </>
          )}
        </button>
        <button onClick={onEdit} className="btn-edit-modern">
          <FaEdit /> Edit
        </button>
        <button onClick={onDelete} className="btn-delete-modern">
          <FaTrash /> Delete
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="hotel-details-expanded">
          <div className="detail-row">
            <strong>Description:</strong>
            <p>{hotel.description}</p>
          </div>

          <div className="detail-row">
            <strong><FaConciergeBell /> Facilities:</strong>
            <div className="facilities-list-modern">
              {hotel.facilities && hotel.facilities.split(',').map((facility, index) => (
                <span key={index} className="facility-badge">{facility.trim()}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

