import { Router } from 'express';
import userService from '../service/userService';

const router = Router();

function getAllUsers(req, res) {
  userService.getAllUsers()
    .then((users) => res.json(users))
    .catch((err) => res.send(err));
}

function getUser(req, res) {
  userService.getUser(req.params.id)
    .then((user) => (user ? res.json(user) : res.sendStatus(404)))
    .catch((err) => res.send(err));
}

function createUser(req, res) {
  userService.createUser(req.body)
    .then(() => res.json({}))
    .catch((err) => res.send(err));
}

function updateUser(req, res) {
  userService.updateUser(req.params.id, req.body)
    .then(() => res.json({}))
    .catch((err) => res.send(err));
}

function deleteUser(req, res) {
  userService.deleteUser(req.params.id)
    .then(() => res.json({}))
    .catch((err) => res.send(err));
}

// routes
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/createUser', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
