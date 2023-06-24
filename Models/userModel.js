const mongoose = require('mongoose')
const userModel = new mongoose.Schema({
    end_year : Number,
    intensity: String,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: String,
    pestle: String,
    source: String,
    title: String,
    likelihood: String,
    year: String,
})

const user = mongoose.model('user',userModel)
module.exports = user