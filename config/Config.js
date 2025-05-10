const mongoose = require("mongoose");
const deBug = require("debug")("development:mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGO_URI")}/scatch`)
  .then(() => {
    deBug("Connected to MongoDB");
  })
  .catch((err) => {
    deBug(err);
  });
module.exports = mongoose.connection;
