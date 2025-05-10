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
  isAdmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  profile: String,
});

module.exports = mongoose.model("user", sserSchema);
