import orders from '../in-memoryData/orders';
import pool from '../db/connection';
import { queryMenuTableByMenuId, updateRemainingMenuQuantity } from '../db/sqlQueries';

/**
  * @description class representing Validation for Orders
  *
  * @class OrderValidators
  */

class OrderValidators {
  /**
  * @description - This method is responsible for validating inputs
  *
  * @static
  * @param {object} request - Request sent to the middleware
  * @param {object} response - Response sent from the middleware
  * @param {object} next - callback function to transfer to the next method
  *
  * @returns {object} - status and object representing fail message
  *
  * @memberof OrderValidators
  */

  static placeOrderValidator(request, response, next) {
    let { menuId, quantity, location } = request.body;
    location = location.trim().replace(/\s\s+/g, ' ');
    if (location !== undefined && location !== '') {
      if (location.length < 5 || location.length > 100) {
        return response.status(400)
          .json({
            status: 'Fail',
            message: 'Invalid location length. Please input alphanumeric characters of length 5 to 100'
          });
      }
      const validLocationCharacters = /^[a-z0-9 ,-]+$/i;
      if (!validLocationCharacters.test(location)) {
        return response.status(400)
          .json({
            status: 'Fail',
            message: 'Invalid location character. Length should be 5 to 100. Only alphanumeric characters, whitespace, comma, and hypen are accepted'
          });
      }
    }
    if (menuId === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'menuId is undefined. It should be a positive integer greater than zero'
        });
    }
    menuId = menuId.trim();
    if (menuId === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'menuId is empty. It should be a positive integer greater than zero'
        });
    }
    if (!Number(menuId) || menuId <= 0) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Invalid menuId detected. It should be a positive integer greater than zero'
        });
    }
    pool.query(queryMenuTableByMenuId, [menuId])
      .then((result) => {
        if (result.rowCount === 0) {
          return response.status(404)
            .json({
              status: 'Fail',
              message: 'Sorry, this menu does not exist'
            });
        }
        if (quantity === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Quantity is unefined. It should be a positive integer greater than zero'
            });
        }
        quantity = quantity.trim();
        if (quantity === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Quantity is empty. It should be a positive integer greater than zero'
            });
        }
        if (!Number(quantity) || quantity <= 0) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid quantityId detected. It should be a positive integer greater than zero'
            });
        }
        if (result.rows[0].quantity < quantity) {
          return response.status(406)
            .json({
              status: 'Fail',
              message: `Sorry, the maximum quantity you can order at this time is ${result.rows[0].quantity}`
            });
        }
        const newQuantity = result.rows[0].quantity - quantity;
        pool.query(updateRemainingMenuQuantity, [newQuantity])
          .then(() => {
            request.body.location = location;
            request.body.menuId = menuId;
            request.body.quantity = quantity;
            next();
          });
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }

  static fetchSpecificOrderValidator(request, response, next) {
    const { orderId } = request.params;
    if (!Number(orderId)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Oooops! Invalid URL'
        });
    }
    const fetchedOrder = orders.find(order => order.id === Number(orderId));
    if (!fetchedOrder) {
      return response.status(404)
        .json({
          status: 'Fail',
          message: 'This order does not exist'
        });
    }
    request.body.fetchedOrder = fetchedOrder;
    next();
  }
}

const {
  placeOrderValidator,
  fetchSpecificOrderValidator
} = OrderValidators;

export {
  placeOrderValidator,
  fetchSpecificOrderValidator
};
