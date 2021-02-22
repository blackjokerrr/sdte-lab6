const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("But sometimes i want to eat coco");
});

module.exports = app;
