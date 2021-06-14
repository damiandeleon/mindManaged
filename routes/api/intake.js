const router = require("express").Router();
const intakeController = require("../../controllers/intakeController");

// Matches with "/api/intake"
router
    .route("/")
    .get(intakeController.findAll)
    .post(intakeController.create);

router
    .route("/user/:user_id")
    .get(intakeController.findByUserId)

module.exports = router;