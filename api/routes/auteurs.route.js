import express from "express";
import { getAuteurs, getOneAuthor, createAuthor, updateAuthor, deleteAuthor } from "../controllers/auteur.controller.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();

router.get('/', getAuteurs);
router.get('/:id', getOneAuthor);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);



export default router;