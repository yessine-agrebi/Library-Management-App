import express from "express";
import { getCommandes, getOneCommande, createCommande, updateCommande, deleteCommande } from "../controllers/commande.controller.js";

const router = express.Router();


router.get('/', getCommandes);
router.get('/:id', getOneCommande);
router.post('/', createCommande);
router.put('/:id', updateCommande);
router.delete('/:id', deleteCommande);



export default router;