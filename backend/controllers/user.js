const userOperations = require("../db/repository/user_operations");

module.exports = {
  login(request, response) {
    const userObject = request.body;
    console.log("Request Body is ", userObject);
    userOperations.read(userObject, response);
    // if (userObject.userid == userObject.password) {
    //   response.json({
    //     message: "Welcome " + userObject.userid + " Sir! to your Account",
    //   });
    // } else {
    //   response.json({ message: "Invalid Userid or Password" });
    // }
  },
  async register(request, response) {
    const userObject = request.body;
    const result = await userOperations.add(userObject);
    if (result && result.userid) {
      response.json({ message: "RECORD ADDED" });
    } else {
      response.json({ message: "RECORD NOT ADDED" });
    }
  },
  profile(request, response) {},
};
