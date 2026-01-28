import React from 'react';
import './Hotel_list.css';
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import HOTELS_DATABASE from './Hotel';

const HotelList = () => {
  return (
    <div className="hotel-list-page">
      {/* Left section for property listing */}
      <div className="property-list">
        {HOTELS_DATABASE.map((hotel) => (
          <PropertyCard
            key={hotel.id}
            name={hotel.name}
            rating={hotel.rating}
            distance={hotel.distance}
            price={hotel.price}
            imageUrl={hotel.image}
          />
        ))}
      </div>

      {/* Right section for map view */}
      <div className="map-view">
        Map Placeholder
      </div>
    </div>
  );
};

export default HotelList;