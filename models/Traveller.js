const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const travellerSchema = new Schema({
  name: String,
  email: {type: String, unique: true},
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
});

module.exports = mongoose.model("Traveller", travellerSchema);