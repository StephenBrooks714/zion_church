
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FoodPantrySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    startTime: String,
    endTime: String,
    startDate: String,
    endDate: String,
    location: String,
    description: String,
    url: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    // person to contact
    contactName: {
        type: String,
    },
    contactEmail: {
        type: String,
    },
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
FoodPantrySchema.index({ "$**": "text" });
const FoodPantry = mongoose.model('FoodPantry', FoodPantrySchema);
module.exports = FoodPantry;