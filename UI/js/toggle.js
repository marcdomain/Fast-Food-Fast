
const authForm = () => {
  const selectForm = document.querySelectorAll('.auth-form');
  const displayModal = document.querySelector('.modal');

  const toggleForm = (event) => {
      if(event.target.id === 'login'){
          selectForm[0].style.display = 'none';
          selectForm[1].style.display = 'block';
          displayModal.style.display = 'block';
      }
      if (event.target.id === 'signup') {
          selectForm[1].style.display = 'none';
          selectForm[0].style.display = 'block';
          displayModal.style.display = 'block';
      }
  }
  const signup = document.querySelector('#signup');
  const login = document.querySelector('#login');
  signup.addEventListener('click', toggleForm);
  login.addEventListener('click', toggleForm);
};
window.load = authForm();
