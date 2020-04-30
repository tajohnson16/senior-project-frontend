/**
 * Schema for retreived data in API
 * 
 * @author Tim Johnson
 * Senior Project
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to map data from API to a type
 */
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

/**
 * Exports schema to modify using Node.js.
 * Connected to 'SHOES-Sneakers' collection in Neiman Database.
 */
module.exports = mongoose.model("Data", DataSchema, "SHOES-Sneakers");