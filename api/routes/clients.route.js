import express from "express";
import { getClients, getOneClient, createClient, updateClient, deleteClient } from "../controllers/client.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


router.get('/',verifyAdmin, getClients);
router.get('/:id',verifyAdmin, getOneClient);
router.post('/',verifyAdmin, createClient);
router.put('/:id',verifyAdmin, updateClient);
router.delete('/:id',verifyAdmin, deleteClient);


export default router;



