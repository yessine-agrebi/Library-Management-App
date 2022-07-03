import express from "express";
import { getCommandes, getOneCommande, createCommande, updateCommande, deleteCommande } from "../controllers/commande.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


router.get('/',verifyAdmin, getCommandes);
router.get('/:id',verifyAdmin, getOneCommande);
router.post('/',verifyAdmin, createCommande);
router.put('/:id',verifyAdmin, updateCommande);
router.delete('/:id',verifyAdmin, deleteCommande);



export default router;