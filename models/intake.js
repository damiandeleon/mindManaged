const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const intakeSchema = new Schema({
    user: { type: Schema.Types.ObjectId },
    dates: { type: Array, required: true },
});

const Intake = mongoose.model("Intake", intakeSchema);

module.exports = Intake;