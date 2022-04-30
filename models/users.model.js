import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    nom: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})


const User = mongoose.model('users', userSchema);

export default User;