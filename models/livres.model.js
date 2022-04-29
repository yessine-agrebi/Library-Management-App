import mongoose from "mongoose";
import editeur from "./editeurs.model.js";
const livreSchema = mongoose.Schema({
    isbn: {type: String, required: true},
    titre: {type: String, required: true},
    anneeedition: {type: Number, required: true},
    prix: {type: Number, required: true},
    qtestock: {type: Number, required: true},
    couverture: {type: String, required: true},
    maised: {type: mongoose.Schema.Types.ObjectId,ref:editeur, required: true,},
    auteurs: {type: Array, required: true},

    

})

const livre = mongoose.model('livres', livreSchema);

export default livre;