import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
    nom: {type: String, required: true},
    adress: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, required: true}
})


const Client = mongoose.model('clients', clientSchema);

export default Client;