const mongoose = require("mongoose");
const URL =
  "mongodb+srv://ankush:ankush24@cluster0.z5z2sre.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, (err) => {
  if (err) {
    console.log("Connection Error ", err);
  } else {
    console.log("Connected to mongodb");
  }
});
module.exports = mongoose;
