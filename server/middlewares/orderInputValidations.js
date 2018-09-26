import pool from '../db/connection';
import {
  queryMenuTableByMenuId, updateRemainingMenuQuantity,
  queryOrdersById
} from '../db/sqlQueries';

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
    if (location !== undefined) {
      location = location.trim().replace(/\s\s+/g, ' ');
      if (location !== '') {
        if (location.length < 5 || location.length > 100) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid location length. Please input alphanumeric characters of length 5 to 100'
            });
        }
        const validLocationCharacters = /^[a-z0-9 ,-.]+$/i;
        if (!validLocationCharacters.test(location)) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid location character. Length should be 5 to 100. Only alphanumeric characters, whitespace, comma, and hypen are accepted'
            });
        }
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
    if (menuId.length > 9) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Invalid menuId detected. It should be a positive integer greater than zero and less than a million'
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
              message: 'Quantity is undefined. It should be a positive integer greater than zero'
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
              message: 'Invalid quantity detected. It should be a positive integer greater than zero'
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
        pool.query(updateRemainingMenuQuantity, [newQuantity, menuId])
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

  /**
  * @description - This method is responsible for validating input to params field
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

  static getOrderHistoryValidator(request, response, next) {
    const { userId } = request.params;
    if (!Number(userId) || userId <= 0) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Invalid URL. userId should be a positive integer greater than zero'
        });
    }
    next();
  }

  /**
  * @description - This method is responsible for validating input to params field
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

  static getSpecificOrderValidator(request, response, next) {
    const { orderId } = request.params;
    if (!Number(orderId) || orderId <= 0) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Invalid URL. orderId should be a positive integer greater than zero'
        });
    }
    next();
  }

  /**
  * @description - This method is responsible for validating orderId and status
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

  static updateOrderValidator(request, response, next) {
    const { orderId } = request.params;
    pool.query(queryOrdersById, [orderId])
      .then((data) => {
        if (data.rowCount === 0) {
          return response.status(404)
            .json({
              status: 'Fail',
              message: 'Sorry, this order does not exists.'
            });
        }
        if (data.rows[0].status === 'Processing' || data.rows[0].status === 'Completed'
        || data.rows[0].status === 'Cancelled') {
          return response.status(406)
            .json({
              status: 'Fail',
              message: 'Sorry, this order cannot be updated at this time'
            });
        }
        next();
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }

  /**
  * @description - This method is responsible for validating orderId and status
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

  static completeOrderValidator(request, response, next) {
    const { orderId } = request.params;
    pool.query(queryOrdersById, [orderId])
      .then((data) => {
        if (data.rowCount === 0) {
          return response.status(404)
            .json({
              status: 'Fail',
              message: 'Sorry, this order does not exists.'
            });
        }
        if (data.rows[0].status !== 'Processing') {
          return response.status(406)
            .json({
              status: 'Fail',
              message: 'This order can only be completed after its been placed on processing'
            });
        }
        next();
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }
}

const {
  placeOrderValidator, getOrderHistoryValidator, getSpecificOrderValidator,
  updateOrderValidator, completeOrderValidator
} = OrderValidators;

export {
  placeOrderValidator, getOrderHistoryValidator, getSpecificOrderValidator,
  updateOrderValidator, completeOrderValidator
};
