import express from 'express';
import ordersController from '../controllers/ordersController';
import validators from '../middlewares/orderInputValidations';

const orderRouter = express.Router();

orderRouter.post('/orders', validators.placeOrderValidator, ordersController.placeOrder);
orderRouter.get('/orders', ordersController.getAllOrders);
orderRouter.get('/orders/:orderId', validators.fetchSpecificOrderValidator, ordersController.fetchSpecificOrder);
orderRouter.put('/orders/:orderId', validators.fetchSpecificOrderValidator, ordersController.updateOrder);

export default orderRouter;
