import express from 'express';
import { getPharmacyOrders, addPharmacyOrder, getByID, updateOrder, deleteOrder } from '../Controlers/PharmacyOrderController.js';
import { get } from 'mongoose';
const router = express.Router();



//insert controller


router.route('/').get(getPharmacyOrders);
router.route('/').post(addPharmacyOrder);
router.route('/:id').get(getByID);
router.route('/:id').patch(updateOrder);
router.route('/:id').delete(deleteOrder);

//export
export default router;