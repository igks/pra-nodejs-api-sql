const express = require("express");
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", postController.getAll);
router.get("/:id", postController.get);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.destroy);

module.exports = router;
