import express from 'express';
import { createUser, getuserBYEmail,getusers } from '../controllers/users.controller.js';
const router = express.Router();
router.post('/register', createUser);
// localhost:3001/api/users/login
router.post('/login', getuserBYEmail);
router.get('/', getusers);

export default router;