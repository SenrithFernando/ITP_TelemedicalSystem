import express from "express";


const app = express();
app.use(express.json());

app.use("/", (req, res) => {
    res.send("It is working db");
});

export default app;
