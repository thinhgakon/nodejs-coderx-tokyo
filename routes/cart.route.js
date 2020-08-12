//expressjs
var express = require('express');
var router = express.Router();
//controllers
let cartController = require('../controllers/cart.controller');

//route
router.get('/add/:productId', cartController.addToCart);

module.exports = router;