//
const FoodPantryData = require("../models/FoodPantry");

const homePage = async (req, res) => {
    const foodItem = await FoodPantryData.find({}).sort({_id: -1});
    res.render('index', {
        title: 'home page for the zion church',
        foodItem
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

module.exports = {
    homePage,
    salvationPage,
    staffPage,
    missionVisionPage,
    privacyPage,
    donationsPage,
    aboutPage,
    pastorPage,
    ministryPage
}