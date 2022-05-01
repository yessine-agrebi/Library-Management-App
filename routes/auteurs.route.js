import express from "express";
import { getAuteurs, getOneAuthor, updateUser } from "../controllers/auteur.controller.js";



const router = express.Router();

router.get('/', getAuteurs);
router.get('/:id', getOneAuthor);
router.put('/:id', updateUser);



export default router;