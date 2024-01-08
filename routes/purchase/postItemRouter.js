import express from "express";
import { deletePostItem, getItemPost, getItemPostById, savePostItem, updatePostItem } from "../../controller/purchase/postItem.js";
import { savePurchaseWithUpload } from "../../controller/purchaseController.js";

// set router
const router= express.Router();

// assets routes
router.get('/get-posts', getItemPost);
router.get('/get-posts/:id',getItemPostById);
router.post('/save-posts',savePurchaseWithUpload ,savePostItem);
router.patch('/update-post/:id', updatePostItem);
router.delete('/delete-post/:id', deletePostItem);


export default router;