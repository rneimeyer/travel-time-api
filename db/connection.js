const mongoose = require("mongoose");

let mongoURL = "";

if (process.env.NODE_ENV === "production") {
  mongoURL = process.env.DB_URL;
} else {
  mongoURL = "mongodb://127.0.0.1/travel-time-api";
}

mongoose.connect(mongoURL);

// mongoose.connect("mongodb://127.0.0.1/travel-time-api")
// mongoose.connect("mongodb://localhost/travel-time-api")

module.exports = mongoose;
