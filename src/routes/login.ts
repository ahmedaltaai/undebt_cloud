import { Router } from 'express';
import * as LoginController from '../controllers/login';
const router = Router();

router.post('/', LoginController.loginUser)
  
module.exports = router;