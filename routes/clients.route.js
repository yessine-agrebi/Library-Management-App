import express from "express";
import { getClients } from "../controllers/client.controller.js";


const router = express.Router();


router.get('/', getClients);


export default router;



