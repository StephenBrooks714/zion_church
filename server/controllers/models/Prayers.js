const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PrayerSchema = new Schema ({
    prayer: {
        type: String,
        required: true
    },
    verse: {
        type: String,
        required: true
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
})

// EventSchedulerSchema.index({ eventTitle: "text", eventType: "text" });
PrayerSchema.index({ "$**": "text" });
const Prayer = mongoose.model('Prayer', PrayerSchema);
module.exports = Prayer;