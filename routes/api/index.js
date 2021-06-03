const router = require("express").Router();
const entryRoutes = require("./entries");
const rxRoutes = require("./drugs")

// Entry routes
router.use("/entries", entryRoutes);
router.use("/drugs", rxRoutes);

module.exports = router;