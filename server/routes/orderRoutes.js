import express from 'express';
import { placeOrder, getUserOrderHistory, getAllOrders } from '../controllers/ordersController';
import { placeOrderValidator, getOrderHistoryValidator } from '../middlewares/orderInputValidations';
import { verifyToken, authorizedAdmin } from '../middlewares/authorization';

const orderRouter = express.Router();

orderRouter.post('/orders', verifyToken, placeOrderValidator, placeOrder);
orderRouter.get('/users/:userId/orders', verifyToken, getOrderHistoryValidator, getUserOrderHistory);
orderRouter.get('/orders', verifyToken, authorizedAdmin, getAllOrders);

export default orderRouter;
