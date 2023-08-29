import mongoose from 'mongoose';
import { Router } from 'express';
import { userRegisterController } from '../../controllers/user/userController.js';


// Creating routes

const router = Router();

/**Action :REGISTER
 * METHOD: POST
 */

router.post('/register', userRegisterController)

export default router;