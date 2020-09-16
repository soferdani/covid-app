const mongoose = require('mongoose')
const Schema = mongoose.Schema

const msgSchema = new Schema ({
    exposed: String,
    symptoms: String,
    abroad: String,
    sick: String,
    healthy: string
})

const User = mongoose.model("User",UserSchema)

module.exports = User