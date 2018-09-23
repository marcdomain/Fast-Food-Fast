import pool from '../db/connection';
import { createMenu } from '../db/sqlQueries';

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
    const variables = [
      request.body.menu,
      request.body.description,
      request.body.category,
      request.body.price,
      request.body.quantity
    ];
    pool.query(createMenu, variables)
      .then((result) => {
        const menu = result.rows[0];
        return response.status(201)
          .json({
            message: 'Menu created successfully',
            menu
          });
      })
      .catch(error => response.status(500)
        .json({
          message: error.message
        }));
  }
}

const { postMenu } = MenusHandler;

export default postMenu;
