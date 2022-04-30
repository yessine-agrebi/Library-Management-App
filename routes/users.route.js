import express from "express";
import { getUsers } from "../controllers/users.controller.js";

const router = express.router();

router.get('/', getUsers);




export default router;