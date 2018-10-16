document.querySelector('.logout').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('orderItems');
  localStorage.removeItem('userId');
  localStorage.removeItem('email');
  location.assign('index.html');
});
