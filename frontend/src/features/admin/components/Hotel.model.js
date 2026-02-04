// Frontend Hotel Model (for reference)
// This mirrors the backend hotel schema

export const HotelModel = {
  name: String,
  description: String,
  location: String,
  price: Number,
  rating: Number, // 1-5
  facilities: Array,
  image: String,
  createdAt: Date,
  updatedAt: Date
};

// Validation helper
export const validateHotel = (hotel) => {
  const errors = [];

  if (!hotel.name || hotel.name.trim().length === 0) {
    errors.push('Hotel name is required');
  }

  if (!hotel.description || hotel.description.trim().length === 0) {
    errors.push('Description is required');
  }

  if (!hotel.location || hotel.location.trim().length === 0) {
    errors.push('Location is required');
  }

  if (!hotel.price || hotel.price <= 0) {
    errors.push('Valid price is required');
  }

  if (!hotel.rating || hotel.rating < 1 || hotel.rating > 5) {
    errors.push('Rating must be between 1 and 5');
  }

  if (!hotel.facilities || !Array.isArray(hotel.facilities) || hotel.facilities.length === 0) {
    errors.push('At least one facility is required');
  }

  if (!hotel.image || hotel.image.trim().length === 0) {
    errors.push('Image URL is required');
  }

  return errors;
};

export default HotelModel;
