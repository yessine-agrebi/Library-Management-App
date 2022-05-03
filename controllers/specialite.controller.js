import Specialite from "../models/specialite.model.js";
import mongoose from "mongoose";

export const getSpecialites = async (req, res) => {
    try{
        const spec = await Specialite.find();
        res.status(200).json(spec);
    }catch{
        res.status(404).json({message: error.message})
    }
}

export const getOneSpecialite = async (req, res) => {
    try {
        const specialite = await Specialite.findById(req.params.id);
        res.status(200).json(specialite);
    }catch(error){
        res.send("not found");
    }
}

export const createSpecialite = async (req, res) => {
    const specialite = req.body;
    const newspecialite = new Specialite({...specialite});
    try {
        await newspecialite.save();
        res.status(201).json(newspecialite);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateSpecialite = async (req, res) => {
    const { id } = req.params;
    
    const specialite = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de specialite avec un id: ${id}`);

    const spec = { ...specialite , _id: id };

    await Specialite.findByIdAndUpdate(req.params.id, spec);

    res.json(spec);
};

export const deleteSpecialite = async (req, res) => {
    try {
        const specialite = await Specialite.findByIdAndRemove(req.params.id);
        res.status(200).json(specialite)
    }catch(error){
        res.staus(404).json({message: error.message})
    }
}