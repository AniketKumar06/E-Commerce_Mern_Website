import express from 'express';
import { getAllUser, signup } from '../controller/user-controller';

//used router from the express
const router = express.Router();

//now put required for it meas GET, POST,ETC

// putting controller function here so need to create first controller
router.get('/', getAllUser);
router.post('/signup', signup)


export default router;