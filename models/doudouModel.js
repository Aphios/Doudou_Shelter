const mongoose = require('mongoose');

const doudouSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 1 },
    species: { type: String, required: true },
    sex: { type: String, default: "U" },
    softness: { type: Number, required: true },
  });
   
module.exports = mongoose.model("Doudou", doudouSchema);