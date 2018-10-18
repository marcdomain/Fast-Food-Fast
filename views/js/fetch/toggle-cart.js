const toggleCart = document.querySelector('.toggle-cart');
const switchDirection = document.querySelector('.toggle-cart span');
const cartDashboard = document.querySelector('.cart-dashboard');

const toggleMenuDashboard = () => {
  if (cartDashboard.style.display === 'block') {
    cartDashboard.style.display = 'none';
    toggleCart.style.width = '120px';
    switchDirection.style.transform = 'scaleX(1)';
  } else {
    cartDashboard.style.display = 'block';
    toggleCart.style.width = '300px';
    switchDirection.style.transform = 'scaleX(-1)';
  }
};
toggleCart.addEventListener('click', toggleMenuDashboard);
