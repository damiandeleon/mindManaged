const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    brand_name: { type: String, required: true },
    dosage: { type: String, required: true },
    product_number: { type: Number, required: true },
    user_id: { type: String, required: false }
});

const SavedRx = mongoose.model("SavedRx", prescriptionSchema);

module.exports = SavedRx;