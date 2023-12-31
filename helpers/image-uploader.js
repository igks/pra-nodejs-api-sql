const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, callback) => {
  const allowedFiles = ["image/jpeg", "image/png"];
  if (allowedFiles.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Unsupported file!"), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter,
});

module.exports = {
  upload,
};
