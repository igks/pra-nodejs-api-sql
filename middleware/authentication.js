const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret");
    req.userData = decodedToken;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Authentication failed!",
    });
  }
}

module.exports = { checkAuth };
