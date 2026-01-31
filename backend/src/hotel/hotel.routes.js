/**
 * Hotel Routes (Public)
 * Public endpoints for viewing hotels
 */

import express from "express";
import { getAllHotels, getHotelById } from "./hotel.controller.js";

const router = express.Router();

// Public routes
router.get("/", getAllHotels);
router.get("/:id", getHotelById);

export default router;
