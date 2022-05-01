import User from "../models/users.model.js";
import {v4 as uuidv4} from 'uuid';


export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch {
        res.status(404).json({message: error.message});
    }
    
}

export const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch {
        res.status(404).json({message: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndRemove(req.params.id);
        res.status(200).json(user);
    }catch {
        res.status(404).json({message: error.message});
    }
}

export const addUser = async (req, res) => {
    const {nom, email, password} = req.body;
    const newUser = new User({nom: nom, email: email, password: password});
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(409).json({ message: error.message });
    }
    

}