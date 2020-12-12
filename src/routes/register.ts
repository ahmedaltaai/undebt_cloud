import { Router, Request, Response, NextFunction } from 'express';
import * as RegisterController from '../controllers/register';
const router = Router();

router.post('/', RegisterController.registerUser)
  
module.exports = router;