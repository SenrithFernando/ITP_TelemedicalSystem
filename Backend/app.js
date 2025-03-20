import express from "express";
import cors from "cors";
import router from "./Routes/PharmacyOrderRoutes.js";

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));

// Mount the router
app.use("/pharmacyOrders", router);

export default app;
