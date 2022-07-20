import express from 'express';
import {updateUser, deleteUser , getOneUser, getUsers } from '../controllers/users.controller.js';
const router = express.Router();
router.get('/', getUsers);
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser)

export default router;