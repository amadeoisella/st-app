const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`);
});
