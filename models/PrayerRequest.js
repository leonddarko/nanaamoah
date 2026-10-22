import mongoose from "mongoose";

const prayerRequestSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required."],
      trim: true,
      maxlength: [80, "First name cannot exceed 80 characters."],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required."],
      trim: true,
      maxlength: [80, "Last name cannot exceed 80 characters."],
    },

    email: {
      type: String,
      required: [true, "Email address is required."],
      trim: true,
      lowercase: true,
      maxlength: [254, "Email address is too long."],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address.",
      ],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
      maxlength: [25, "Phone number cannot exceed 25 characters."],
      match: [
        /^\+?[0-9\s()-]{7,25}$/,
        "Please provide a valid phone number.",
      ],
    },

    request: {
      type: String,
      required: [true, "Please enter your prayer request."],
      trim: true,
      minlength: [5, "Prayer request must be at least 5 characters."],
      maxlength: [5000, "Prayer request cannot exceed 5000 characters."],
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "prayed-for", "closed"],
      default: "pending",
      index: true,
    },

    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const PrayerRequest =
  mongoose.models.PrayerRequest ||
  mongoose.model("PrayerRequest", prayerRequestSchema);

export default PrayerRequest;
