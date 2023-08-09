require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const jwt = require("jsonwebtoken");

mongoose.connect(process.env.MONGO_URL);
const jwt_secret = process.env.JWT_SECRET;

const app = express();
const port = 3000;

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

app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const newUser = await User.create({ username, password });
    console.log(newUser);
    jwt.sign({ userId: newUser._id }, jwt_secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).status(201).json({
        _id: newUser._id,
      });
    });
  } catch (error) {
    if (error) {
      console.error(error);
    }
    res.status(500).json({ error: "Oops, something went wrong" });
  }
});

app.listen(port, () => console.log(`app listening on port ${port}`));
