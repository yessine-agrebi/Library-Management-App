import Commande from "../models/commande.model.js";


const getCommandes = async (req, res) => {
    try {
        const cde = await Commande.find()
    }
}