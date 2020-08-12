//expressjs
var express = require('express');
var router = express.Router();
//controllers
let authController = require('../controllers/auth.controller');

//route
router.get('/login', authController.login);

router.post('/login', authController.postLogin);

module.exports = router;