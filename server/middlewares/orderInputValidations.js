
class OrderValidators {
  static placeOrderValidator(request, response, next) {
    let {
      email, phone, item, price, quantity
    } = request.body;

    if (email === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email field is undefined'
        });
    }
    if (email === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email field cannot be empty'
        });
    }
    email = email.trim();
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!validEmail.test(email)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Your email format is invalid'
        });
    }
    if (email.length < 8 || email.length > 50) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email should be 8 to 50 characters long'
        });
    }

    if (phone === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Phone field is undefined'
        });
    }
    if (phone === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Phone field cannot be empty'
        });
    }

    phone = phone.trim();
    if (phone.length < 8 || phone.length > 13) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Phone should be 8 to 13 characters long'
        });
    }

    const validPhone = /^[0-9]+$/;
    if (!validPhone.test(phone)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Phone should be number characters'
        });
    }

    if (item === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Item field is undefined'
        });
    }
    if (item === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Item field cannot be empty'
        });
    }

    item = item.trim();
    if (item.length < 4 || item.length > 30) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Item should be 4 to 30 characters long'
        });
    }

    const validItem = /^[a-z ]+$/i;
    if (!validItem.test(item)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Item should be alphabets'
        });
    }

    if (price === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Price field is undefined'
        });
    }
    if (price === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Price field cannot be empty'
        });
    }

    price = price.trim();
    if (price.length < 3 || price.length > 5) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Price should be 3 to 5 characters long'
        });
    }

    const validPrice = /^[0-9]+$/;
    if (!validPrice.test(price)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Price should be number characters'
        });
    }

    if (quantity === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'quantity field is undefined'
        });
    }
    if (quantity === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'quantity field cannot be empty'
        });
    }

    quantity = quantity.trim();
    if (quantity.length < 1 || quantity.length > 2) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'quantity should be 1 to 2 characters long'
        });
    }

    const validQuantity = /^[0-9]+$/;
    if (!validQuantity.test(quantity)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'quantity should be number characters'
        });
    }

    request.body.quantity = quantity;
    request.body.price = price;
    request.body.item = item;
    request.body.email = email;
    request.body.phone = phone;
    next();
  }
}

export default OrderValidators;
