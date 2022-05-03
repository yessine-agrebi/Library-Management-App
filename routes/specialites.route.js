import express from "express";
import { getSpecialites, getOneSpecialite, createSpecialite, updateSpecialite, deleteSpecialite } from "../controllers/specialite.controller.js";


const router = express.Router();


router.get('/', getSpecialites);
router.get('/:id', getOneSpecialite);
router.post('/', createSpecialite);
router.put('/:id', updateSpecialite);
router.delete('/:id', deleteSpecialite);


export default router;