import pool from './connection';

const createUsersTable = `DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY NOT NULL,
    name CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(50) UNIQUE NOT NULL,
    phone CHARACTER VARYING(13) UNIQUE NOT NULL,
    password CHARACTER VARYING(255) NOT NULL,
    user_type CHARACTER VARYING(5) NOT NULL DEFAULT ('user')
)`;

const createMenusTable = `DROP TABLE IF EXISTS menus;
  CREATE TABLE menus (
    menu_id SERIAL PRIMARY KEY NOT NULL,
    menu CHARACTER VARYING(20) UNIQUE NOT NULL,
    description CHARACTER VARYING(50) NOT NULL,
    category CHARACTER VARYING(10) NOT NULL,
    quantity INTEGER NOT NULL,
    price INTEGER NOT NULL
)`;

const createOrdersTable = `DROP TABLE IF EXISTS orders;
  CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY NOT NULL,
    food_id INTEGER NOT NULL,
    owner_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price INTEGER NOT NULL,
    location CHARACTER VARYING(50) NOT NULL,
    status CHARACTER VARYING(10) NOT NULL DEFAULT ('new')
)`;

pool.query(createUsersTable)
  .then(result => console.log(`usersTable: ${result[0].command}PED and ${result[1].command}D`))
  .catch(error => console.log(`users table ${error}`));

pool.query(createMenusTable)
  .then(result => console.log(`menusTable: ${result[0].command}PED and ${result[1].command}D`))
  .catch(error => console.log(`menus table ${error}`));

pool.query(createOrdersTable)
  .then(result => console.log(`ordersTable: ${result[0].command}PED and ${result[1].command}D`))
  .catch(error => console.log(`orders table ${error}`));

