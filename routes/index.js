const express = require('express');
const router = express.Router(); // router handler


const homeController = require('../controllers/home_controller');
console.log('controller has loaded');

router.get('/',homeController.home);


module.exports = router;
