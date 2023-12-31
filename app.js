import express from "express";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

export default app;
