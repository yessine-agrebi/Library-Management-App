import Api from "../Axios/Api";

const AUTEURS_API = "/auteurs";


const addAuteur = async(auteur) => {
    return await Api.post(AUTEURS_API, auteur);
}

const getAuteurs = async () => {
    return await Api.get(AUTEURS_API);
}


const getAuteurByID = async (auteurID) => {
    return await Api.get(AUTEURS_API + "/" + auteurID);
}

const deleteAuteur = async (auteurID) => {
    return await Api.delete(AUTEURS_API + "/" +  auteurID);
}

const updateAuteur = async (auteur) => {
    return await Api.put(AUTEURS_API + "/" + auteur._id);
}


export const auteurService = {
    addAuteur,
    getAuteurs,
    getAuteurByID,
    deleteAuteur,
    updateAuteur
}