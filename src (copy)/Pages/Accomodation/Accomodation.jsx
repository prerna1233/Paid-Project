import React from 'react';
import Cards from '../../Components/Cards/Cards';
import placesData from './Accomodation.js';
import Footer from '../../Components/Footer/Footer';
import './Accomodation.style.css';

function Accomodation() {
  // Transform the data to match Cards component format with place links
  const cardsData = placesData.map(place => ({
    id: place.id,
    title: place.title,
    name: place.title,
    image: place.img,
    description: `Explore ${place.title}`,
    type: place.title,
    link: `/place/${place.title.replace(/\s+/g, '')}`
  }));

  
  return (
    <>
      <div className="accommodation-header">
        <h1>Explore Places in Bihar</h1>
        <p>Discover the beautiful destinations in and around Bihar</p>
      </div>
      
      <Cards data={cardsData} />
      
      <Footer />
    </>
  );
}

export default Accomodation;