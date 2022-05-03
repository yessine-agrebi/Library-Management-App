import express from "express";
import { getLivres, getOneLivre, createLivre, updateLivre, deleteLivre } from "../controllers/livres.controller.js";

const router = express.Router();

router.get('/', getLivres);
router.get('/:id', getOneLivre);
router.post('/', createLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);



export default router;

