const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    message: "healthy",
  });
});

app.listen("3000", () => {
  console.log("server is running on port 3000");
});
