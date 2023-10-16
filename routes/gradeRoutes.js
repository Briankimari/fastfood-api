import express from "express";
import { deleteGrade, getGrade, getGradeById, saveGrade, updateGrade } from "../controller/savegradeContoller.js";



// set router
const router= express.Router();

// assets routes
router.get('/get-grade', getGrade);
router.get('/get-grade/:id',getGradeById);
router.post('/save-grade', saveGrade);
router.patch('/update-grade/:id', updateGrade);
router.delete('/delete-grade/:id', deleteGrade);


export default router;