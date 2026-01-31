/**
 * Admin Hotel Routes
 * Admin endpoints for managing hotels
 * Reuses hotel service but with admin middleware protection
 */

import express from "express";
import {
  createHotel,
  getHotelsAdmin,
  getHotelById,
  updateHotel,
  deleteHotel
} from "../controllers/hotel.controller.js";
import authMiddleware from "../../../core/middleware/auth.middleware.js";
import adminMiddleware from "../../../core/middleware/admin.middleware.js";

const router = express.Router();

// All admin hotel routes are protected
router.use(authMiddleware, adminMiddleware);

router.post("/", createHotel);
router.get("/", getHotelsAdmin);
router.get("/:id", getHotelById);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;
