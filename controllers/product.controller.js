let db = require('../db');

module.exports.index = function(req, res){
    let page = req.query.page? parseInt(req.query.page) : 1;

    let allProducts = db.get('products').value();
    let numberAllProducts = allProducts.length;
    let itemsPerPage = 8;
    let numberPages = Math.floor(numberAllProducts / itemsPerPage) + 1;

    console.log(numberAllProducts + '' + numberPages);

    let start = (page -1) * itemsPerPage;
    let end = page * itemsPerPage;

    res.render('products/index', {
        products: db.get('products').value().slice( start, end),
        currentPage: page,
        numberPages: numberPages
    });
}