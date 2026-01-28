import React, { useState } from "react";
import "./Hotel_Homepage.css";
import HOTELS_DATABASE from "./Hotel";
import { FaSearch } from "react-icons/fa";


export default function Hotel_Homepage() {
  const [search, setSearch] = useState("");

  const filteredHotels = HOTELS_DATABASE.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Find your next stay</h1>
        <p>Search deals on hotels, homes, and much more...</p>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Where are you going?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input type="date" />
          <input type="date" />

         <div className="guest-box">
  <input type="number" placeholder="Adults" min="1" />
  <input type="number" placeholder="Rooms" min="1" />
</div>


      <button className="Search_btn">
  <FaSearch/>
  Search
</button>

        </div>
      </div>

      {/* HOTEL LIST */}
      <div className="Hotel_page">
        {filteredHotels.map((item) => (
          <div key={item.id} className="hotel-card">
            <img src={item.image} alt={item.name} />
            <div className="hotel-info">
              <h2>{item.name}</h2>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
