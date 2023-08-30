import express from 'express';
import { adminRegisterController } from '../../controllers/admin/adminController.js';

const router  = express.Router();

/**
 * Action :Register
 * Method : POST
 */

router.post('/register',adminRegisterController);

export default router;