import express from "express";
import { deletePayment, getPayment, getPaymentById, savePayment, updatePayment } from "../../controller/vintagePayment/payment";

// set router
const router= express.Router();

// assets routes
router.get('/payment', getPayment);
router.get('/payment/:id', getPaymentById);
router.post('/payment', savePayment);
router.patch('/payment/:id', updatePayment);
router.delete('/payment/:id', deletePayment);


export default router;