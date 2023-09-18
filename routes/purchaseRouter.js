import express from "express";
import { deletePurchase, getPurchase, getPurchaseById, savePurchase, updatePurchase } from "../controller/purchaseController.js";

// set router
const router= express.Router();

// assets routes
router.get('/order', getPurchase);
router.get('/purchase/:id', getPurchaseById);
router.post('/purchase', savePurchase);
router.patch('/purchase/:id', updatePurchase);
router.delete('/purchase/:id', deletePurchase);


export default router;