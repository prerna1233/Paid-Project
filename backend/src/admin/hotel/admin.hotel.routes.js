/**
 * Admin Hotel Routes
 * Admin endpoints for managing all hotels
 */

import express from "express";
import {
  getHotelsAdmin,
  createHotel,
  updateHotel,
  deleteHotel
} from "./admin.hotel.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import adminMiddleware from "../../middleware/admin.middleware.js";

const router = express.Router();

// All admin hotel routes are protected
router.use(authMiddleware, adminMiddleware);

router.get("/", getHotelsAdmin);
router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);

export default router;
