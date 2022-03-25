const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: String,
  link: String,
  price: Number
});

module.exports = mongoose.model("Hotel", hotelSchema);