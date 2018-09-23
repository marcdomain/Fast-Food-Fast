const createUser = 'insert into users (name, email, phone, address, password) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createMenu = 'insert into menus (menu, description, category, quantity, price) values ($1, $2, $3, $4, $5) returning *';

const queryMenuTableByMenu = 'select * from menus where menu = $1';

export {
  createUser, queryUsersByEmail, queryUsersByPhone, createMenu, queryMenuTableByMenu
};
