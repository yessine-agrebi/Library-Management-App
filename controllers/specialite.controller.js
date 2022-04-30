import Specialite from "../models/specialite.model.js";

export const getSpecialites = async (req, res) => {
    try{
        const spec = await Specialite.find();
        res.status(200).json(spec);
    }catch{
        res.status(404).json({message: error.message})
    }
}