import orders from '../in-memoryData/orders';

class OrderHandler {
  static placeOrder(request, response) {
    const {
      email, phone, item, price, quantity
    } = request.body;
    const id = orders.length;
    const total = quantity * price;
    const status = 'pending';

    const sendOrder = {
      id,
      email,
      phone,
      item,
      price,
      quantity,
      total,
      status
    };

    orders.push(sendOrder);
    return response.status(201)
      .json({
        message: 'Thanks! order has been placed successfully',
        sendOrder,
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
}

export default OrderHandler;
