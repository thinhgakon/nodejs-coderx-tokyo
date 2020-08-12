//expressjs
var express = require('express');
var router = express.Router();

//controllers
let productController = require('../controllers/product.controller');

//route
router.get('/', productController.index);

module.exports = router;