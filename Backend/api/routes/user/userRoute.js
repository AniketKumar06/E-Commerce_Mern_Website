import mongoose from 'mongoose';
import { Router } from 'express';
import { userLoginControllor, userRegisterController } from '../../controllers/user/userController.js';


// Creating routes

const router = Router();

/**
 * Action :REGISTER
 * METHOD: POST
 */

router.post('/register', userRegisterController);

/**
 * Action :LOGIN
 * Method: POST
 */

router.post('/login', userLoginControllor);

export default router;