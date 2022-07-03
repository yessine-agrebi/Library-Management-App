import Api from "../Axios/Api";

const EDITEURS_API = "/editeurs";


const addEditeur = async(editeur) => {
    return await Api.post(EDITEURS_API, editeur);
}

const getEditeurs = async () => {
    return await Api.get(EDITEURS_API);
}


const getEditeurByID = async (editeurID) => {
    return await Api.get(EDITEURS_API + "/" + editeurID);
}

const deleteEditeur = async (editeurID) => {
    return await Api.delete(EDITEURS_API + "/" +  editeurID);
}

const updateEditeur = async (editeur) => {
    return await Api.put(EDITEURS_API + "/" + editeur._id);
}


export const editeurService = {
    addEditeur,
    getEditeurs,
    getEditeurByID,
    deleteEditeur,
    updateEditeur
}