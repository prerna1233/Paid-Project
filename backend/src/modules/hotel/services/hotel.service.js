/**
 * Hotel Service
 * Business logic for hotel operations
 * Handles both public and admin hotel operations
 */

import Hotel from "../models/hotel.model.js";

export class HotelService {
  /**
   * Get all hotels (public)
   */
  async getAllHotels() {
    return await Hotel.find().sort({ createdAt: -1 });
  }

  /**
   * Get hotel by ID (public)
   */
  async getHotelById(id) {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      throw new Error("Hotel not found");
    }
    return hotel;
  }

  /**
   * Create new hotel (admin)
   */
  async createHotel(hotelData) {
    const hotel = await Hotel.create({
      name: hotelData.name,
      location: hotelData.location,
      description: hotelData.description,
      price: Number(hotelData.price),
      rating: Number(hotelData.rating),
      facilities: hotelData.facilities || "",
      image: hotelData.image || ""
    });
    return hotel;
  }

  /**
   * Update hotel (admin)
   */
  async updateHotel(id, hotelData) {
    const hotel = await Hotel.findByIdAndUpdate(
      id,
      hotelData,
      { new: true, runValidators: true }
    );
    
    if (!hotel) {
      throw new Error("Hotel not found");
    }
    
    return hotel;
  }

  /**
   * Delete hotel (admin)
   */
  async deleteHotel(id) {
    const hotel = await Hotel.findByIdAndDelete(id);
    
    if (!hotel) {
      throw new Error("Hotel not found");
    }
    
    return { message: "Hotel deleted successfully" };
  }
}

export default new HotelService();
