const HealthyData = require("../models/ChooseHealthyLife");

const newHealthyData = (req, res) => {
    res.render("newHealthyLife", {
        title: "New Healthy Post",
    })
}

const storeHealthyData = async (req, res) => {
    await HealthyData.create({
        ...req.body,
        userid: req.session.userId
    })
    res.redirect('/healthyLife')
}

// healthy life
const healthyLifePage = async (req, res) => {
    const health = await HealthyData.find({})
    res.render('healthyLife', {
        title: 'Healthy Life Membership and stories',
        health
    })
}

const healthyDataPage = async (req, res) => {
    const post = await HealthyData.findOne({ _id: req.params.id });
    res.render(`singleArticle`, {
        title: `Read Our Article About ` + post.title,
        post
    });
}

const deleteHealthyData = async (req, res) => {
    await HealthyData.findByIdAndDelete(req.params.id)
    res.redirect('/healthyLife')
}

module.exports = {
    newHealthyData,
    storeHealthyData,
    healthyDataPage,
    deleteHealthyData,
    healthyLifePage
}