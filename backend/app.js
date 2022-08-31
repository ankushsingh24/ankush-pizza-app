const express = require("express");
const app = express();

app.use(express.static("public")); // Static Content
app.use(express.json());

const cors = require("cors");
app.use(cors());

//Dynamic Content
app.use("/", require("./routes/user"));

const server = app.listen(5000, (err) => {
  if (err) {
    console.log("Server Crash ", err);
  } else {
    console.log("Server is running ", server.address().port);
  }
});
