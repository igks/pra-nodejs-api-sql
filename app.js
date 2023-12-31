const express = require("express");
const postRoutes = require("./routes/posts");

const app = express();

app.use("/posts", postRoutes);

module.exports = app;
