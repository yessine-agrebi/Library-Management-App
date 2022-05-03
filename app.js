import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

mongoose.connect(db, {
    useNewUrlParser: true,
}).then(() => console.log("database connected successfully")).catch(err => {console.log("Connection to database rejected", err);
process.exit();
});

app.use(express.json());
app.use("/livres", livreRouter);
app.use("/editeurs", editeurRouter);
app.use("/auteurs", auteurRouter);
app.use("/specialites", specialiteRouter);
app.use("/clients", clientRouter);
app.use("/commandes", commandeRouter);
app.use("/users", userRouter);




app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => console.log(`app running on port ${port}`));
