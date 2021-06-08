const router = require("express").Router();
const userController = require("../../controllers/userController");

// POST "/api/user/"
router
    .route("/")
    .get(userController.findAll)
    .post(userController.create);


// GET "/api/user/:id"

router
    .route("/:id")
    .get(userController.findById)

module.exports = router;