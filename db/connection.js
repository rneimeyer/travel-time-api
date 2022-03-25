const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/travel-time-api")
// mongoose.connect("mongodb://localhost/travel-time-api")

module.exports = mongoose