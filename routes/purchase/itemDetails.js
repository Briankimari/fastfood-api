import express from "express";
import { deleteDetails, getDetails, getDetailsById, saveDetails, updateDetails } from "../../controller/purchase/itemDetails.js";

// set router
const router= express.Router();

// assets routes
router.get('/api/details', getDetails);
router.get('/api/details/:id',getDetailsById);
router.post('/api/details/:id' ,saveDetails);
router.patch('/api/details/:id', updateDetails);
router.delete('/api/details/:id', deleteDetails);


export default router;