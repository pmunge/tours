const express = require("express");
const router = express.Router();
const { getAdventures, createAdventure } = require("../controllers/adventureController");

router.get("/adventures", getAdventures);
router.post("/adventures", createAdventure);

module.exports = router;

