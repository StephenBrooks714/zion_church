
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const HealthyLifeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    time2: {
        type: String,
    },
    date: {
        type: String,
        required: true
    },
    date2: {
        type: String,
        required: true
    },
    day: {
        type: String,
    },
    comments: {
        type: String,
        required: false
    },
    meetingUrl: {
        type: String,
        required: false
    },
    payUrl: {
        type: String,
        required: false
    },
    location: String,
    description: String,
    additionalHost: {
        type: String,
        required: false
    },
    guest: {
        type: String
    },
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
HealthyLifeSchema.index({ "$**": "text" });
const HealthyLife = mongoose.model('HealthyLife', HealthyLifeSchema);
module.exports = HealthyLife;