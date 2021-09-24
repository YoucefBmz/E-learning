const CourseModel = require("../Models/CourseModel");
const User = require("../Models/User");
module.exports = {
  createCourse: async (req, res) => {
    try {
      const user = await User.findById(req.user);
      if (user.type === "former") {
        const userId = user._id;
        const former = user.username;
        const { title, category, price, description, video } = req.body;
        const course = await CourseModel.create({
          title,
          userId,
          former,
          category,
          price,
          description,
          video,
        });

        if (!course)
          throw Error(
            "there is some error while creating this course, please retry..."
          );
        res.status(200).json(course);
        console.log("new course added to the db ! go to check");
      } else {
        // student : does not exist
        res.status(500).send("you cant add a course !");
      }
    } catch (err) {
      res.status(500).send(err);
    }
    /*

    {  
    "title": "learn html",
    "userId": "",
    "category": "progr",
    "description": "desription of the course",
    "price": "3000da"

}
    
    */
  },
  getAllCourses: async (req, res) => {
    try {
      const courses = await CourseModel.find();
      res.send(courses);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getOneCourse: async (req, res) => {
    const { id } = req.params;
    try {
      const course = await CourseModel.findById(id);
      if (!course) {
        res.json("this course is not availble");
      } else {
        res.send(course);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },

  updateCourse: async (req, res) => {
    const { id } = req.params;
    const { title, category, price, description, video } = req.body;
    try {
      const course = await CourseModel.findByIdAndUpdate(id, {
        title,
        category,
        price,
        description,
        video,
      });
      res.status(200).send(course);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deleteCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await CourseModel.findByIdAndDelete(id);
      res.json("doc deleted successfully");
      console.log("doc deleted !!");
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
