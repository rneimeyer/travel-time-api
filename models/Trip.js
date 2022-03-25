const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  name: String,
  budget: Number,
  start_date: Date,
  end_date: Date,
  hotels: [{ type: Schema.Types.ObjectId, ref: "Hotel" }],
  flights: [{ type: Schema.Types.ObjectId, ref: "Flight" }],
});

module.exports = mongoose.model("Trip", tripSchema);