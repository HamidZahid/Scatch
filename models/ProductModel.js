const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
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
});

module.exports = mongoose.model("product", ProductSchema);

