const switchDirection = document.querySelector('.toggle-cart span');

const toggleMenuDashboard = () => {
  if (cartDashboard.style.display === 'block') {
    cartDashboard.style.display = 'none';
    toggleCart.style.width = '150px';
  } else {
    cartDashboard.style.display = 'block';
    toggleCart.style.width = '300px';
  }
};
toggleCart.addEventListener('click', toggleMenuDashboard);
