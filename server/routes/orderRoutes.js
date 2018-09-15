import express from 'express';
import ordersController from '../controllers/ordersController';
import validators from '../middlewares/orderInputValidations';

const orderRouter = express.Router();

orderRouter.post('/orders', validators.placeOrderValidator, ordersController.placeOrder);
orderRouter.get('/orders', ordersController.getAllOrders);

export default orderRouter;
