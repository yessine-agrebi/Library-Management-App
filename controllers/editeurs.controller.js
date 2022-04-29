import editeur from "../models/editeurs.model.js";

export const getEditeur = async (req, res) => {
    try {
        const liv = await editeur.find();
        res.status(200).json(liv);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}