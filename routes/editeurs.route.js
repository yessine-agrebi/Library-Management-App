import express from "express";
import { getEditeur } from "../controllers/editeurs.controller.js";

const router = express.Router();

router.get('/', getEditeur);



export default router;