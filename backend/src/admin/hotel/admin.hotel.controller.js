/**
 * Admin Hotel Controller
 * Admin operations for managing all hotels
 */

import hotelService from "../../hotel/hotel.service.js";

/**
 * Get all hotels for admin (admin only)
 * GET /admin/hotels
 */
export const getHotelsAdmin = async (req, res, next) => {
  try {
    const hotels = await hotelService.getAllHotels();
    res.json(hotels);
  } catch (error) {
    next(error);
  }
};

/**
 * Create hotel (admin only)
 * POST /admin/hotels
 */
export const createHotel = async (req, res, next) => {
  try {
    const hotel = await hotelService.createHotel(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    next(error);
  }
};

/**
 * Update hotel (admin only)
 * PUT /admin/hotels/:id
 */
export const updateHotel = async (req, res, next) => {
  try {
    const hotel = await hotelService.updateHotel(req.params.id, req.body);
    res.json(hotel);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete hotel (admin only)
 * DELETE /admin/hotels/:id
 */
export const deleteHotel = async (req, res, next) => {
  try {
    const result = await hotelService.deleteHotel(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
