const mongoose = require('mongoose')
const { Schema } = mongoose;


const nameSchema = new Schema({
    name: String,
    date: { type: Date, default: Date.now }
})

module.exports = nameSchema;


