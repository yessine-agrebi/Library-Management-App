import express from "express";
import { getOneUser, getUsers, deleteUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);





export default router;