const router = require("express").Router();
const entryRoutes = require("./entries");
const rxRoutes = require("./medication")
const userRoutes = require("./user");
const intakeRoutes = require("./intake");

// Entry routes
router.use("/entries", entryRoutes);
router.use("/medication", rxRoutes);
router.use("/user", userRoutes);
router.use("/intake", intakeRoutes);

module.exports = router;