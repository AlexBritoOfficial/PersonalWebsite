"use strict";

const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use(function (req, res, next) {
  next();
});
console.log("Hello World");
app.use("/", express.static(path.join(__dirname, "public")));

router.get("/", (req, res) => {
  res.render("public/index.html");
});
