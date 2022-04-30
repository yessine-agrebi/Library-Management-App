import User from "../models/users.model.js";


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