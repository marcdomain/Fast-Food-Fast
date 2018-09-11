
const authForm = () => {
  const selectDiv = document.querySelectorAll('.auth-form');
  const selectForm = document.querySelectorAll('form');
  const displayModal = document.querySelector('.modal');
  
  const toggleForm = (event) => {
      if(event.target.id === 'login'){
          selectDiv[0].style.display = 'none';
          selectDiv[1].style.display = 'block';
          displayModal.style.display = 'block';

          setInterval(() => {
            selectForm[1].removeAttribute('class');
            selectForm[1].setAttribute('class', 'form-after-click');
          }, 100);
      }
      if (event.target.id === 'signup') {
          selectDiv[1].style.display = 'none';
          selectDiv[0].style.display = 'block';
          displayModal.style.display = 'block';
          
          setInterval(() => {
            selectForm[0].removeAttribute('class');
            selectForm[0].setAttribute('class', 'form-after-click');
          }, 100);
      }
  }
  const signup = document.querySelector('#signup');
  const login = document.querySelector('#login');
  signup.addEventListener('click', toggleForm);
  login.addEventListener('click', toggleForm);
};
window.load = authForm();
