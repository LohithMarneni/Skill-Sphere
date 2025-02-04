const express = require("express");
const { handleRefreshToken } = require("../../controllers/userControllers/refreshTokenController");
const router = express.Router();
router.post("/", handleRefreshToken );
module.exports = router;