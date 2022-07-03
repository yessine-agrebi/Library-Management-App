import mongoose from "mongoose";

const specialiteSch = mongoose.Schema({
    npmspecialite: String
});


const Specialite = mongoose.model('specialites', specialiteSch);


export default Specialite;