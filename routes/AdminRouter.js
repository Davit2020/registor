const express = require('express');
const path=require("path")
const { AdminView} =require("../controllers/AdminController")
const router = express.Router();

/* admin view */
router.get('/',AdminView);

module.exports = router;
