//

const homePage = (req, res) => {
    res.render('index', {
        title: 'home page for the zion church'
    })
}

module.exports = {
    homePage
}