import express from 'express';
import {
  placeOrder,
  getAllOrders,
  fetchSpecificOrder,
  updateOrder,
  deleteOrder
} from '../controllers/ordersController';
import {
  placeOrderValidator,
  fetchSpecificOrderValidator
} from '../middlewares/orderInputValidations';
import { verifyToken } from '../middlewares/authorization';

const orderRouter = express.Router();

// orderRouter.post('/orders', verifyToken, placeOrderValidator, placeOrder);
orderRouter.post('/orders', verifyToken, placeOrder);
orderRouter.get('/orders', getAllOrders);
orderRouter.get('/orders/:orderId', fetchSpecificOrderValidator, fetchSpecificOrder);
orderRouter.put('/orders/:orderId', fetchSpecificOrderValidator, updateOrder);
orderRouter.delete('/orders/:orderId', fetchSpecificOrderValidator, deleteOrder);

export default orderRouter;
