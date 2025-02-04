const User = require("../../model/User.model");
const jwt = require("jsonwebtoken");
const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refreshToken) {
    return res.status(403).json({ message: "Forbidden" });
  }
  const refreshToken = cookies.refreshToken;
  const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();
  if (!foundUser) {
    return res.status(403).json({ message: "Forbidden" });
  }
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_KEY,
    (err, user) => {
      if (err || user.username !== foundUser.username) {
        return res.status(403).json({ message: "Forbidden" });
      }
      const accessToken = jwt.sign(
        {
          username: user.username,
          _id: user._id,
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.json({ accessToken });
    }
  );
};
module.exports = { handleRefreshToken };
