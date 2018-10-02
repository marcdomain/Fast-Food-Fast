const signup = (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const address = document.querySelector('#address').value.trim();
  const password = document.querySelector('#password').value.trim();

  fetch(`${baseURL}/auth/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name, email, phone, address, password
    })
  })
    .then(response => response.json())
    .then((data) => {
      let message = '';

      message = 'Name cannot be undefined. Input 4 to 50 alphabets';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 0);
        return;
      }

      message = 'Name should be a string. Input 4 to 50 alphabets';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 0);
        return;
      }

      message = 'Name cannot be empyt. Input 4 to 50 alphabets';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 0);
        return;
      }

      message = 'Name should be 4 to 50 aplhabets long';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 0);
        return;
      }

      message = 'Name accepts only alphabet and whitespace';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 0);
        return;
      }

      message = 'Email cannot be undefined';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 1);
        return;
      }

      message = 'Email should be a string. Input an email 10 to 50 characters';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 1);
        return;
      }

      message = 'Email field cannot be empty. Input an email 10 to 50 characters';
      if (data.message === message) {
        Utils.displayMessage('Input an email 10 to 50 characters', 'yellow', 1);
        return;
      }

      message = "Please input a valid email format 'example@domain.com'";
      if (data.message === message) {
        Utils.displayMessage("Input a valid email format 'example@domain.com'", 'yellow', 1);
        return;
      }

      message = 'Email should be 10 to 50 characters';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 1);
        return;
      }

      message = 'Email already exist, please Signup with a new one';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 1);
        return;
      }

      message = 'Phone is undefined. Input integer of 7 to 13 characters long';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 2);
        return;
      }

      message = 'Phone should be a string. Input integer of 7 to 13 characters long';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 2);
        return;
      }

      message = 'Phone field cannot be empty. Input integer of 7 to 13 characters long';
      if (data.message === message) {
        Utils.displayMessage('Empty field. Input integer of 7 to 13 characters long', 'yellow', 2);
        return;
      }

      message = 'Phone should be integer of 7 to 13 characters long';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 2);
        return;
      }

      message = 'Phone number already exist, please Signup with a new one';
      if (data.message === message) {
        Utils.displayMessage('Number already exist, signup with a new one', 'yellow', 2);
        return;
      }

      message = 'Address is undefined. Input 5 to 100 characters (alphanumeric, comma, hyphen and whitespace)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 3);
        return;
      }

      message = 'Address should be a string. Input 5 to 100 characters (alphanumeric, comma, hyphen and whitespace)';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 3);
        return;
      }

      message = 'Address should be 5 to 100 characters (alphanumeric, comma, hyphen and whitespace)';
      if (data.message === message) {
        Utils.displayMessage('Input 5 - 100 alphanumeric, comma, hyphen, whitespace', 'yellow', 3);
        return;
      }

      message = 'Password is undefined. Input 4 to 20 characters';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 4);
        return;
      }

      message = 'Password should be a string. Input 4 to 20 characters';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 4);
        return;
      }

      message = 'Password cannot be empty. Input 4 to 20 characters';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 4);
        return;
      }

      message = 'Invalid password length. Input 4 to 20 characters';
      if (data.message === message) {
        Utils.displayMessage(data.message, 'yellow', 4);
        return;
      }

      message = 'Remove whitespace from your password and input 4 to 20 characters';
      if (data.message === message) {
        Utils.displayMessage('Remove whitespace and input 4 to 20 characters', 'yellow', 4);
        return;
      }

      message = '&#9989';
      Utils.displayMessage(message, 'lime', 0);
      Utils.displayMessage(message, 'lime', 1);
      Utils.displayMessage(message, 'lime', 2);
      Utils.displayMessage(message, 'lime', 3);
      Utils.displayMessage(message, 'lime', 4);
      localStorage.setItem('token', data.token);
      setTimeout(() => {
        location.assign('food-items.html');
      }, 2000);
    })
    .catch((error) => {
      console.log('Info From Catch', error);
    });
};

document.querySelector('#signupForm').addEventListener('submit', signup);
