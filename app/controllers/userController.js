import { Router } from 'express';
import userService from '../service/userService';

const router = Router();

function getAll(req, res) {
  userService.getAll()
    .then((users) => res.json(users))
    .catch((err) => res.send(err));
}

function getById(req, res) {
  userService.getById(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => res.send(err));
}

// routes
router.get('/', getAll);
router.get('/:id', getById);

export default router;
