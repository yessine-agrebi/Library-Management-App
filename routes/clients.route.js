import express from "express";
import { getClients, getOneClient, createClient } from "../controllers/client.controller.js";


const router = express.Router();


router.get('/', getClients);
router.get('/:id', getOneClient);
router.post('/', createClient);


export default router;



