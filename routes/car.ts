import express from "express";
import { createCar, getCars } from "../controllers/car";
const carRouter = express.Router();
carRouter.post("/create", createCar).get("/get", getCars);
export default carRouter;
