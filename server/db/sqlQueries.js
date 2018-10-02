const createUser = 'insert into users (name, email, phone, address, password) values ($1, $2, $3, $4, $5) returning *';

const queryUsersByEmail = 'select * from users where email = $1';

const queryUsersByPhone = 'select * from users where phone = $1';

const createMenu = 'insert into menus (menu, description, category, quantity, price) values ($1, $2, $3, $4, $5) returning *';

const selectPriceFromMenu = 'select price from menus where id = $1';

const createOrder = 'insert into orders (userId, orderItems, total, location) values ($1, $2, $3, $4) returning *';

const queryMenuTableByMenu = 'select * from menus where menu = $1';

const queryAvailableMenu = 'select * from menus where quantity > 0 order by id desc';

const queryMenuTableById = 'select * from menus where id = $1';

const menuQuantityAfterOrder = 'update menus set quantity = $1 where id = $2';

const selectUserOrderHistory = `select orders.id, orders.orderItems, orders.total, orders.orderDate, orders.location, users.phone 
from orders left join users on orders.userId = users.id  where orders.userId=$1 order by id desc`;

const selectAllOrders = `select orders.id, orders.orderItems, orders.total, orders.orderDate, orders.location, users.phone,
orders.status from orders left join users on orders.userId = users.id order by id desc`;

const selectSpecificOrder = `select orders.id, orders.orderItems, orders.total, orders.orderDate, orders.location, users.phone, orders.status
from orders left join users on orders.userid = users.id where orders.id = $1`;

const returnNewOrder = `select orders.orderItems, orders.total, users.phone, users.email, orders.location
from orders left join users on orders.userId = users.id order by orders.id desc limit 1`;

const updateOrderStatus = 'update orders set status = $1 where id = $2 returning *';

const queryOrdersById = 'select * from orders where id = $1';

const queryUsersById = 'select * from users where id = $1';

const updateMenuQuantityAfterCancelOrder = 'update menus set quantity =+ $1 where id = $2';

const updateMenu = 'update menus set menu = $1, description = $2, category = $3, quantity = $4, price = $5 where id = $6 returning *';

const deleteMenuById = 'delete from menus where id = $1 returning *';

export {
  createUser, queryUsersByEmail, queryUsersByPhone, createMenu, queryMenuTableByMenu,
  queryAvailableMenu, createOrder, queryMenuTableById, menuQuantityAfterOrder,
  selectUserOrderHistory, selectAllOrders, selectSpecificOrder, updateOrderStatus,
  queryOrdersById, queryUsersById, returnNewOrder, updateMenuQuantityAfterCancelOrder,
  selectPriceFromMenu, updateMenu, deleteMenuById
};
