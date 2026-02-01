const UserData = require("../../controllers/models/Users");

const adminPage = async (req, res) => {
    const users = await UserData.find({});
    res.render('admin', {
        title: "Admin Page for A.M.E.",
        users
    });
}

module.exports = {
    adminPage
};