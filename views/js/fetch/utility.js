const baseURL = 'http://localhost:5030/api/v1';

class Utils {
  static displayMessage(message, color, fieldIndex) {
    const formAlert = document.querySelectorAll('.formAlert')[fieldIndex];
    formAlert.innerHTML = message;
    formAlert.style.display = 'inline-block';
    formAlert.style.color = color;

    setTimeout(() => {
      formAlert.style.display = 'none';
    }, 5000);
  }
}
