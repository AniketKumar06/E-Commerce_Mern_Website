import express from 'express';
import { adminLoginControllor, adminRegisterController } from '../../controllers/admin/adminController.js';

const router  = express.Router();

/**
 * Action :Register
 * Method : POST
 */

router.post('/register',adminRegisterController);

/**
 * Action : Login
 * Method : POST
 */

router.post('/login',adminLoginControllor);

export default router;