const router = require("express").Router();
const entryRoutes = require("./entries");
const rxRoutes = require("./medication")

// Entry routes
router.use("/entries", entryRoutes);
router.use("/medication", rxRoutes);

module.exports = router;