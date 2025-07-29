// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { processData } = require("../controllers/userController");

router.post("/bfhl", processData); 

module.exports = router;
