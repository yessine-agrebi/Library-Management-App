import Commande from "../models/commande.model.js";
import mongoose from "mongoose";
import { escape } from "html-escaper";

export const getCommandes = async (req, res) => {
    try {
        const cde = await Commande.find();
        res.status(200).json(cde);
    }catch {
        res.status(404).json({message: error.message});
    }
}

export const getOneCommande = async (req, res) => {
    try {
        const cmd = await Commande.findById(req.params.id);
        res.status(200).json(cmd);
    }catch(error){
        res.send("not found");
    }
}

export const createCommande = async (req, res) => {
    const commande = escape(req.body);
    const newCommande = new Commande({...commande});
    try {
        await newCommande.save();
        res.status(201).json(newCommande);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateCommande = async (req, res) => {
    const { id } = escape(req.params);
    
    const commande = escape(req.body);
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de commande avec un id: ${id}`);

    const cmnd = { ...commande , _id: id };

    await Commande.findByIdAndUpdate(req.params.id, cmnd);

    res.json(cmnd);
};

export const deleteCommande = async (req, res) => {
    try {
        const cmnd = await Commande.findByIdAndRemove(req.params.id);
        res.status(200).json(cmnd)
    }catch(error){
        res.staus(404).json({message: error.message})
    }
}


