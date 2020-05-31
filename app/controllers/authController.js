import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Router } from 'express';
import dbConfig from '../config/dbConfig';
import user from '../models/userModel';

const router = Router();

const User = user;

async function userAuthenticate({ username, password }) {
  const userData = await User.findOne({ username });
  if (userData && bcrypt.compareSync(password, userData.password)) {
    const { pwd, ...userWithoutPassword } = userData.toObject();
    const token = jwt.sign({ sub: user.id, ...userWithoutPassword }, dbConfig.secret);
    return {
      token
    };
  }
  return false;
}

function authenticate(req, res, next) {
  userAuthenticate(req.body)
    .then((userData) => (userData ? res.json(userData) : res.status(400).json({ message: 'Username or password is incorrect' })))
    .catch((err) => next(err));
}

router.get('/', authenticate);

export default router;
