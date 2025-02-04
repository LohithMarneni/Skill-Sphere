const express = require("express");
const { handleLogOut } = require("../../controllers/userControllers/logoutController");
const router = express.Router();
router.get("/", handleLogOut);
module.exports = router;