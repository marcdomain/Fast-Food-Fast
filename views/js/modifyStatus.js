const selectStatus = () => {
  const status = document.querySelectorAll('.status');
  const cancelOrder = document.querySelectorAll('.cancel');
  const processOrder = document.querySelectorAll('.process');
  const completeOrder = document.querySelectorAll('.complete');

  const cancelled = (event) => {
    cancelOrder.forEach((value, i, cancelArr) => {
      if (event.target === cancelArr[i]) {
        status[i].innerHTML = 'Cancelled';
      }
    });
  };
  for (let i = 0; i < cancelOrder.length; i++) {
    cancelOrder[i].addEventListener('click', cancelled);
  }

  const processing = (event) => {
    processOrder.forEach((value, i, processArr) => {
      if (event.target === processArr[i]) {
        processArr[i].setAttribute('class', 'processing');
        processArr[i].innerHTML = 'Processing';
        cancelOrder[i].style.display = 'none';
        completeOrder[i].style.display = 'inline-block';
      }
    });
  };
  for (let i = 0; i < processOrder.length; i++) {
    processOrder[i].addEventListener('click', processing);
  }


  const complete = (event) => {
    completeOrder.forEach((value, i, completeArr) => {
      if (event.target === completeArr[i]) {
        status[i].innerHTML = 'Completed';
      }
    });
  };
  for (let i = 0; i < completeOrder.length; i++) {
    completeOrder[i].addEventListener('click', complete);
  }
};

setTimeout(() => {
  selectStatus();
}, 500);
