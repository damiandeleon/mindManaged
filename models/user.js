const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: false, unique: true },
    picture: {type: String, required: false},
    user_id: { type: String, required: false }
});

userSchema.plugin(uniqueValidator, { message: 'User already exists' });

const User = mongoose.model("User", userSchema);

module.exports = User;