const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const manateeRoutes = require("./manatee.js")

router.use('/auth',authRoutes);
router.use("/manatee",manateeRoutes);

module.exports = router;