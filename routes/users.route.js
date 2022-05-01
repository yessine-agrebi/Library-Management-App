import express from "express";
import { getOneUser, getUsers, deleteUser, addUser, upadateUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', upadateUser);
router.post('/', addUser);





export default router;