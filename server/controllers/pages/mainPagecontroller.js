//


const homePage = (req, res) => {
    res.render('index', {
        title: 'home page for the zion church'
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

module.exports = {
    homePage,
    salvationPage,
    staffPage,
    missionVisionPage,
    privacyPage,
    donationsPage,
}