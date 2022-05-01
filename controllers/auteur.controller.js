import Auteur from "../models/auteur.model.js";


export const getAuteurs = async (req, res) =>{
    try {
        const auteur = await Auteur.find();
        res.status(200).json(auteur);
    }catch{
        res.status(404).json({message: error.message})
    }
}

export const getOneAuthor = async (req, res) => {
    try {
        const auth = await Auteur.findById(req.params.id);
        res.status(200).json(auth);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}