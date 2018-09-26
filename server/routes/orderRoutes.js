import express from 'express';
import { placeOrder, getUserOrderHistory } from '../controllers/ordersController';
import { placeOrderValidator, getOrderHistoryValidator } from '../middlewares/orderInputValidations';
import { verifyToken } from '../middlewares/authorization';

const orderRouter = express.Router();

orderRouter.post('/orders', verifyToken, placeOrderValidator, placeOrder);
orderRouter.get('/users/:userId/orders', verifyToken, getOrderHistoryValidator, getUserOrderHistory);

export default orderRouter;
