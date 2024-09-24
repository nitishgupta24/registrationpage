const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  country: {
    type: String
  },
  mobileNo: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  confirmPassword: {
    type: String
  }
});

module.exports = mongoose.model("Student", StudentSchema);
