// models/Testimony.js

import mongoose from "mongoose";

const testimonyCategories = [
  "Healing",
  "Answered Prayer",
  "Salvation",
  "Breakthrough",
  "Deliverance",
  "Spiritual Growth",
  "Provision",
  "Protection",
  "Encouragement",
  "Other",
];

const testimonySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      maxlength: 254,
      default: "",
      validate: {
        validator: (value) =>
          !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Please provide a valid email address.",
      },
    },
    country: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 150,
    },
    testimony: {
      type: String,
      required: true,
      trim: true,
      minlength: 20,
      maxlength: 10000,
    },
    category: {
      type: String,
      required: true,
      enum: testimonyCategories,
    },
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    publicationConsent: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "Publication consent is required.",
      },
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },
    isRead: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

testimonySchema.index({ createdAt: -1 });

export { testimonyCategories };

export default mongoose.models.Testimony ||
  mongoose.model("Testimony", testimonySchema);
