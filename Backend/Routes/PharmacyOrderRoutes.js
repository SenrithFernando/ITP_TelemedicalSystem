import express from 'express';
import { getPharmacyOrders, addPharmacyOrder, getByID } from '../Controlers/PharmacyOrderController.js';
import { get } from 'mongoose';
const router = express.Router();



//insert controller


router.route('/').get(getPharmacyOrders);
router.route('/').post(addPharmacyOrder);
router.route('/:id').get(getByID);

//export
export default router;