import mongoose from "mongoose";

const specialiteSch = mongoose.Schema({
    _id: ObjectID,
    npmspecialite: String
});


const Specialite = mongoose.model('specialites', specialiteSch);


export default Specialite;