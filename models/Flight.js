const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flight_ype: String,
  airline: String,
  flight_number: String,
  date: Date,
  starting_airport: String,
  ending_airport: String,
  departure_time: String,
  arrival_time: String,
  price: Number
});

module.exports = mongoose.model("Flight", flightSchema);