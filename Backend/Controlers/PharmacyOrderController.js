import PharmacyOrder from '../Model/PharmacyOrderModel.js';

export const getPharmacyOrders = async (req, res, next) => {
    let pharmacyOrders;
    try {
        pharmacyOrders = await PharmacyOrder.find();
    } catch (err) {
        const error = new Error('Fetching pharmacy orders failed, please try again later.');
        return next(error);
    }

    //not found oders
    if (!pharmacyOrders) {
        const error = new Error('Could not find pharmacy orders.');
        return next(error);
    }

    return res.status(200).json({ pharmacyOrders});
};


export const addPharmacyOrder = async (req, res, next) => {
    const { orderID, orderDate, orderStatus, fullName, PatientID, phone, address, doctorName, quantity, prescriptionID } = req.body;

   let PharmacyOrder;

    try {
        PharmacyOrder = new PharmacyOrder({
            orderID,
            orderDate,
            orderStatus,
            fullName,
            PatientID,
            phone,
            address,
            doctorName,
            quantity,
            prescriptionID
        });
        await PharmacyOrder.save();
    } catch (err) {
        console.log(err);
    }

    if (!PharmacyOrder) {
        const error = new Error('Creating pharmacy order failed, please try again.');
        return next(error);
    }

    return res.status(201).json({ pharmacyOrder: createdOrder });
}


