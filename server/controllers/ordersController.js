import pool from '../db/connection';
import { createOrder, selectUserOrderHistory } from '../db/sqlQueries';

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

  /**
  * @description - This method is responsible for getting order history of a specific user
  *
  * @static
  * @param {object} request - Request sent to the router
  * @param {object} response - Response sent from the controller
  *
  * @returns {object} - status and object representing response message
  *
  * @memberof OrderHandler
  */

  static getUserOrderHistory(request, response) {
    const { userId } = request.params;
    const userInfo = request.authData.payload;
    console.log('USER INFO', userInfo);
    console.log('USER ID PARAMS', userId);
    if (userInfo.usertype === 'admin' || userInfo.id === Number(userId)) {
      return pool.query(selectUserOrderHistory, [userId])
        .then((result) => {
          const orderHistory = result.rows;
          return response.status(200)
            .json({
              message: 'Order history successfully fetched',
              orderHistory
            });
        })
        .catch(error => response.status(500)
          .json({
            status: 'Fail',
            message: error.message
          }));
    }
    return response.status(401)
      .json({
        status: 'Fail',
        message: 'Unauthorized access'
      });
  }
}

const { placeOrder, getUserOrderHistory } = OrderHandler;

export { placeOrder, getUserOrderHistory };
