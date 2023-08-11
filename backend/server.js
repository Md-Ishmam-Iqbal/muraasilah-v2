import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

import userRoutes from "./src/routes/userRoutes.js";

import { errorHandler, notFound } from "./src/middleware/errorMiddleware.js";

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors());

app.use("/api/users", userRoutes);

app.get("/test", (req, res) => {
  res.json("test ok!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app listening on port ${port}`));
