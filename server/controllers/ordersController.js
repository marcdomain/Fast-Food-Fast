import orders from '../in-memoryData/orders';

class OrderHandler {
  static placeOrder(request, response) {
    const {
      email, phone, item, price, quantity
    } = request.body;
    const id = orders[orders.length - 1].id + 1;
    const total = quantity * price;
    const status = 'pending';

    const newOrder = {
      id,
      email,
      phone,
      item,
      price,
      quantity,
      total,
      status
    };

    orders.push(newOrder);
    return response.status(201)
      .json({
        message: 'Thanks! order has been placed successfully',
        newOrder,
      });
  }

  static getAllOrders(request, response) {
    const allOrder = orders.reverse();
    return response.status(200)
      .json({
        message: 'List of all orders',
        allOrder
      });
  }

  static fetchSpecificOrder(request, response) {
    const { fetchedOrder } = request.body;
    return response.status(200)
      .json({
        message: 'Order fetched successfully',
        fetchedOrder
      });
  }

  static updateOrder(request, response) {
    const { fetchedOrder } = request.body;

    if (request.body.status === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Status cannot be undefined'
        });
    }
    fetchedOrder.status = request.body.status.toLowerCase();

    if (request.body.status.toLowerCase() === 'accepted') {
      return response.status(200)
        .json({
          message: 'Order accepted',
          fetchedOrder
        });
    }
    if (request.body.status.toLowerCase() === 'declined') {
      return response.status(200)
        .json({
          message: 'Order declined',
          fetchedOrder
        });
    }
    if (request.body.status.toLowerCase() === 'completed') {
      return response.status(200)
        .json({
          message: 'Order completed',
          fetchedOrder
        });
    }
    return response.status(400)
      .json({
        status: 'Fail',
        message: 'Invalid order status'
      });
  }

  static deleteOrder(request, response) {
    const { fetchedOrder } = request.body;
    orders.splice(fetchedOrder.id - 1, 1);
    return response.status(200)
      .json({
        message: 'Order deleted successfully'
      });
  }
}

export default OrderHandler;
