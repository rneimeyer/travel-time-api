const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const travellerSchema = new Schema({
  name: String,
  email: String,
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
});

module.exports = mongoose.model("Traveller", travellerSchema);