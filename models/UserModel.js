const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  profile: String,
  trim: true,
});

module.exports = mongoose.model("user", sserSchema);
