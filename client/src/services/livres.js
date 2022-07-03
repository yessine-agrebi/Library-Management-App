import Api from "../Axios/Api";

const LIVRES_API = "/livres";

const addLivre = async (livre) => {
    return await Api.post(LIVRES_API, livre);
}

const getLivres = async () => {
    return await Api.get(LIVRES_API);
}

const getLivreByID = async (livreID) => {
    return await Api.get(LIVRES_API + "/" + livreID);
}

const deleteLivre = async (livreID) => {
    return await Api.delete(LIVRES_API + "/" +  livreID);
}

const updateLivre = async (livre) => {
    return await Api.put(LIVRES_API + "/" + livre._id);
}


export const livreService = {
    addLivre,
    getLivres,
    getLivreByID,
    deleteLivre,
    updateLivre
}
