require("dotenv").config();

const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    message: "healthy wa i sas kuy",
  });
});

app.get("/", (req, res) => {
  res.json({ secretKey: process.env.SECRET_KEY });
});

app.listen("3000", () => {
  console.log("server is running on port 3000");
});
