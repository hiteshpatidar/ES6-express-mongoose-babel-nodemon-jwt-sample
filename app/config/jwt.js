const expressJwt = require('express-jwt');
const userService = require('../service/user.service');
const dbConfig = require("../config/db.config.js");

module.exports = jwt;

function jwt() {
    const secret = dbConfig.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};