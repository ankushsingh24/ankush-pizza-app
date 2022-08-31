const OrderModel = require("../models/order_schema");
module.exports = {
  add(orderObject) {
    return OrderModel.create(orderObject);
  },
  read(orderObject) {
    UserModel.findOne({ orderid: orderObject.orderid }, (error, doc) => {
      if (error) {
        console.log(error);
      } else if (doc && doc.orderid) {
      } else {
        // doc = {}
      }
    });
  },
  update(orderObject) {
    UserModel.findOneAndUpdate(
      { userid: orderObject.userid },
      { password: orderObject.password }
    );
  },
  remove(orderObject) {},
};
