import express from "express";
; // Adjust the path as needed
import router from "./Routes/PharmacyOrderRoutes.js";

const app = express();
app.use(express.json());

// Mount the router on a specific path
app.use("/pharmacyOrders", router);

// Default route


export default app;