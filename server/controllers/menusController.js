import pool from '../db/connection';
import {
  createMenu, queryAvailableMenu, updateMenu, deleteMenuById
} from '../db/sqlQueries';

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

  static updateMenuItem(request, response) {
    const {
      menu, description, category, quantity, price
    } = request.body;
    const { menuId } = request.params;
    const variables = [menu, description, category, quantity, price, menuId];
    pool.query(updateMenu, variables)
      .then((result) => {
        const updatedMenu = result.rows[0];
        return response.status(200)
          .json({
            message: 'Updated successfully',
            updatedMenu
          });
      });
  }

  static deleteMenu(request, response) {
    const { menuId } = request.params;
    pool.query(deleteMenuById, [menuId])
      .then((result) => {
        const deletedMenu = result.rows[0].menu;
        return response.status(200)
          .json({
            message: `${deletedMenu} deleted successfully`
          });
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }
}

const {
  postMenu, getAllMenu, updateMenuItem, deleteMenu
} = MenusHandler;

export {
  postMenu, getAllMenu, updateMenuItem, deleteMenu
};
