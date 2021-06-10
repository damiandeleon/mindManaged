const router = require("express").Router();
const intakeController = require("../../controllers/intakeController");

// Matches with "/api/intake"
router
    .route("/")
    .get(intakeController.findAll)
    .post(intakeController.create);

module.exports = router;