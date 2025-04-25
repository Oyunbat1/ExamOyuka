import express from "express";
import { createCategory, getCategories } from "../controllers/car_category";
const categoryRouter = express.Router();
categoryRouter.post("/create", createCategory).get("/get", getCategories);
export default categoryRouter;
