const express = require("express");
const router = express.Router();

const mainController = require("../controllers/pages/mainPagecontroller");
router.get('/', mainController.homePage);

module.exports = router;