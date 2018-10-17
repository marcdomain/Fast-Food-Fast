const toggleMenu = document.querySelector('.toggle-menu');
const switchDirection = document.querySelector('.toggle-menu span');
const dashboardOptions = document.querySelector('.dashboard-menu');

const toggleMenuDashboard = () => {
  if (dashboardOptions.style.display === 'block') {
    dashboardOptions.style.display = 'none';
    toggleMenu.style.width = '100px';
    switchDirection.style.transform = 'scaleX(1)';
  } else {
    dashboardOptions.style.display = 'block';
    toggleMenu.style.width = '250px';
    switchDirection.style.transform = 'scaleX(-1)';
  }
};
toggleMenu.addEventListener('click', toggleMenuDashboard);
