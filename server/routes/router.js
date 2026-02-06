const express = require("express");
const router = express.Router();
const cache = require("./config/cache");
const auth = require("../routes/middleware/ifAuthorizedUser");
const admin = require("./middleware/ifAdminUser");

const mainController = require("../controllers/pages/mainPagecontroller");
router.get('/', cache(2), mainController.homePage);
router.get('/about', cache(2), mainController.aboutPage);
router.get("/inHimWeTrust", cache(2), mainController.salvationPage);
router.get("/staff", cache(2), mainController.staffPage);
router.get("/missionAndVision", cache(2), mainController.missionVisionPage);
router.get("/privacyPolicy", cache(2), mainController.privacyPage);
router.get("/donations", cache(2), mainController.donationsPage);

const galleryController = require("../controllers/Gallery/galleryController");
router.get("/newGallery", auth, galleryController.newProjectPage)
router.post("/store/images", galleryController.storeProject)
router.get("/delete/images", auth, galleryController.deleteProjectInfo)
router.get("/gallery", galleryController.projectsPage)

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
router.get("/admin", cache(2), auth, adminController.adminPage);

const formsController = require("../controllers/forms/formsController");
const eventsController = require("../controllers/forms/formsController");
router.get("/prayerRequest", formsController.prayerRequestPage);
// events data
router.get("/newEvent", formsController.newEventPage)
router.post("/store/event", formsController.storeEvent);
router.get("/events", eventsController.eventsPage);
router.get("/delete/event/:id", formsController.deleteEvent);

module.exports = router;