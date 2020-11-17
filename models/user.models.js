const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: { type: String, maxlength: 64 },
    lastName: { type: String, maxlength: 64 },
    email: { type: String, unique: true, index: true },
    password: {type: String, maxlength: 1024}
})

module.exports = mongoose.model('User', UserSchema)