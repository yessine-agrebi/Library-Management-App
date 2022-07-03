import Client from "../models/client.model.js";
import mongoose from "mongoose";
import { escape } from "html-escaper";
export const getClients = async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    }catch {
        res.status(404).json({message: error.message});
    }
}


export const getOneClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
    }catch(error){
        res.send("not found");
    }
}

export const createClient = async (req, res) => {
    const client = escape(req.body);
    const newClient = new Client({...client});
    try {
        await newClient.save();
        res.status(201).json(newClient);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const updateClient = async (req, res) => {
    const { id } = escape(req.params);
    
    const client = escape(req.body);
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("pas de client avec un id: " + escape(id));

    const cl = { ...client , _id: id };

    await Client.findByIdAndUpdate(req.params.id, cl);

    res.json(cl);
};

export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndRemove(req.params.id);
        res.status(200).json(client)
    }catch(error){
        res.staus(404).json({message: error.message})
    }
}