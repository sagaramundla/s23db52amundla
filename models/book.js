const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
Author : String,
book_name : String,
book_cost : Number
})
module.exports = mongoose.model("book",
bookSchema)