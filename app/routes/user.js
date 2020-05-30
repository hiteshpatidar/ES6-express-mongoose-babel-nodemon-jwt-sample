import { Router } from "express";
import { getAll } from "../controllers/userController";

const router = Router();

router.get("/", getAll);

export default router;