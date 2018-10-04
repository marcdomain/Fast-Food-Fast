const getAvailableMenu = (event) => {
  fetch(`${baseURL}/menu`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((data) => {
      console.log('DATA', data.allMenu);

      let menuContainer = document.querySelector('.foodContainer');

      data.allMenu.forEach((item, index, menuArray) => {
        increament();
        let newMenu = document.createElement('DIV');
        let menuName = document.createElement('DIV');
        menuName.innerHTML = `${item.menu}`;
        menuName.setAttribute('class', 'menuName');
        let image = document.createElement('IMG');
        image.setAttribute('class', 'menuImage');
        image.setAttribute('src', `url('${item.imageurl}')`);

        console.log('IMAGE URL', `${item.imageurl}`);
        let details = document.createElement('DIV');
        let description = document.createElement('DIV');
        let quantityInput = document.createElement('DIV');
        quantityInput.innerHTML = `
          <form id='order${item.id}'>
            <input type='number' id='quantity${item.id}'>
            <input type='submit' id='submit${item.id}'>
          </form>
        `;
        description.innerHTML = `${item.description}`;
        let orderAction = document.createElement('DIV');
        let orderBtn = document.createElement('SPAN');
        orderBtn.innerHTML = 'order now';

        orderAction.appendChild(orderBtn);
        orderAction.appendChild(quantityInput);

        details.appendChild(description);
        details.appendChild(orderAction);

        newMenu.setAttribute('class', 'menu');
        newMenu.setAttribute('id', `menu${item.id}`);

        newMenu.appendChild(menuName);
        newMenu.appendChild(image);
        newMenu.appendChild(details);
        menuContainer.appendChild(newMenu);
      });
      document.querySelector('.foodContainer').innerHTML = [...menuContainer];
    })
    .catch((error) => {
      console.log('Error from catch', error);
    });
};

const scrollPage = () => {
  const scrollTopBtn = document.querySelector('.scroll-top');

  const selectSection = (event) => {
    if (event.target === scrollTopBtn) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  };

  scrollTopBtn.addEventListener('click', selectSection);
};

window.onload = () => {
  getAvailableMenu();
  scrollPage();
};
