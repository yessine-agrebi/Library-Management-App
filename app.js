import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import livreRouter from "./routes/livres.route.js";
import editeurRouter from "./routes/editeurs.route.js";
import auteurRouter from "./routes/auteurs.route.js";
import specialiteRouter from "./routes/specialites.route.js";
import clientRouter from "./routes/clients.route.js";
import commandeRouter from "./routes/commande.route.js";
import userRouter from "./routes/users.route.js"

dotenv.config();
const app = express();
const db = process.env.DATABASE;
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("database connected successfully")).catch(err => {console.log("Connection to database rejected", err);
process.exit();
});


app.use("/api/livres", livreRouter);
app.use("/api/editeurs", editeurRouter);
app.use("/api/auteurs", auteurRouter);
app.use("/api/specialites", specialiteRouter);
app.use("/api/clients", clientRouter);
app.use("/api/commandes", commandeRouter);
app.use("/api/users", userRouter);




app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => console.log(`app running on port ${port}`));
