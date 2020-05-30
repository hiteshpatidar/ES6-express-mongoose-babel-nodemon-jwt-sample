import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConfig from "../config/dbConfig.js";
import user from '../models/userModel';
import { Router } from "express";

const router = Router();

router.get("/", authenticate);

export default router;

const User = user;

function authenticate(req, res, next){
    userAuthenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}

async function userAuthenticate({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...userWithoutPassword } = user.toObject();
        const token = jwt.sign({ sub: user.id, ...userWithoutPassword }, dbConfig.secret);
        return {
            token
        };
    }
}
