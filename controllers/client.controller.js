import Client from "../models/client.model.js"

const getClients = async (req, res) => {
    try {
        const client = await Client.find();
        res.status(200).json(client);
    }catch {
        
    }
}