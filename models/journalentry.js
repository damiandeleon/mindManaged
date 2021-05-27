const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema ({
    moodlevel: { type: Number, required: true },
    text:  { type: String, required: false },
    date: { type: Date, default: Date.now}
});

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);

module.exports = JournalEntry;