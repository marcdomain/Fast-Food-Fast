import pool from '../db/connection';
import { queryMenuTableByMenu } from '../db/sqlQueries';

/**
  * @description class representing Validations for Menu
  *
  * @class MenuValidationHandler
  */

class MenuValidationHandler {
  /**
  * @description - This method is responsible for validating admin inputs
  *
  * @static
  * @param {object} request - Request sent to the middleware
  * @param {object} response - Response sent from the middleware
  * @param {object} next - callback function to transfer to the next method
  *
  * @returns {object} - status and object representing fail message
  *
  * @memberof MenuValidationHandler
  */

  static postMenuValidator(request, response, next) {
    let {
      menu, description, category, quantity, price
    } = request.body;
    if (menu === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Menu is undefined. Input alphabets of 3 to 30 characters long'
        });
    }
    if (menu === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Menu is empty. Input alphabets of 3 to 30 characters long'
        });
    }
    menu = menu.trim().replace(/\s\s+/g, ' ');
    if (menu.length < 3 || menu.length > 30) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Invalid menu length. Input alphabets of 3 to 30 characters long'
        });
    }
    const validMenuCharacters = /^[a-z ]+$/i;
    if (!validMenuCharacters.test(menu)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Invalid menu character detected. Input alphabets of 3 to 30 characters long and whitespace'
        });
    }
    pool.query(queryMenuTableByMenu, [menu])
      .then((result) => {
        if (result.rowCount !== 0) {
          return response.status(409)
            .json({
              status: 'Fail',
              message: 'Menu already exist. If you wish to update it, then use the modify menu endpoint'
            });
        }
        if (description === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Description is undefined. Input alphanumeric characters 5 to 100 long'
            });
        }
        if (description === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Description is empty. Input alphanumeric characters 5 to 100 long'
            });
        }
        description = description.trim().replace(/\s\s+/g, ' ');
        if (description.length < 5 || description.length > 100) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid description length. Input alphanumeric characters 5 to 100 long'
            });
        }
        const validDescriptionCharacter = /^[a-z0-9 ]+$/i;
        if (!validDescriptionCharacter.test(description)) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid description character detected. Input alphanumeric characters 5 to 100 long'
            });
        }
        if (category === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: "Category is undefined. Select 'local', 'pizza', 'rice', 'snacks', or 'others'"
            });
        }
        if (category === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: "Category is empty. Select 'local', 'pizza', 'rice', 'snacks', or 'others'"
            });
        }
        category = category.trim().toLowerCase();
        if (category !== 'local' || category !== 'pizza' ||
        category !== 'rice' || category !== 'snacks' || category !== 'others') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: "Invalid category. Select 'local', 'pizza', 'rice', 'snacks', or 'others'"
            });
        }
        if (quantity === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Quantity is undefined. Input positive integer characters of length 1 to 4'
            });
        }
        if (quantity === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Quantity is empty. Input positive integer characters of length 1 to 4'
            });
        }
        quantity = quantity.trim();
        if (quantity.length < 1 || quantity.length > 4) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid quantity length. Input positive integer characters of length 1 to 4'
            });
        }
        const validQuantityCharacter = /^[0-9]+$/;
        if (!validQuantityCharacter.test(quantity)) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid quantity character detected. Input positive integer characters of length 1 to 4'
            });
        }
        if (price === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Price is undefined. Input positive integer characters of length 3 to 6'
            });
        }
        if (price === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Price is empty. Input positive integer characters of length 3 to 6'
            });
        }
        price = price.trim();
        if (price.length < 3 || price.length > 6) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid price length. Input positive integer characters of length 3 to 6'
            });
        }
        const validPriceCharacter = /^[0-9]+$/;
        if (!validPriceCharacter.test(price)) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Invalid price character detected. Input positive integer characters of length 3 to 6'
            });
        }
        request.body.menu = menu;
        request.body.description = description;
        request.body.category = category;
        request.body.quantity = quantity;
        request.body.price = price;
        next();
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }
}

const { postMenuValidator } = MenuValidationHandler;

export default postMenuValidator;
