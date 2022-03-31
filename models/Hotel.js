const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  hotel: String,
  room_type: String,
  check_in: Date,
  check_out: Date,
  price: Number,
  ammenities: String
});

module.exports = mongoose.model("Hotel", hotelSchema);