//
const FoodPantryData = require("../models/FoodPantry");
const EventCalendar = require("../models/Calendar");
const Prayers = require("../models/Prayers");

const homePage = async (req, res) => {
    const foodItem = await FoodPantryData.find({}).sort({_id: -1});
    const pray = await Prayers.find({}).sort({_id: -1}).limit(4);
    res.render('index', {
        title: 'home page for the zion church',
        foodItem, pray
    })
}

const salvationPage = (req, res) => {
    res.render('inHimWeTrust', {
        title: 'Come to know Him and be saved'
    })
}

const staffPage = (req, res) => {
    res.render('staff', {
        title: 'Meet our staff'
    })
}

const pastorPage = (req, res) => {
    res.render('pastor', {
        title: 'Meet our PAstor'
    })
}

const missionVisionPage = (req, res) => {
    res.render('missionAndVision', {
        title: 'Our Mission And Vision'
    })
}

const privacyPage = (req, res) => {
    res.render('privacyPolicy', {
        title: 'Privacy Policy'
    })
}

const donationsPage = (req, res) => {
    res.render('donations', {
        title: 'Donations Page'
    })
}

const aboutPage = (req, res) => {
    res.render('about', {
        title: 'About Our Beginning'
    })
}

const ministryPage = (req, res) => {
    res.render('ministry', {
        title: 'AME Ministry Board Page'
    })
}

const calendarPage = async (req, res) => {
    const calendar = await EventCalendar.find({}).sort({_id: -1});
    res.render('calendar', {
        title: 'Calendar Page',
        calendar
    })
}

module.exports = {
    homePage,
    calendarPage,
    salvationPage,
    staffPage,
    missionVisionPage,
    privacyPage,
    donationsPage,
    aboutPage,
    pastorPage,
    ministryPage
}