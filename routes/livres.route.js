import express from "express";
import { getLivres } from "../controllers/livres.controller.js";

const router = express.Router();

router.get('/', getLivres);



export default router;

