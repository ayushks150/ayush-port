// app.js

import express from "express";
import cors from "cors";
import { json } from "express";
import dotenv from "dotenv";
import "../db/conn.js";
import router from "../routes/router.js";
import path from "path";
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 6002;

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.status(200).json("Server starts");
});

app.use("/api", router); // Use the router for handling requests

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
