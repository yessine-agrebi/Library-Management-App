import livre from "../models/livres.model.js";

export const getLivres = async (req, res) => {
    try {
        const liv = await livre.find();
        res.status(200).json(liv);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}