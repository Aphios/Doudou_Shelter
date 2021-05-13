const mongoose = require('mongoose');

const doudouSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 1, min: 0 },
    species: { type: String, required: true },
    sex: { type: String, default: "U", enum: ["F", "M", "O", "U"] },
    softness: { type: Number, required: true, min: 1, max: 3 },
  });
   
module.exports = mongoose.model("Doudou", doudouSchema);