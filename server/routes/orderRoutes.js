import express from 'express';
import ordersController from '../controllers/ordersController';
import validators from '../middlewares/orderInputValidations';

const {
  placeOrder, getAllOrders, fetchSpecificOrder, updateOrder, deleteOrder
} = ordersController;

const { placeOrderValidator, fetchSpecificOrderValidator } = validators;

const orderRouter = express.Router();

orderRouter.post('/orders', placeOrderValidator, placeOrder);
orderRouter.get('/orders', getAllOrders);
orderRouter.get('/orders/:orderId', fetchSpecificOrderValidator, fetchSpecificOrder);
orderRouter.put('/orders/:orderId', fetchSpecificOrderValidator, updateOrder);
orderRouter.delete('/orders/:orderId', fetchSpecificOrderValidator, deleteOrder);

export default orderRouter;
