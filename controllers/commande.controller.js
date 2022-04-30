import Commande from "../models/commande.model.js";


export const getCommandes = async (req, res) => {
    try {
        const cde = await Commande.find();
        res.status(200).json(cde);
    }catch {
        res.status(404).json({message: error.message});
    }
}


