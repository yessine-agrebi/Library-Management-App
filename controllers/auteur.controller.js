import Auteur from "../models/auteur.model";


export const getAuteurs = async (req, res) =>{
    try {
        const auteur = await Auteur.find();
        res.status(200).json(auteur);
    }catch{
        res.status(404).json({message: error.message})
    }
}