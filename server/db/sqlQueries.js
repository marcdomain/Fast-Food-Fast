const createUser = 'insert into users (name, email, phone, address, password) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createMenu = 'insert into menus (menu, description, category, quantity, price) values ($1, $2, $3, $4, $5) returning *';

const queryMenuTableByMenu = 'select * from menus where menu = $1';

const queryAvailableMenu = 'select * from menus where quantity > 0 order by id desc';

const createOrder = 'insert into orders (userid, mealid, quantity, total, location) values ($1, $2, $3, (select price from menus where id = $2) * $3, $4) returning *';

const queryMenuTableById = 'select * from menus where id = $1';

const updateRemainingMenuQuantity = 'update menus set quantity = $1 where id = $2';

const selectUserOrderHistory = `select orders.id, orders.created, menus.menu, orders.quantity, orders.total, orders.location, users.phone, orders.status
from orders inner join menus on orders.mealid = menus.id left join users on orders.userid = users.id  where userid=$1 order by id desc`;

const selectAllOrders = `select orders.id, orders.created, menus.menu, orders.quantity, orders.total, orders.location, users.phone, orders.status
from orders inner join menus on orders.mealid = menus.id left join users on orders.userid = users.id order by id desc`;

const selectSpecificOrder = `select orders.id, orders.created, menus.menu, orders.quantity, orders.total, orders.location, users.phone, orders.status
from orders inner join menus on orders.mealid = menus.id left join users on orders.userid = users.id where orders.id = $1`;

const returnNewOrder = `select menus.menu, orders.quantity, orders.total, orders.location, users.phone from orders inner join menus
on orders.mealId = menus.id left join users on orders.userid = users.id order by orders.id desc limit 1`;

const updateOrderStatus = 'update orders set status = $1 where id = $2';

const queryOrdersById = 'select * from orders where id = $1';

const queryUsersById = 'select * from users where id = $1';

export {
  createUser, queryUsersByEmail, queryUsersByPhone, createMenu, queryMenuTableByMenu,
  queryAvailableMenu, createOrder, queryMenuTableById, updateRemainingMenuQuantity,
  selectUserOrderHistory, selectAllOrders, selectSpecificOrder, updateOrderStatus,
  queryOrdersById, queryUsersById, returnNewOrder
};
