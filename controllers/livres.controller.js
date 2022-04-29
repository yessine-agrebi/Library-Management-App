import livres from "../models/livres.model.js";

export const getLivres = async (req, res) => {
    try {
        const livre = await livres.find();
        res.status(200).json(livre);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}