import React, { useState, useEffect } from 'react';

export default function HotelForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    price: '',
    rating: '',
    facilities: '',
    image: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        description: initialData.description || '',
        location: initialData.location || '',
        price: initialData.price || '',
        rating: initialData.rating || '',
        facilities: Array.isArray(initialData.facilities) 
          ? initialData.facilities.join(', ') 
          : initialData.facilities || '',
        image: initialData.image || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate rating
    const rating = parseFloat(formData.rating);
    if (rating < 1 || rating > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }

    // Process data
    const processedData = {
      ...formData,
      price: parseFloat(formData.price),
      rating: rating,
      facilities: formData.facilities
    };

    onSubmit(processedData);
    
    // Reset form if not editing
    if (!initialData) {
      setFormData({
        name: '',
        description: '',
        location: '',
        price: '',
        rating: '',
        facilities: '',
        image: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hotel-form">
      <h3>{initialData ? 'Edit Hotel' : 'Add New Hotel'}</h3>
      
      <div className="form-group">
        <label htmlFor="name">Hotel Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter hotel name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Enter hotel description"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location *</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          placeholder="Enter location"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Price (₹/night) *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            placeholder="2500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating (1-5) *</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            min="1"
            max="5"
            step="0.1"
            placeholder="4.5"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="facilities">Facilities *</label>
        <input
          type="text"
          id="facilities"
          name="facilities"
          value={formData.facilities}
          onChange={handleChange}
          required
          placeholder="WiFi, Parking, Pool, Restaurant, Room Service"
        />
        <small>Enter facilities separated by commas</small>
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL *</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          placeholder="https://example.com/hotel-image.jpg"
        />
        {formData.image && (
          <div className="image-preview">
            <img src={formData.image} alt="Preview" onError={(e) => {
              e.target.style.display = 'none';
            }} />
          </div>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {initialData ? 'Update Hotel' : 'Add Hotel'}
        </button>
        {initialData && (
          <button type="button" onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
