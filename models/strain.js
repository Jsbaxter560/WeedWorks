const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const strainSchema = new Schema({
    name: { type: String, required: true },
    genetics: { type: String, required: true },
    imageurl: String,
    ocpc: { type: String, required: true }
});

const User = mongoose.model("Strain", strainSchema);

module.exports = Strain;