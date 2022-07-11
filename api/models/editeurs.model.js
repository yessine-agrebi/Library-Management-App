import mongoose from "mongoose";

const editeurSchema = mongoose.Schema({
    maised: {type: String, required: true},
    siteweb: {type: String},
    email: {type: String, required: true},
})

const editeurs = mongoose.model('editeurs', editeurSchema );

export default editeurs;