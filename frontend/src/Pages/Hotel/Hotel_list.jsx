import React from 'react';
import './Hotel_list.css';
import Cards from '../../Components/Cards/Cards';
import HOTELS_DATABASE from './Hotel';

const HotelList = () => {
  return (
    <div className="hotel-list-page">
      {/* Left section for property listing */}
      <div className="property-list">
        <Cards data={HOTELS_DATABASE} />
      </div>

      {/* Right section for map view */}
      <div className="map-view">
        Map Placeholder
      </div>
    </div>
  );
};

export default HotelList;