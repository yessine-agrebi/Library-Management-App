import express from "express";
import { getAuteurs, getOneAuthor, updateAuthor, deleteAuthor } from "../controllers/auteur.controller.js";



const router = express.Router();

router.get('/', getAuteurs);
router.get('/:id', getOneAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);



export default router;