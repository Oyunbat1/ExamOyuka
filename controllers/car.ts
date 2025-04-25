import { request, Request, Response } from "express";
import { carModel } from "../schema/CarModel";

export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { brand, model, year, color } = req.body;

    const newCar = await carModel.create({
      brand,
      model,
      year,
      color,
    });

    res.status(201).json({ success: true, category: newCar });
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

export const getCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const cars = await carModel.find();
    res.status(200).json({ success: true, cars });
  } catch (error) {
    res.json(error);
  }
};
