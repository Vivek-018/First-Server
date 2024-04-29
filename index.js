const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Please login");
});

app.get("/home", (req, res) => {
  res.send("hi how are you");
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:3000/");
});
