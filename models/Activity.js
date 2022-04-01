const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  activity: String,
  time: String,
  price: Number,
});

module.exports = mongoose.model("Activity", activitySchema);
