const express = require("express");
const studentcontroller = require("../controllers/studentcontroller");

const router = express.Router();
router.use(express.urlencoded({ extended: false }));

// Home Page
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/student/signup", (req, res) => {
  res.render("studentsignup");
});

router.post("/add/studentdetail", (req, res) => {
  studentcontroller.addStudentDetail(req, res);
});

module.exports = router;
