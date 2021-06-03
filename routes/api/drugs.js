const router = require("express").Router();
const rxController = require("../../controllers/prescriptionController");

// Matches with "/api/drugs"
router
    .route("/")
    .get(rxController.findAll)
    .post(rxController.create);


// Matches with "/api/drugs/:id"
router
    .route("/:id")
    .delete(rxController.remove);

module.exports = router;