const login = (eventBtn) => {
  eventBtn.preventDefault();
  const email = document.querySelector('#email1').value.trim();
  const password = document.querySelector('#password1').value.trim();

  fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  })
    .then(response => response.json())
    .then((result) => {
      let message = '';

      message = 'Email is undefined';
      if (result.message === message) {
        Utils.displayMessage(result.message, 'yellow', 5);
        return;
      }

      message = 'Email should be a string';
      if (result.message === message) {
        Utils.displayMessage(result.message, 'yellow', 5);
        return;
      }

      message = 'Email cannot be empty.';
      if (result.message === message) {
        Utils.displayMessage(result.message, 'yellow', 5);
        return;
      }

      message = 'Email not found. Please signup';
      if (result.message === message) {
        Utils.displayMessage(result.message, 'yellow', 5);
        return;
      }

      message = 'Password is undefined. Please input your password';
      if (result.message === message) {
        Utils.displayMessage(result.message, 'yellow', 6);
        return;
      }

      message = 'Password should be a string';
      if (result.message === message) {
        Utils.displayMessage(result.message, 'yellow', 6);
        return;
      }

      message = 'Password is empty. Please input your password';
      if (result.message === message) {
        Utils.displayMessage('Passeord cannot be empty', 'yellow', 6);
        return;
      }

      message = 'Incorrect password. Please input your correct password';
      if (result.message === message) {
        Utils.displayMessage('Incorrect password', 'yellow', 6);
        return;
      }

      message = '&#9989';
      Utils.displayMessage(message, 'lime', 5);
      Utils.displayMessage(message, 'lime', 6);
      localStorage.setItem('token', result.token);
      setTimeout(() => {
        location.assign('food-items.html');
      }, 2000);
    })
    .catch((error) => {
      console.log('Info From Catch', error);
    });
};

document.querySelector('#loginForm').addEventListener('submit', login);
