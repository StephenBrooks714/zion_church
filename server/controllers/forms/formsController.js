// nodemailer
////////////////////////////////////////////////////////////////
// event database
const EventAction = require("../models/Events");

const newEventPage = (req, res) => {
    res.render("newEvent", {
        title: "New event of AME"
    })
}

const storeEvent = async (req, res) => {
    await EventAction.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/events')
}

const deleteEvent = async (req, res) => {
    await EventAction.findByIdAndDelete(req.params.id)
    res.redirect('/events')
}

const eventsPage = async (req, res) => {
    const events = await EventAction.find({}).sort({_id: -1});
    res.render("events", {
        title: "Our events page",
        events
    })
}

/////////////////////////////////////////////////////////////////////
const prayerRequestPage = async(req, res) => {
    res.render("prayerRequest", {
        title: "Submit a prayer request"
    })
}

module.exports = {
    prayerRequestPage,
    newEventPage,
    storeEvent,
    deleteEvent,
    eventsPage
}