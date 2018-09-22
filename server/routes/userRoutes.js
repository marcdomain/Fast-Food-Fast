import express from 'express';
import userSignup from '../controllers/usersController';
import signupValidator from '../middlewares/authInputValidations';

const userRouter = express.Router();

userRouter.post('/auth/signup', signupValidator, userSignup);
// userRouter.post('/auth/signup', userSignup);

export default userRouter;
