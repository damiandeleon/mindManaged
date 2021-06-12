const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema ({
    // This will be used to pull the current user ID and tie the journal entry/mood level to them
    user_id: { type: String, required: true },
    moodLevel: { type: String, required: true },
    text:  { type: String, required: false },
    date: { type: String, required: true},
    time: { type: String, required: true}
});

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);

module.exports = JournalEntry;