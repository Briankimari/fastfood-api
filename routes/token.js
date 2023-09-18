 import express from 'express';
 import {createToken,postStk} from '../controller/token.js'

const router= express.Router();



 router.post('/',createToken,postStk)

export default router;