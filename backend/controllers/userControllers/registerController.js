const User = require("../../model/User.model");
const bcrypt = require("bcrypt");
const handleRegister = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  try {
    const userExists = await User.findOne({ username: username }).exec();
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username: username, password: hashedPassword });
    const result = await newUser.save();
    return res.status(201).json({ message: "User registered successfully" , data: result});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { handleRegister };