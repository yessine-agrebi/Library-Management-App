import express from "express";
import { getAuteurs, getOneAuthor } from "../controllers/auteur.controller.js";



const router = express.Router();

router.get('/', getAuteurs);
router.get('/:id', getOneAuthor);



export default router;