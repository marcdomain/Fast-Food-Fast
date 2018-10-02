import express from 'express';
import {
  postMenu, getAllMenu, updateMenuItem, deleteMenu
} from '../controllers/menusController';
import { verifyToken, authorizedAdmin } from '../middlewares/authorization';
import {
  postMenuValidator, getSpecificMenuValidator
} from '../middlewares/menuInputValidations';

const menuRouter = express.Router();

menuRouter.post('/menu', verifyToken, authorizedAdmin, postMenuValidator, postMenu);
menuRouter.get('/menu', getAllMenu);
menuRouter.put('/menu/:menuId', verifyToken, authorizedAdmin, getSpecificMenuValidator, postMenuValidator, updateMenuItem);
menuRouter.delete('/menu/:menuId', verifyToken, authorizedAdmin, getSpecificMenuValidator, deleteMenu);

export default menuRouter;
