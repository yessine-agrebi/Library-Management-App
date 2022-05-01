import express from "express";
import { getOneUser, getUsers, deleteUser, addUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.post('/', addUser);





export default router;