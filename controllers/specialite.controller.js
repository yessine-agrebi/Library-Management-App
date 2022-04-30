import Specialite from "../models/specialite.model";

export const getSpecialite = async (req, res) => {
    try{
        const spec = await Specialite.find();
        res.status(200).json(spec);
    }catch{
        res.status(404).json({message: error.message})
    }
}