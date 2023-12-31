const express = require("express");
const { uploadFile } = require("../controllers/file");
const { upload } = require("../helpers/image-uploader");

const router = express.Router();

router.post("/upload", upload.single("image"), uploadFile);

module.exports = router;
