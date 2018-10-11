document.querySelector('.logout').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('orderItems');
  location.assign('index.html');
});
