// requiring the all necessary modules to be loaded
const path = require("path");
const express = require("express");
const connection = require("./connection");
const student = require("./routes/student");
const app = express();
connection();
app.use(student);


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(3002, (err) => {
  if (err) console.log("something error while running this server", err);
  else console.log("Server is running on port 3002");
});
