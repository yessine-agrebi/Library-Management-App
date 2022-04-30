import Client from "../models/client.model.js"

export const getClients = async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    }catch {
        res.status(404).json({message: error.message});
    }
}