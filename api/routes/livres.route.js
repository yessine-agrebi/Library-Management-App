import express from "express";
import { getLivres, getOneLivre, createLivre, updateLivre, deleteLivre } from "../controllers/livres.controller.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import multer from "multer";
const router = express.Router();
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({storage: fileStorageEngine});
router.get('/', getLivres);
router.get('/:id', getOneLivre);
router.post('/', upload.single("couverture"), createLivre);
router.put('/:id', updateLivre);
router.delete('/:id', deleteLivre);



export default router;

