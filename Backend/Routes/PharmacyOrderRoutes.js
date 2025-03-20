import express from 'express';
import { getPharmacyOrders, addPharmacyOrder } from '../Controlers/PharmacyOrderController.js';
const router = express.Router();



//insert controller


router.route('/').get(getPharmacyOrders);
router.route('/').post(addPharmacyOrder);

//export
export default router;