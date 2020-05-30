import expressJwt from 'express-jwt';
import userService  from '../service/userService';
import  dbConfig  from "./dbConfig.js";

export default jwt;

function jwt() {
    const secret = dbConfig.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/authenticate'
            // '/api/users'
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