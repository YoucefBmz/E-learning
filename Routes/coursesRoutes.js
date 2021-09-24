const express = require("express");
const router = express.Router();
const CourseModel = require("../Models/CourseModel");

const verify = require("./verifyToken");
// get controller ...
const controllers = require("../Controllers/CoursesController");

// 1 create a course ...
//
router.post("/", verify, controllers.createCourse);

// 2 - get all courses ...

router.get("/", controllers.getAllCourses);

// 3 - get one course with id ...

router.get("/:id", controllers.getOneCourse);

// 4 - update a course ...

router.patch("/:id", verify, controllers.updateCourse);

// 5 - delete a course ...

router.delete("/:id", verify, controllers.deleteCourse);

module.exports = router;
