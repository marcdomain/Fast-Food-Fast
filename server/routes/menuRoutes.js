import express from 'express';
import { postMenu, getAllMenu } from '../controllers/menusController';
import { verifyToken, authorizedAdmin } from '../middlewares/authorization';
import postMenuValidator from '../middlewares/menuInputValidations';

const menuRouter = express.Router();

menuRouter.post('/menu', verifyToken, authorizedAdmin, postMenuValidator, postMenu);
menuRouter.get('/menu', getAllMenu);

export default menuRouter;
