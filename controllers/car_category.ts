import { request, Request, Response } from "express";
import { carCategoryModel } from "../schema/CarCategory";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { categoryName, categoryDetail } = req.body;

    const newCategory = await carCategoryModel.create({
      categoryName,
      categoryDetail,
    });

    res.status(201).json({ success: true, category: newCategory });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ success: false, message: error.message });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An unknown error occurred" });
    }
  }
};

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories = await carCategoryModel.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.json(error);
  }
};
