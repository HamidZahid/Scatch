
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const OwnerSchema = mongoose.Schema({
  fillname: {
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
  gstin: String
});

module.exports = mongoose.model("owner", OwnerSchema);

