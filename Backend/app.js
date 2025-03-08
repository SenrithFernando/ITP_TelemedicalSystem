import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
    res.send("It is working db");
});


