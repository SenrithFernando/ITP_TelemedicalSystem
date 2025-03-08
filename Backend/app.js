import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
    res.send("It is working db");
});

// MongoDB connection string
const MONGO_URI = "mongodb+srv://user:OpJOqPZACOoI4okW@cluster0.pwzrm.mongodb.net/";

mongoose
    .connect(MONGO_URI) // Removed deprecated options
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.log(err));
