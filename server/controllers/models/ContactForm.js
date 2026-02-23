const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ContactFormSchema = new Schema ({
    name: String,
    email: {
        type: String,
        required: true
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
// FeaturePostSchema.index({ "$**" : 'text' });

const ContactForm = mongoose.model('ContactForm', ContactFormSchema);
module.exports = ContactForm;