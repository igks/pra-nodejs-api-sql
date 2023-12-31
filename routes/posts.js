const express = require("express");
const { checkAuth } = require("../middleware/authentication");
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", postController.getAll);
router.get("/:id", postController.get);
router.post("/", checkAuth, postController.create);
router.put("/:id", checkAuth, postController.update);
router.delete("/:id", checkAuth, postController.destroy);

module.exports = router;
