
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CalendarSchema = new Schema ({
    eventTitle: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventDescription: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
})

// EventSchedulerSchema.index({ eventTitle: "text", eventType: "text" });
CalendarSchema.index({ "$**": "text" });
const Calendar = mongoose.model('Calendar', CalendarSchema);
module.exports = Calendar;