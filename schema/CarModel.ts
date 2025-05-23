import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const carModel = mongoose.model("car", CarSchema);
