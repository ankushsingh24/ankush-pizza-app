const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const orderSchema = new Schema({
  order_id: { type: SchemaTypes.Number, required: true, unique: true },
  name: { type: SchemaTypes.String, required: true },
  price: { type: SchemaTypes.Number, required: true },
});
const OrderModel = connection.model("orders", orderSchema);
module.exports = OrderModel;
