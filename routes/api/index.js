const router = require("express").Router();
const entryRoutes = require("./entries");
const moodRoutes = require("./moods");

// Entry routes
router.use("/entries", entryRoutes);

module.exports = router;