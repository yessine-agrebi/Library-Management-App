import express from "express";
import { getSpecialites } from "../controllers/specialite.controller.js";


const router = express.Router();


router.get('/', getSpecialites);


export default router;