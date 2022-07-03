import Api from "../Axios/Api";

const SPECIALITE_API = "/specialites";


const addSpecialite = async(specialite) => {
    return await Api.post(SPECIALITE_API, specialite);
}

const getSpecialites = async () => {
    return await Api.get(SPECIALITE_API);
}


const getSpecialiteByID = async (specialiteID) => {
    return await Api.get(SPECIALITE_API + "/" + specialiteID);
}

const deleteSpecialite = async (specialiteID) => {
    return await Api.delete(SPECIALITE_API + "/" +  specialiteID);
}

const updateSpecialite = async (specialite) => {
    return await Api.put(SPECIALITE_API + "/" + specialite._id);
}


export const specialiteService = {
    addSpecialite,
    getSpecialites,
    getSpecialiteByID,
    deleteSpecialite,
    updateSpecialite
}