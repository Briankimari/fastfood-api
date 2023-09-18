import express from "express";
import { deleteProfile, getProfile, getProfileById, saveProfile, updateProfile } from "../controller/EditProfile.js";

// set router
const router= express.Router();

// assets routes
router.get('/edited-profile', getProfile);
router.get('/edit-profile/:id', getProfileById);
router.post('/edit-profile', saveProfile);
router.patch('/editprofile/:id', updateProfile);
router.delete('/edit-profile/:id', deleteProfile);


export default router;