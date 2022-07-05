import express from "express";
import { getLivres, getOneLivre, createLivre, updateLivre, deleteLivre } from "../controllers/livres.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import upload from "./upload.js";
const router = express.Router();

router.get('/', getLivres);
router.get('/:id', getOneLivre);
router.post('/', upload, createLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);



export default router;

