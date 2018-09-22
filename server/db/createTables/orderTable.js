import pool from '../connection';

const createOrdersTable = `DROP TABLE IF EXISTS orders CASCADE;
  CREATE TABLE orders (
    id SERIAL PRIMARY KEY NOT NULL,
    userid INTEGER NOT NULL,
    menuid INTEGER NOT NULL,
    FOREIGN KEY (userid) references users (id) on delete cascade,
    FOREIGN KEY (menuid) references menus (id) on delete cascade,
    quantity INTEGER NOT NULL,
    total INTEGER NOT NULL,
    location CHARACTER VARYING(50) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT (NOW()),
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
