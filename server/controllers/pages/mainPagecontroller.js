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

module.exports = {
    homePage,
    salvationPage,
}