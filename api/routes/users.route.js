import express from "express";
import { getOneUser, getUsers, deleteUser, addUser, upadateUser } from "../controllers/users.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get('/',verifyAdmin, getUsers);
router.get('/:id',verifyUser, getOneUser);
router.delete('/:id',verifyUser, deleteUser);
router.put('/:id',verifyUser, upadateUser);
router.post('/',verifyAdmin, addUser);





export default router;