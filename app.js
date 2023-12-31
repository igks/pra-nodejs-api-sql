const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const fileRoutes = require("./routes/file");

const app = express();
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/files", fileRoutes);

module.exports = app;
