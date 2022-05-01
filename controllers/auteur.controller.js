import Auteur from "../models/auteur.model.js";
import mongoose from "mongoose";


export const getAuteurs = async (req, res) =>{
    try {
        const auteur = await Auteur.find();
        res.status(200).json(auteur);
    }catch{
        res.status(404).json({message: error.message})
    }
}

export const getOneAuthor = async (req, res) => {
    try {
        const auth = await Auteur.findById(req.params.id);
        res.status(200).json(auth);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const updateAuthor = async (req, res) => {
    const { id } = req.params;
    
    const { nomauteur, email, numtel} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas d'auteur avec un id: ${id}`);

    const auth = { nomauteur:nomauteur,email: email, numtel: numtel, _id: id };

    await Auteur.findByIdAndUpdate(req.params.id, auth);

    res.json(auth);
}

export const deleteAuthor = async (req, res) => {
    try {
        const auth = Auteur.findByIdAndRemove(req.params.id);
        res.status(200).json(auth)
    }catch(error){
        res.staus(404).json({message: error.message})
    }
}