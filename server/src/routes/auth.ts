import express from 'express';
import { registerController, loginController, getUserNmae } from '../controllers/auth';

const router = express.Router();

// User registration route
router.post('/register', registerController);

// User login route
router.post('/login', loginController);

router.get('/user', getUserNmae)

export default router;
