import mongoose from "mongoose";
import Auteur from "./auteur.model.js";
import editeurs from "./editeurs.model.js";
const livreSchema = mongoose.Schema({
    isbn: {type: String, required: true},
    titre: {type: String, required: true},
    anneeedition: {type: Number, required: true},
    prix: {type: Number, required: true},
    qtestock: {type: Number, required: true},
    couverture: {type: String, required: true},
    maised: {type: mongoose.Schema.Types.ObjectId,ref:editeurs, required: true,},
    auteurs: {type: mongoose.Schema.Types.Array,ref:Auteur, required: true},

    

})

const livres = mongoose.model('livres', livreSchema);

export default livres;