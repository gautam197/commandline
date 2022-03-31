const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone: { type: String },
});

module.exports = mongoose.model("customer", customerSchema);
