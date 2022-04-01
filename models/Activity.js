const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activity: String,
  date: Date,
  time: String,
  price: Number,
  notes: String,
});

module.exports = mongoose.model("Activity", activitySchema);
