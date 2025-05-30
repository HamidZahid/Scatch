
const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  contact: Number,
  profile: String,
  gstin: String,
  trim: true,
});

module.exports = mongoose.model("owner", ownerSchema);

