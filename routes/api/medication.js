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

module.exports = router;