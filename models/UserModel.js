
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const UserSchema = mongoose.Schema({
  fillname: String,
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

module.exports = mongoose.model("user", UserSchema);

