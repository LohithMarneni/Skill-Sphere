const express = require("express");
const { handleCreateCourse } = require("../../controllers/coursesControllers/createCourse");
const { handleGetCourses } = require("../../controllers/coursesControllers/getCourses");
const router = express.Router();
router.post("/", handleCreateCourse);
router.get("/" , handleGetCourses);
module.exports = router;