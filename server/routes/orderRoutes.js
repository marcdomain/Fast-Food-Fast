import express from 'express';
import {
  placeOrder, getUserOrderHistory, getAllOrders, getSpecificOrder
} from '../controllers/ordersController';
import {
  placeOrderValidator, getOrderHistoryValidator, getSpecificOrderValidator
} from '../middlewares/orderInputValidations';
import { verifyToken, authorizedAdmin } from '../middlewares/authorization';

const orderRouter = express.Router();

orderRouter.post('/orders', verifyToken, placeOrderValidator, placeOrder);
orderRouter.get('/users/:userId/orders', verifyToken, getOrderHistoryValidator, getUserOrderHistory);
orderRouter.get('/orders', verifyToken, authorizedAdmin, getAllOrders);
orderRouter.get('/orders/:orderId', verifyToken, authorizedAdmin, getSpecificOrderValidator, getSpecificOrder);

export default orderRouter;
