const orderArray = [];
const getAvailableMenu = () => {
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

      data.allMenu.forEach((item, index, menuArray) => {
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
          <form class="form${item.id}">
            <input type='number' value='${item.id}' class='menuId' id='menuId${item.id}' hidden>
            <select id='quantity${item.id}' class='input qty${item.id}' max="${item.quantity}">
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <input type='submit' id='submit${item.id}' value='send' class='input send'>
          </form>
        `;
        description.innerHTML = `${item.description}`;
        description.setAttribute('class', 'description');
        let orderAction = document.createElement('DIV');
        orderAction.setAttribute('class', 'orderAction');
        let orderBtn = document.createElement('INPUT');
        orderBtn.setAttribute('class', 'orderBtn');
        orderBtn.setAttribute('readonly', 'readonly');
        orderBtn.value = 'order now';

        let price = document.createElement('DIV');
        price.setAttribute('class', 'price');
        price.innerHTML = `&#8358;${item.price}`;

        quantityInput.setAttribute('class', 'quantityform');
        const showQuantity = () => {
          const quantityFields = document.querySelectorAll('.quantityform');
          const clickedOrderBtn = document.querySelectorAll('.orderBtn');
          quantityFields[index].style.display = 'block';
          clickedOrderBtn[index].style.backgroundColor = 'gray';
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

        const orderCart = (eventObject) => {
          eventObject.preventDefault();
          const newOrder = {};
          newOrder.menuId = document.querySelector(`#menuId${item.id}`).value;
          newOrder.quantity = document.querySelector(`.qty${item.id}`).value;
          orderArray.push(newOrder);
          console.log('NEW ORDER', newOrder);
          console.log('ORDER ARRAY', orderArray);
          // return orderArray;
        };
        document.querySelector(`#submit${item.id}`).addEventListener('click', orderCart);

        const orderAmount = () => {
          const orderQty = document.querySelector(`.qty${item.id}`).value;
          const amount = orderQty * item.price;
          price.innerHTML = `&#8358;${amount}`;
          price.style.textDecoration = 'underline';
          price.style.textDecorationStyle = 'double';
          price.style.textDecorationColor = 'lime';
          price.style.fontWeight = 'bold';
        };
        document.querySelector(`.qty${item.id}`).addEventListener('change', orderAmount);
      });
      return menuContainer;
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
