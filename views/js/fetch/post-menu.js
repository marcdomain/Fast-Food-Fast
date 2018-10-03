const postMenu = (event) => {
  event.preventDefault();
  const token = localStorage.getItem('token');

  const menu = document.querySelector('#menu').value.trim();
  const description = document.querySelector('#description').value.trim();
  const category = document.querySelector('#category').value.trim();
  const imageURL = document.querySelector('#imageURL').value.trim();
  const quantity = document.querySelector('#quantity').value.trim();
  const price = document.querySelector('#price').value.trim();

  fetch(`${baseURL}/api/v1/menu`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({
      menu, description, category, imageURL, quantity, price
    })
  })
    .then(response => response.json())
    .then((data) => {
      let message = '';

      message = 'Menu is undefined. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 0);
        return;
      }

      message = 'Menu should be a string. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 0);
        return;
      }

      message = 'Menu is empty. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 0);
        return;
      }

      message = 'Invalid menu length. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 0);
        return;
      }

      message = 'Invalid menu character detected. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 0);
        return;
      }

      message = 'Description is undefined. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 1);
        return;
      }

      message = 'Description should be a string. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 1);
        return;
      }

      message = 'Description is empty. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 1);
        return;
      }

      message = 'Invalid description length. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 1);
        return;
      }

      message = 'Invalid description character detected. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 1);
        return;
      }

      message = 'Category is undefined. Input characters of length 3 to 50 (alphanumeric, whitespace, and hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 2);
        return;
      }

      message = 'Category should be a string of length 3 to 50 (alphanumeric, whitespace, and hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 2);
        return;
      }

      message = 'Category is empty. Input characters of length 3 to 50 (alphanumeric, whitespace, and hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 2);
        return;
      }

      message = 'Invalid category. Input characters of length 3 to 50 (alphanumeric, whitespace, and hyphen)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 2);
        return;
      }

      message = 'imageURL is undefined. Input a valid one';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 3);
        return;
      }

      message = 'imageURL should be a string';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 3);
        return;
      }

      message = 'imageURL is empty. Input a valid one';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 3);
        return;
      }

      message = 'Invalid imageURL detected. Valid format are .jpg, .jpeg, .png, .gif';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 3);
        return;
      }

      message = 'Quantity is undefined. Input positive integer greater than zero and of length 1 to 4';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 4);
        return;
      }

      message = 'Quantity should be a string. Input positive integer greater than zero and of length 1 to 4';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 4);
        return;
      }

      message = 'Quantity is empty. Input positive integer greater than zero and of length 1 to 4';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 4);
        return;
      }

      message = 'Invalid quantity length. Input positive integer greater than zero and of length 1 to 4';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 4);
        return;
      }

      message = 'Invalid quantity. Input positive integer greater than zero and of length 1 to 4';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 4);
        return;
      }

      message = 'Invalid quantity character detected. Input positive integer greater than zero and of length 1 to 4';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 4);
        return;
      }

      message = 'Price is undefined. Input positive integer greater than zero but less than length of 10';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 5);
        return;
      }

      message = 'Price should be a string. Input positive integer greater than zero but less than length of 10';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 5);
        return;
      }

      message = 'Price is empty. Input positive integer greater than zero but less than length of 10';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 5);
        return;
      }

      message = 'Invalid price. Input positive integer greater than zero but less than length of 10';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 5);
        return;
      }

      message = 'Invalid price character detected. Input positive integer greater than zero but less than length of 10';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'red', 5);
        return;
      }

      message = 'No token supplied';
      if (data.message === message) {
        Utils.notification(data.message, 'white', 'red');
        return;
      }

      message = 'JsonWebTokenError';
      if (data.message.name === message) {
        Utils.notification(data.message.name, 'white', 'red');
        return;
      }

      message = 'Your input is not a valid token. Please input a correct one';
      if (data.message === message) {
        Utils.notification(data.message, 'white', 'red');
        return;
      }

      message = 'Menu created successfully';
      if (data.message === message) {
        Utils.notification(data.message, 'white', 'red');
        return;
      }

      message = 'Menu created successfully';
      if (data.message === message) {
        message = '&#9989';
        Utils.displayMessage(message, 'lime', 0);
        Utils.displayMessage(message, 'lime', 1);

        setTimeout(() => {
          location.assign('add-food-item.html');
        }, 2000);
      }
    })
    .catch((error) => {
      console.log('Info From Catch', error);
    });
};

document.querySelector('#postmenu').addEventListener('submit', postMenu);
