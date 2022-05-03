import express from "express";
import { getClients, getOneClient, createClient, updateClient } from "../controllers/client.controller.js";


const router = express.Router();


router.get('/', getClients);
router.get('/:id', getOneClient);
router.post('/', createClient);
router.put('/:id', updateClient);


export default router;



