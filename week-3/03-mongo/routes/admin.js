const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username: username,
    password: password,
  })

    .then(function () {
      res.json({
        msg: " Admin created successfully",
      });
    })
    .catch(function (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to create admin" });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title=req.body.title;
  const description=req.body.description;
  const price=req.body.price;
  const imageLink=req.body.imageLink;

  const coursename=await Course.create({
    title,
    description,
    price,
    imageLink
  })

  res.json({
    msg: " Course create successfully",
    courseId: coursename._id
  })


});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({})
  res.json({response})
});

module.exports = router;
