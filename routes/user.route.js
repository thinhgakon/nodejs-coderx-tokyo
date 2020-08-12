//expressjs
var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

//controllers
let userController = require('../controllers/user.controller');
let userValidate = require('../validate/user.validate');

//route
router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.create);

router.get('/:id', userController.get);

router.post('/create', upload.single('avatar'), userValidate.postCreate, userController.postCreate);

module.exports = router;