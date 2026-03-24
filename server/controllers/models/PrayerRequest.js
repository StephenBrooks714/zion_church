const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PrayerRequestSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    theirName: String,
    requestType: String,
    details: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

// EventSchedulerSchema.index({ eventTitle: "text", eventType: "text" });
PrayerRequestSchema.index({ "$**": "text" });
const PrayerRequest = mongoose.model('PrayerRequest', PrayerRequestSchema);
module.exports = PrayerRequest;