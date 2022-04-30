import User from "../models/users.model.js";


export const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    }catch {
        res.status(404).json({message: error.message});
    }
    
}