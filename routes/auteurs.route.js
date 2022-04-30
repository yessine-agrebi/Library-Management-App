import express from "express";
import { getAuteurs } from "../controllers/auteur.controller.js";



const router = express.Router();

router.get('/', getAuteurs);



export default router;