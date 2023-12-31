import express from 'express'
import { getUser, loginStatus, loginUser, logoutUser, registerUser, updateUser } from '../controller/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);
router.get("/getuser",protect,getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateUser",protect,updateUser);

export default router;