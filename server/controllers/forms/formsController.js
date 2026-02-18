// nodemailer
////////////////////////////////////////////////////////////////
// event database
const EventAction = require("../models/Events");
const CalendarEvents = require("../models/Calendar");
const RequestPrayers = require("../models/PrayerRequest");
const OurPrayers = require("../models/Prayers");

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
// prayer request
const prayerRequestPage = async(req, res) => {
    const prayers = await RequestPrayers.find({})
    res.render("prayerRequest", {
        title: "Submit a prayer request",
        prayers
    })
}
const storePrayerRequest = async (req, res) => {
    await RequestPrayers.create({
        ...req.body
    })
    res.redirect('/prayerRequest')
}
const deletePrayerRequest = async (req, res) => {
    await RequestPrayers.findByIdAndDelete(req.params.id)
    res.redirect('/prayerRequest')
}

/////////////////////////////////////////////////////////////////////
// calendar events

const storeCalendarEvent = async (req, res) => {
    await CalendarEvents.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/calendar')
}

const deleteCalendarEvent = async (req, res) => {
    await CalendarEvents.findByIdAndDelete(req.params.id)
    res.redirect('/calendar')
}

///////////////////////////////////////////////////////////////////
// prayers for you
const newPrayerUpload = (req, res) => {
    res.render("newPrayer", {
        title: "New prayers for the faithful",
    })
}

const storePrayerUpload = async (req, res) => {
    await OurPrayers.create({
        ...req.body
    })
    res.redirect('/')
}

const deletePrayerUpload = async (req, res) => {
    await OurPrayers.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

module.exports = {
    prayerRequestPage,
    newEventPage,
    storeEvent,
    deleteEvent,
    eventsPage,
    storeCalendarEvent,
    deleteCalendarEvent,
    storePrayerRequest,
    deletePrayerRequest,
    newPrayerUpload,
    storePrayerUpload,
    deletePrayerUpload
}