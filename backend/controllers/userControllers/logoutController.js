const User = require("../../model/User.model");
const handleLogOut = async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.refreshToken) {
        return res.status(400).json({ message: "No refreshToken found" });
    }
    const refreshToken = cookies.refreshToken;
    const foundUser = await User.findOne({ refreshToken: refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie("refreshToken",{
            httpOnly: true,
            secure: false,
            sameSite: "none",
          });
        return res.status(400).json({ message: "Invalid refreshToken" });
    }
    // delete refreshToken from user in database
    foundUser.refreshToken = undefined;
    const result = await foundUser.save();
    res.clearCookie("refreshToken",{
        httpOnly: true,
        secure: false,
        sameSite: "none",
    });
    return res.status(200).json({ message: "Logged out successfully" });
}
module.exports = { handleLogOut };