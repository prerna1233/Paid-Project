import React, { useState } from 'react';
import './Bihar.style.css';
// import Accomodation from '../Accomodation/Accomodation';

const data =[
{id:1,title:"fhjlkjhgfhj", location:"kishanganj",image:"https://www.kishanganj.net/images/k2.jpg", description:"ghjklrtyuioghjkl"},
{id:2, title:"fhjlkjhgfhj", location:"kishanganj",image:"https://www.shrineyatra.com/wp-content/uploads/2023/07/Places-to-Visit-in-Kishanganj.jpg", description:"ghjklrtyuioghjkl"},
{id:3, title:"fhjlkjhgfhj", location:"kishanganj",image:"https://tse1.mm.bing.net/th/id/OIP.UuUb9d7o2Xqzi12jPDSvOgHaCv?pid=Api", description:"ghjklrtyuioghjkl"},
{id:4, title:"fhjlkjhgfhj", location:"kishanganj",image:"https://images.herzindagi.info/image/2024/Jun/Kishanganj-Fort.jpg", description:"ghjklrtyuioghjkl"},
{id:5,title:"fhjlkjhgfhj", location:"kishanganj",image:"https://assets.thehansindia.com/h-upload/2023/06/18/1358952-kishanganj.jpg", description:"ghjklrtyuioghjkl"},
{id:6,title:"fhjlkjhgfhj", location:"Darjeeling",image:"https://assets.thehansindia.com/h-upload/2023/06/18/1358952-kishanganj.jpg", description:"ghjklrtyuioghjkl"},

]
export default function kishanganjProject() {
  const [places, setPlaces] = useState(data);
  const handleSwitch = (clickedIndex) => {
    const kneOrder = [...places];
    const [clickedPlace] = kneOrder.splice(clickedIndex + 1, 1);
    kneOrder.unshift(clickedPlace);
    setPlaces(kneOrder);
  };
  const activePlace = places[0];
  const sliderPlaces = places.slice(1);
  return (
    <div className="container">
      <h1>Welcome to Kishanganj</h1>
      <div className="main-card">
        <div className="card-image">
          <img src={activePlace.image} alt={activePlace.title} />
        </div>
        <div className="card-content">
          <h2>{activePlace.title}</h2>
          <p>{activePlace.description}</p>
          <span className="location"> Location: {activePlace.location}</span>
        </div>
      </div>

      <hr />

      <h3>Other Places In Kishanganj</h3>
      <div className="thumbnail-grid">
        {sliderPlaces.map((place, index) => (
          <div 
            key={place.id} 
            className="thumb-item" 
            onClick={() => handleSwitch(index)}
          >
            <img src={place.image} alt={place.title} />
            <div className="thumb-info">
              <h4>{place.title}</h4>
              <p>{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

