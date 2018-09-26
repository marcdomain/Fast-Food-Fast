import pool from '../db/connection';
import { createMenu, queryAvailableMenu } from '../db/sqlQueries';

/**
  * @description class representing Menu controller actions
  *
  * @class UserHandler
  */
class MenusHandler {
  /**
  * @description - This method is responsible for creating new menu
  *
  * @static
  * @param {object} request - Request sent to the router
  * @param {object} response - Response sent from the controller
  *
  * @returns {object} - status and object representing response message
  *
  * @memberof MenusHandler
  */

  static postMenu(request, response) {
    const {
      menu, description, category, quantity, price
    } = request.body;
    const variables = [
      menu,
      description,
      category,
      quantity,
      price
    ];
    pool.query(createMenu, variables)
      .then((result) => {
        const newMenu = result.rows[0];
        return response.status(201)
          .json({
            message: 'Menu created successfully',
            newMenu
          });
      })
      .catch(error => response.status(500)
        .json({
          message: error.message
        }));
  }

  /**
  * @description - This method is responsible for getting all available menu
  *
  * @static
  * @param {object} request - Request sent to the router
  * @param {object} response - Response sent from the controller
  *
  * @returns {object} - status and object representing response message
  *
  * @memberof MenusHandler
  */

  static getAllMenu(request, response) {
    pool.query(queryAvailableMenu)
      .then((result) => {
        const allMenu = result.rows;
        if (allMenu.length === 0) {
          return response.status(200)
            .json({
              message: 'Menu list is empty at this time. Please check again later'
            });
        }
        return response.status(200)
          .json({
            message: 'List of Available Menu',
            allMenu
          });
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }
}

const { postMenu, getAllMenu } = MenusHandler;

export { postMenu, getAllMenu };
