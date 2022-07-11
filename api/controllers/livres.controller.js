import livres from "../models/livres.model.js";
import mongoose from "mongoose";
import { escape } from "html-escaper";

export const getLivres = async (req, res) => {
    try {
        const livre = await livres.find().populate('auteurs').populate('specialite').populate('maised');
        res.status(200).json(livre);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getOneLivre = async (req, res) => {
    try {
        const livre = await livres.findById(req.params.id).populate('auteurs').populate('specialite').populate('maised');
        res.status(200).json(livre);
    }catch(error){
        res.send("not found");
    }
}

export const createLivre = async (req, res, next) => { 
    //const url = req.protocol + '://' + req.get('host') + '/public/images/'
    const couv = req.file.filename
    const newLivre = new livres({ 
        isbn:req.body.isbn,
        titre:req.body.titre,
        prix:req.body.prix,
        annedition:req.body.annedition,
        couverture:couv,
        qtestock:req.body.qtestock,
        auteurs:req.body.auteurs,
        maised:req.body.maisonedit,
        specialite:req.body.specialite
    })

    try {  
        await newLivre.save();

        res.status(201).json(newLivre );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateLivre = async (req, res) => {
    const { id } = req.params;
    const couv = req.file.filename

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de livre avec un id: ${id}`);

    const liv1 = { 
        isbn:req.body.isbn,
        titre:req.body.titre,
        annedition:req.body.annedition,
        prix:req.body.prix,
        qtestock:req.body.qtestock,
        couverture: couv,
        specialite:req.body.specialite,
        maised:req.body.maised,
        auteurs:req.body.auteurs,
         _id: id };

    await livres.findByIdAndUpdate(id, liv1);

    res.json(liv1);
};

export const deleteLivre = async (req, res) => {
    try {
        const livre = await livres.findByIdAndRemove(req.params.id);
        res.status(200).json(livre)
    }catch(error){
        res.staus(404).json({message: error.message})
    }
}