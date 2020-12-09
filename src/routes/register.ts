import { Router, Request, Response, NextFunction } from 'express';
import * as RegisterController from '../controllers/register';
const router = Router();

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Register page')
// })

router.post('/', RegisterController.registerUser)
  
module.exports = router;