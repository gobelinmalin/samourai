const express = require("express");
const router = express.Router();

const history = require("./history");
const problems = require("./problems");
const resolves = require("./resolves");

router.use("/history", history);
router.use("/problems", problems);
router.use("/resolves", resolves);

module.exports = router;
