import mongoose from "mongoose";
import Client from "./client.model.js";

const commandeSch = mongoose.Schema({
    total: {type: Number, required: true},
    refclient: {type: mongoose.SchemaTypes.ObjectId, ref:Client, required: true},
    createdAt: {type: Date},
    updatedAt: {type: Date}
})


const Commande = mongoose.model('commandes', commandeSch);

export default Commande;