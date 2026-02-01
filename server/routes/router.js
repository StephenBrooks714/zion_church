const express = require("express");
const router = express.Router();
const cache = require("./config/cache");
const auth = require("../routes/middleware/ifAuthorizedUser");
const admin = require("./middleware/ifAdminUser");

const mainController = require("../controllers/pages/mainPagecontroller");
router.get('/', cache(2), mainController.homePage);
router.get("/inHimWeTrust", cache(2), mainController.salvationPage);

const usersController = require("../controllers/users/usersMainController");
router.get("/register", usersController.registerUser);
router.post("/register", usersController.storeUser);
router.get("/login", usersController.loginPage);
router.post("/login/user", usersController.loginUserAction);
router.get("/logout", usersController.logoutUser);
router.get("/delete/:id", auth, usersController.deleteUser);
router.get("/updateUser/:id", auth, usersController.updateUser);
router.post("/update/user/:id", auth, usersController.postUpdatedUser);

const adminController = require("../controllers/admin/adminController");
router.get("/admin", cache(2), admin, adminController.adminPage);

const formsController = require("../controllers/forms/formsController");
router.get("/prayerRequest", formsController.prayerRequestPage);

module.exports = router;