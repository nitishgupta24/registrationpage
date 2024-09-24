const mongoose = require("mongoose");

// for connecting the mongoDB
async function connection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/AssignmentDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

// exporting the function for testing purposes and using it in index.js
module.exports = connection;
