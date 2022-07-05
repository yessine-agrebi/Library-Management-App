import editeurs from "../models/editeurs.model.js";
import mongoose from "mongoose";
import { escape } from "html-escaper";
export const getEditeur = async (req, res) => {
    try {
        const liv = await editeurs.find();
        res.status(200).json(liv);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getOneEditeur = async (req, res) => {
    try {
        const editeur = await editeurs.findById(req.params.id);
        res.status(200).json(editeur);
    }catch(error){
        res.send("not found");
    }
}

export const createEditeur = async (req, res) => {
    const { maisonedit, siteweb, email } = req.body;
    
    const newEditeur = new editeurs({ maisonedit:maisonedit, siteweb:siteweb, email:email })

    try {  
        await newEditeur.save();

        res.status(201).json(newEditeur );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEditeur = async (req, res) => {
    const { id } = escape(req.params);
    
    const editeur = escape(req.body);
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("pas d'editeur avec un id: " + escape(id));

    const cl = { ...editeur , _id: id };

    await editeurs.findByIdAndUpdate(req.params.id, editeur);

    res.json(editeur);
};

export const deleteEditeur = async (req, res) => {
    try {
        const editeur = await editeurs.findByIdAndRemove(req.params.id);
        res.status(200).json(editeur)
    }catch(error){
        res.staus(404).json({message: error.message})
    }
}