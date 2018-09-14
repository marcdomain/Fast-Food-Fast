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
}

export default OrderHandler;
