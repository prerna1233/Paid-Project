/**
 * Hotel Model
 * Defines the schema for hotels
 * Moved from admin/hotel to hotel module for better organization
 */

import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
    },
    facilities: {
      type: String,
      default: ""
    },
    image: {
      type: String, 
      default: "" 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);
