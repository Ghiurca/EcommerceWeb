const mongoose = require("mongoose");
const SubsSchema = new mongoose.Schema({email:{type:String},},{timestamps:true});
module.exports = mongoose.model("Subs",SubsSchema);