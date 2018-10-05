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

      let menuContainer = document.querySelector('.foodContainer');

      data.allMenu.forEach((item, index, itemArray) => {
        let newMenu = document.createElement('DIV');
        let menuName = document.createElement('DIV');
        menuName.innerHTML = `${item.menu}`;
        menuName.setAttribute('class', 'menuName');
        let image = document.createElement('IMG');
        image.setAttribute('class', 'menuImage');

        image.src = `${item.imageurl}`;

        let details = document.createElement('DIV');
        let description = document.createElement('DIV');
        let quantityInput = document.createElement('DIV');
        quantityInput.innerHTML = `
          <form id='order${item.id}'>
            <input type='number' id='quantity${item.id}' placeholder='Qty' class='input'>
            <input type='submit' id='submit${item.id}' value='send' class='input'>
          </form>
        `;
        description.innerHTML = `${item.description}`;
        description.setAttribute('class', 'description');
        let orderAction = document.createElement('DIV');
        orderAction.setAttribute('class', 'orderAction');
        let orderBtn = document.createElement('SPAN');
        orderBtn.setAttribute('class', 'orderBtn');
        orderBtn.innerHTML = 'order now';

        let price = document.createElement('DIV');
        price.setAttribute('class', 'price');
        price.innerHTML = `&#8358;${item.price}`;

        quantityInput.setAttribute('class', 'quantityform');
        const showQuantity = () => {
          const quantityFields = document.querySelectorAll('.quantityform');
          quantityFields[index].style.display = 'block';
        };
        orderBtn.addEventListener('click', showQuantity);

        orderAction.appendChild(orderBtn);
        orderAction.appendChild(quantityInput);

        details.setAttribute('class', 'details');
        details.appendChild(description);
        details.appendChild(orderAction);

        newMenu.setAttribute('class', 'menu');
        newMenu.setAttribute('id', `menu${item.id}`);

        newMenu.appendChild(menuName);
        newMenu.appendChild(image);
        newMenu.appendChild(details);
        newMenu.appendChild(price);
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
