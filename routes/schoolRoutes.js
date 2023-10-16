import express from "express";
import { deleteSchool, getSchool, getSchoolById, saveSchool, updateSchool } from "../controller/schoolController.js";


// set router
const router= express.Router();

// assets routes
router.get('/get-student', getSchool);
router.get('/get-student/:id', getSchoolById);
router.post('/save-student', saveSchool);
router.patch('/update-student/:id', updateSchool);
router.delete('/delete-student/:id', deleteSchool);


export default router;