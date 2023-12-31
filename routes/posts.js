import express from "express";
import postController from "../controllers/post.js";

const router = express.Router();

router.get("/", postController.index);

export default router;
