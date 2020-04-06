//File for Driver Schema

const mongoose = require('mongoose');

//define the schema
const Driver = new mongoose.Schema({
  _id: String,
  driverName: [String],
  location: String,
  available: String,
  phone: Number
});

//Export the module
module.exports = mongoose.model('Driver', Driver);
