// lowdb
let db = require('../db');
let shortid = require('shortid');

module.exports.index = function (request, response) {
    response.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = function (request, response) {
    let q = request.query.q;
    let matchedUsers = db.get('users').value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    response.render('users/index', {
        users: matchedUsers,
        searchValue: q
    });
};

module.exports.create = function (request, response) {
    response.render('users/create');
};

module.exports.get = function (request, response) {
    let id = request.params.id;
    let user = db.get('users')
        .find({ id: id })
        .value();
    response.render('users/view', {
        user: user
    });
};

module.exports.postCreate = function (request, response) {
    request.body.id = shortid.generate();
    db.get('users')
        .push(request.body)
        .write();
    response.redirect('/users');
};