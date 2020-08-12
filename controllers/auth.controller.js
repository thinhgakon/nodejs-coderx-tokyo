let md5 = require('md5');

let db = require('../db');

module.exports.login = function (req, res) {
    res.render('auth/login');
};

module.exports.postLogin = function (req, res) {
    let errors = [];
    let email = req.body.email;
    let password = req.body.password;
    let user = null;

    if (!email.length || !password.length) {
        errors.push('Email and password is required');
    } else {
        user = db.get('users').find({ email: email }).value();
        if (!user) {
            errors.push('User does not exist');
        } else if(user.password !== md5(password)){
            errors.push('Password is incorect');
        }
    }

    if (errors.length) {
        res.render('auth/login', {
            errors: errors,
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id, {
        signed: true
    });
    res.redirect('/users');
};