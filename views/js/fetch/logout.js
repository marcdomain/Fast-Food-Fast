document.querySelector('.logout').addEventListener('click', () => {
  localStorage.removeItem('token');
  location.assign('index.html');
});
