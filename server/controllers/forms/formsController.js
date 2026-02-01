// nodemailer



const prayerRequestPage = async(req, res) => {
    res.render("prayerRequest", {
        title: "Submit a prayer request"
    })
}

module.exports = {
    prayerRequestPage
}