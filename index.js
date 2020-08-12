//expressjs
const express = require('express');
//app
const app = express();
const port = 3000;

let cookieParser = require('cookie-parser');

//pug engine
app.set('view engine', 'pug');
app.set('views', './views');
//response.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//signed cookie
app.use(cookieParser('NXTNMH'));

//user route
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');

let authMiddleware = require('./middlewares/auth.middleware');
let sessionMiddleware = require('./middlewares/session.middleware');
app.use(sessionMiddleware.setSessionId);

app.get('/', function (request, response) {
  response.render('index', {
    name: 'Coder TokyO'
  });
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})