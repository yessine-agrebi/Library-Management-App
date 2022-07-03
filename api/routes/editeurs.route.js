import express from "express";
import { getEditeur, getOneEditeur, createEditeur, updateEditeur, deleteEditeur } from "../controllers/editeurs.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get('/', getEditeur);
router.get('/:id', getOneEditeur);
router.post('/', createEditeur);
router.put('/:id', updateEditeur);
router.delete('/:id', deleteEditeur);



export default router;