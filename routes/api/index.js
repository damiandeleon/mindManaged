const router = require("express").Router();
const entryRoutes = require("./entries");
const rxRoutes = require("./medication")
const userRoutes = require("./user")

// Entry routes
router.use("/entries", entryRoutes);
router.use("/medication", rxRoutes);
router.use("/user", userRoutes);

module.exports = router;