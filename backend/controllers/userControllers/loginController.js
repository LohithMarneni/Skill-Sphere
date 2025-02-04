const User = require("../../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  try {
    const user = await User.findOne({ username: username }).exec();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      const accessToken = jwt.sign(
        {
          username: user.username,
          _id: user._id,
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "1h" }
      );
      const refreshToken = jwt.sign(
        {
            username: user.username,
            _id: user._id,
        },
          process.env.REFRESH_TOKEN_SECRET_KEY,
          {expiresIn: "1d"}
      );
      user.refreshToken = refreshToken;
      const result = await user.save();
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: false,
        sameSite: "none",
      });
      return res.status(200).json({ accessToken });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { handleLogin };
