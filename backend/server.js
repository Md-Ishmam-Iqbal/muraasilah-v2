import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";

import userRoutes from "./src/routes/userRoutes.js";

import { errorHandler, notFound } from "./src/middleware/errorMiddleware.js";

connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/users", userRoutes);

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`app listening on port ${port}`));
