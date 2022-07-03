import mongoose from "mongoose";
import Auteur from "./auteur.model.js";
import editeurs from "./editeurs.model.js";
import Specialite from "./specialite.model.js";
const livreSchema = mongoose.Schema({
    isbn: {type: String},
    titre: {type: String},
    anneeedition: {type: Number},
    prix: {type: Number},
    qtestock: {type: Number},
    couverture: {type: String},
    
    specialite: {type: mongoose.Schema.Types.ObjectId,ref:Specialite},
    
    maised: {type: mongoose.Schema.Types.ObjectId,ref:editeurs},
    auteurs: {type: mongoose.Schema.Types.Array,ref:Auteur},

    

})

const livres = mongoose.model('livres', livreSchema);

export default livres;