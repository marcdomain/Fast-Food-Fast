import pool from '../connection';

const createOrdersTable = `DROP TABLE IF EXISTS orders CASCADE;
  CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY NOT NULL,
    owner_id INTEGER NOT NULL,
    food_id INTEGER NOT NULL,
    FOREIGN KEY (owner_id) references users (user_id) on delete cascade,
    FOREIGN KEY (food_id) references menus (menu_id) on delete cascade,
    quantity INTEGER NOT NULL,
    total INTEGER NOT NULL,
    location CHARACTER VARYING(50) NOT NULL,
    status CHARACTER VARYING(10) NOT NULL DEFAULT ('new')
)`;

class OrderTableHandler {
  static ordersTable() {
    pool.query(createOrdersTable)
      .then(result => console.log(`ordersTable: ${result[0].command}PED and ${result[1].command}D`))
      .catch(error => console.log(`orders table ${error}`));
  }
}

const { ordersTable } = OrderTableHandler;

export default ordersTable;
