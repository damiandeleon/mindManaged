const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const intakeSchema = new Schema({
    user_id: { type: String, required: true },
    dates: { type: Array, required: true },
});

const Intake = mongoose.model("Intake", intakeSchema);

module.exports = Intake;