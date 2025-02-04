const jwt = require("jsonwebtoken");
const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decodoed) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = decodoed.username;
    req.id = decodoed._id;
    next();
  });
};
module.exports = { verifyJWT };
