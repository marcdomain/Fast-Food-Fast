import orders from '../in-memoryData/orders';
import pool from '../db/connection';
import { createOrder } from '../db/sqlQueries';

/**
  * @description class representing Orders controller action
  *
  * @class OrderHandler
  */

class OrderHandler {
  /**
  * @description - This method is responsible for creating new order
  *
  * @static
  * @param {object} request - Request sent to the router
  * @param {object} response - Response sent from the controller
  *
  * @returns {object} - status and object representing response message
  *
  * @memberof OrderHandler
  */

  static placeOrder(request, response) {
    const { menuId, quantity, location } = request.body;
    const userId = request.authData.payload.id;
    const variables = [userId, menuId, quantity, location || request.authData.payload.address];
    pool.query(createOrder, variables)
      .then(() => response.status(201)
        .json({
          message: 'Order placed successfully',
        }))
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }

  static getAllOrders(request, response) {
    return response.status(200)
      .json({
        message: 'List of all orders',
        orders
      });
  }

  static fetchSpecificOrder(request, response) {
    const { fetchedOrder } = request.body;
    return response.status(200)
      .json({
        message: 'Order fetched successfully',
        fetchedOrder
      });
  }

  static updateOrder(request, response) {
    const { fetchedOrder } = request.body;

    if (request.body.status === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Status cannot be undefined'
        });
    }
    fetchedOrder.status = request.body.status.toLowerCase();

    if (request.body.status.toLowerCase() === 'accepted') {
      return response.status(200)
        .json({
          message: 'Order accepted',
          fetchedOrder
        });
    }
    if (request.body.status.toLowerCase() === 'declined') {
      return response.status(200)
        .json({
          message: 'Order declined',
          fetchedOrder
        });
    }
    if (request.body.status.toLowerCase() === 'completed') {
      return response.status(200)
        .json({
          message: 'Order completed',
          fetchedOrder
        });
    }
    return response.status(400)
      .json({
        status: 'Fail',
        message: 'Invalid order status'
      });
  }

  static deleteOrder(request, response) {
    const { fetchedOrder } = request.body;
    orders.splice(fetchedOrder.id - 1, 1);
    return response.status(200)
      .json({
        message: 'Order deleted successfully'
      });
  }
}

const {
  placeOrder, getAllOrders, fetchSpecificOrder,
  updateOrder, deleteOrder
} = OrderHandler;

export {
  placeOrder,
  getAllOrders,
  fetchSpecificOrder,
  updateOrder,
  deleteOrder
};
