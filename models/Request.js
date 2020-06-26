const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment-timezone");
const now = moment().tz("America/Chicago").format("l");

// define a schema for request collection with user_id as a foreign key referencing to the user collection
const requestSchema = new Schema({
  shipFrom: String,
  shipFromDestination: String,
  shipFromStreetAddress: String,
  shipFromCity: String,
  shipFromState: String,
  shipFromZipcode: String,
  shipFromCountry: String,
  shipTo: String,
  shipToDestination: String,
  shipToStreetAddress: String,
  shipToCity: String,
  shipToState: String,
  shipToZipcode: String,
  shipToCountry: String,
  weightKg: Number,
  weightLb: Number,
  bolNo: String,
  truckType: String,
  shippingDate: String,
  deliveryDate: String,
  specialNote: String,
  status: {
    type: String,
    default: "Not Shipped"
  },
  datePosted: {
    type: Date,
    default: now
  },
  requestedBy: String,
  user_id: Schema.Types.ObjectId
});
  
const Request = new mongoose.model("Request", requestSchema);

module.exports = Request;