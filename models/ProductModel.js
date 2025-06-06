const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    dicount:{
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String,
    trim: true,
});

module.exports = mongoose.model("product", pageYOffsetroductSchema);

