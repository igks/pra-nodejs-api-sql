function uploadFile(req, res) {
  if (req.file.filename) {
    res.status(201).json({
      message: "File uploaded successfully!",
      url: req.file.filename,
    });
  } else {
    res.status(500).json({
      message: "File uploaded failed!",
      url: null,
    });
  }
}

module.exports = {
  uploadFile,
};
