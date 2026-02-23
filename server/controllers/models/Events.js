
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const EventSchedulerSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    time: String,
    date: String,
    date2: String,
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    location: String,
    description: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted:{
        type: String,
        default: new Date()
    },
})

// EventSchedulerSchema.index({ eventTitle: "text", eventType: "text" });
EventSchedulerSchema.index({ "$**": "text" });
const EventScheduler = mongoose.model('EventScheduler', EventSchedulerSchema);
module.exports = EventScheduler;