import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import livreRouter from "./routes/livres.route.js";
import editeurRouter from "./routes/editeurs.route.js";
import auteurRouter from "./routes/auteurs.route.js";
import specialiteRouter from "./routes/specialites.route.js";
import clientRouter from "./routes/clients.route.js";
import commandeRouter from "./routes/commande.route.js";
import userRouter from "./routes/users.route.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
const db = process.env.DATABASE;
const port = 3001;
//app.use(express.json());
app.use(cookieParser());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1/lib");

app.use("/public", express.static("public"));
app.use("/images", express.static("images"));
app.use("/api/auth", authRoute);
app.use("/api/livres", livreRouter);
app.use("/api/editeurs", editeurRouter);
app.use("/api/auteurs", auteurRouter);
app.use("/api/specialites", specialiteRouter);
app.use("/api/clients", clientRouter);
app.use("/api/commandes", commandeRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    messagege: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`app running on port ${port}`));
