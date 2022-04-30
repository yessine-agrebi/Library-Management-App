import express from "express";
import { getCommandes } from "../controllers/commande.controller.js";

const router = express.Router();


router.get('/', getCommandes);



export default router;