/**
 * Blog Model
 * Defines the schema for blog posts with likes and comments
 */

import mongoose from "mongoose";

// Comment Sub-Schema
const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    text: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

// Blog Schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    published: {
      type: Boolean,
      default: true
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    comments: [commentSchema]
  },
  { timestamps: true }
);

// Virtual field for like count
blogSchema.virtual('likeCount').get(function() {
  return this.likes ? this.likes.length : 0;
});

// Virtual field for comment count
blogSchema.virtual('commentCount').get(function() {
  return this.comments ? this.comments.length : 0;
});

// Ensure virtuals are included in JSON
blogSchema.set('toJSON', { virtuals: true });
blogSchema.set('toObject', { virtuals: true });

export default mongoose.model("Blog", blogSchema);
