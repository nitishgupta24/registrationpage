const Student = require("../models/Student");

async function addStudentDetail(req, res) {
  try {
    let student = new Student(req.body);
    await student.save();
    res.render("home");
    console.log(req.body);
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

module.exports = {
  addStudentDetail
};
