import express from 'express';
import placeOrder from '../controllers/ordersController';
import placeOrderValidator from '../middlewares/orderInputValidations';
import { verifyToken } from '../middlewares/authorization';

const orderRouter = express.Router();

orderRouter.post('/orders', verifyToken, placeOrderValidator, placeOrder);

export default orderRouter;
