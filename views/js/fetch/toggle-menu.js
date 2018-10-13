const toggleMenu = document.querySelector('.toggle-menu');
const switchDirection = document.querySelector('.toggle-menu span');

const displayMenuDashboard = () => {
  const dashboardOptions = document.querySelector('.dashboard-menu');
  if (dashboardOptions.style.display === 'block') {
    dashboardOptions.style.display = 'none';
    toggleMenu.style.width = '90px';
    switchDirection.style.transform = 'scaleX(1)';
  } else {
    dashboardOptions.style.display = 'block';
    toggleMenu.style.width = '250px';
    switchDirection.style.transform = 'scaleX(-1)';
  }
};
toggleMenu.addEventListener('click', displayMenuDashboard);
