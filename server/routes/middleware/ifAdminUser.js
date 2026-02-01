const User = require('../../controllers/models/Users');

module.exports = (req,res,next) =>{
    User.findById(req.session.userId, (error, user)=>{
        if(error || user.role !== "admin")
            return res.redirect('/')
        next()
    })
}