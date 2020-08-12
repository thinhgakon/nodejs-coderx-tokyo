module.exports.postCreate = function (req, res, next) {
    let errors = [];

    if (!req.body.name.length) {
        errors.push('Name is required');
    }
    if (!req.body.phone.length) {
        errors.push('Phone is required');
    }

    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    }
    
    next();
};