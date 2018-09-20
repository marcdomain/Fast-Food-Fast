import pool from '../connection';

const createMenusTable = `DROP TABLE IF EXISTS menus CASCADE;
CREATE TABLE menus (
  menu_id SERIAL PRIMARY KEY NOT NULL,
  menu CHARACTER VARYING(20) UNIQUE NOT NULL,
  description CHARACTER VARYING(50) NOT NULL,
  category CHARACTER VARYING(10) NOT NULL,
  quantity INTEGER NOT NULL,
  price INTEGER NOT NULL
)`;

class MenuTableHandler {
  static menusTable() {
    const create = pool.query(createMenusTable)
      .then(result => console.log(`menusTable: ${result[0].command}PED and ${result[1].command}D`))
      .catch(error => console.log(`menus table ${error}`));
    return create;
  }
}

const { menusTable } = MenuTableHandler;

export default menusTable;
