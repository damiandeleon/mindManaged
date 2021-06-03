const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema ({
    moodLevel: { type: String, required: true },
    text:  { type: String, required: false },
    date: { type: String, required: true},
    time: { type: String, required: true}
});

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);

module.exports = JournalEntry;