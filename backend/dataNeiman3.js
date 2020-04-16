// /backend/dataNeiman.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
    {
        prodURL: String,
        image: String,
        name: String,
        designer: String,
        price: Number
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data3", DataSchema, "ACCESSORIES-Watches");