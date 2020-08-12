let db = require('../db');

let shortid = require('shortid');

module.exports.setSessionId = function(req, res, next){
    if(!req.signedCookies.sessionId){
        let sessionId = shortid.generate();
        res.cookie('sessionId', sessionId, {
            signed: true
        });
        db.get('sessions').push({
            id: sessionId
        }).write();
    }
    next();
};