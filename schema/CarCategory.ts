import mongoose from "mongoose";

const CarCategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    categoryDetail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const carCategoryModel = mongoose.model(
  "carCategory",
  CarCategorySchema
);
