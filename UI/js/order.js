const sendOrder = document.querySelector('.send-order');
const userCloseOrder = document.querySelector('#closeOrder');
const displayModal = document.querySelector('.modal');
const toggleOrder = () => {
  if (event.target.id === 'closeOrder') {
    displayModal.style.display = 'none';
  }
  if (event.target === sendOrder) {
    displayModal.style.display = 'block';
  }
}

sendOrder.addEventListener('click', toggleOrder);
userCloseOrder.addEventListener('click', toggleOrder);

window.onclick = (event) => {
  if (event.target === displayModal) {
    displayModal.style.display = 'none';
  }
}