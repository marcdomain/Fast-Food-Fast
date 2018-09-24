const createUser = 'insert into users (name, email, phone, address, password) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createMenu = 'insert into menus (menu, description, category, quantity, price) values ($1, $2, $3, $4, $5) returning *';

const queryMenuTableByMenu = 'select * from menus where menu = $1';

const queryAvailableMenu = 'select * from menus where quantity > 0';

const createOrder = 'insert into orders (userid, menuid, quantity, total, location) values ($1, $2, $3, (select price from menus where id = $2) * $3, $4) returning *';

const queryMenuTableByMenuId = 'select * from menus where id = $1';

export {
  createUser, queryUsersByEmail, queryUsersByPhone, createMenu, queryMenuTableByMenu,
  queryAvailableMenu, createOrder, queryMenuTableByMenuId
};
