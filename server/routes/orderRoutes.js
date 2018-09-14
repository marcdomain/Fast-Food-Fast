import express from 'express';
import ordersController from '../controllers/ordersController';

const orderRouter = express.Router();

orderRouter.post('/api/v1', ordersController.placeOrder);

export default orderRouter;
