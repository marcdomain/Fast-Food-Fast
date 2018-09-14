import express from 'express';
import ordersController from '../controllers/ordersController';

const orderRouter = express.Router();

orderRouter.post('/orders', ordersController.placeOrder);

export default orderRouter;
