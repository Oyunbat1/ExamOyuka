import express, { Request, Response } from "express";
import { connectDb } from "../utils/connection";
import cors from "cors";
import categoryRouter from "../routes/car_category";
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/category", categoryRouter);

app.listen(port, async () => {
  await connectDb();
  console.log("Connected to MongoDB");
  console.log(`Server is running on port ${port}`);
});
