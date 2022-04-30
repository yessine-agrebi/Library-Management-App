import mongoose from "mongoose";

const auteurSchema = mongoose.Schema({
    nomauteur: {type: String, required: true},
    email: {type: String, required: true},
    numtel: {type: Number, required: true}
});


const Auteur = mongoose.model('auteurs', auteurSchema);

export default Auteur;
