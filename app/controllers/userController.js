import userService  from "../service/userService";
import { Router } from "express";

const router = Router();

//routes
router.get("/", getAll);
router.get('/:id', getById);

export default router;

function getAll(req, res) {
    userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getById(req, res) {
    userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}
