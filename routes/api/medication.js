const router = require("express").Router();
const rxController = require("../../controllers/prescriptionController");

// Matches with "/api/medication"
router
    .route("/")
    .get(rxController.findAll)
    .post(rxController.create);


// Matches with "/api/medication/:id"
router
    .route("/:id")
    .delete(rxController.remove);

router
    .route("/user/:user_id")
    .get(rxController.findByUserId)

module.exports = router;