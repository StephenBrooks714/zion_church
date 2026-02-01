const express = require("express");
const router = express.Router();
const cache = require("./config/cache");
const auth = require("../routes/middleware/ifAuthorizedUser");

const mainController = require("../controllers/pages/mainPagecontroller");
router.get('/', cache(2), mainController.homePage);

const usersController = require("../controllers/users/usersMainController");
router.get("/register", usersController.registerUser);
router.post("/register", usersController.storeUser);
router.get("/login", usersController.loginPage);
router.post("/login/user", usersController.loginUserAction);
router.get("/logout", usersController.logoutUser);
router.get("/delete/:id", auth, usersController.deleteUser);
router.get("/updateUser/:id", auth, usersController.updateUser);
router.post("/update/user/:id", auth, usersController.postUpdatedUser);

module.exports = router;