const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  name: String,
  link: String,
  price: Number
});

module.exports = mongoose.model("Flight", flightSchema);