import express from "express";
import { deleteGrade, getGrade, getGradeById, saveGrade, updateGrade } from "../controller/savegradeContoller.js";



// set router
const router= express.Router();

// assets routes
router.get('/get-grade', getGrade);
router.get('/get-grade/:id',getGradeById);
router.post('/get-grade', saveGrade);
router.patch('/get-grade/:id', updateGrade);
router.delete('/get-grade/:id', deleteGrade);


export default router;