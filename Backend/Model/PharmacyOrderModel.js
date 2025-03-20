import mongoose from "mongoose";


const PharmacyOrderSchema = new mongoose.Schema({
    orderID: { type: String, required: true },
    orderDate: { type: Date, required: true },
    orderStatus: { type: String, required: true },
    fullName: {type: String,required: true,},
    PatientID: {type: String,required: true,},
    phone: {type: String,required: true,},
    address: {type: String,required: true,},
    doctorName: {type: String,required: true,},
    quantity: {type: Number,required: true,},
    prescriptionID: {type: String,required: true,} 
});


const PharmacyOrder = mongoose.model('PharmacyOrder', PharmacyOrderSchema);
export default PharmacyOrder;   