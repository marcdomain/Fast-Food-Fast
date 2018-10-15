const getAllOrders = () => {
  const token = localStorage.getItem('token');

  fetch(`${baseURL}/orders`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      Authorization: token
    }
  })
    .then(data => data.json())
    .then((response) => {
      const allOrdersTable = document.querySelector('.all-orders-table');

      response.allOrders.forEach((order, index, orderArray) => {
        const eachOrderDiv = document.createElement('DIV');
        eachOrderDiv.setAttribute('class', 'items');
        const eachOrderTable = document.createElement('TABLE');

        order.orderitems.forEach((item, count, itemArray) => {
          const itemRow = document.createElement('TR');
          itemRow.innerHTML = `
            <td>
              <strong>Meal:</strong> &nbsp; &nbsp; &nbsp; &nbsp; ${item.menu} <br>
              <strong>Quantity:</strong> &nbsp;${item.quantity} <br>
              <strong>Amount:</strong> &nbsp; &#8358; ${item.amount}
            </td>
          `;
          eachOrderTable.appendChild(itemRow);
        });
        eachOrderDiv.appendChild(eachOrderTable);

        const newTableRow = document.createElement('TR');
        newTableRow.innerHTML = `
          <td>${order.id}</td>
          <td>
            ${new Date(order.orderdate).toString().split(' GMT')[0]}
          </td>
          <td>${order.phone}</td>
          <td>${order.location}</td>
          <td height="80" width="350">${eachOrderDiv.outerHTML}</td>
          <td>&#8358;${order.total}</td>
          <td class="status">
            <span class="db-status" id="db-status${order.id}">${order.status}</span>
            <div class="dummy-status" id="dummy-status${order.id}">
              <span class="process" id="process${order.id}">process</span><span id="break${order.id}"><br><br></span>
              <span class="cancel" id="cancel${order.id}">cancel</span>
              <span class="complete" id="complete${order.id}">complete</span>
            </div>
          </td>
        `;
        allOrdersTable.appendChild(newTableRow);

        // Modify status starts here
        const status = document.querySelectorAll(`#db-status${order.id}`);
        const dummyStatus = document.querySelector(`#dummy-status${order.id}`);
        const processId = document.querySelector(`#process${order.id}`);
        const completeId = document.querySelector(`#complete${order.id}`);
        const cancelId = document.querySelector(`#cancel${order.id}`);
        const breakId = document.querySelector(`#break${order.id}`);

        if (status[0].innerHTML === 'Cancelled') {
          dummyStatus.style.display = 'none';
          status[0].style.display = 'block';
          return;
        }

        if (status[0].innerHTML === 'Processing') {
          status[0].style.display = 'block';
          completeId.style.display = 'block';
          cancelId.style.display = 'none';
          processId.style.display = 'none';
          breakId.style.display = 'none';
          return;
        }

        setTimeout(() => {
          const cancelOrder = (event) => {
            if (event.target === cancelId) {
              fetch(`${baseURL}/orders/${order.id}/cancel`, {
                method: 'PUT',
                headers: {
                  Accept: 'application/json, text/plain, */*',
                  'Content-type': 'application/json',
                  Authorization: token
                }
              })
                .then(feedback => feedback.json())
                .then((data) => {
                  console.log('DATA', data);
                  let message = '';

                  message = 'Invalid URL. orderId should be a positive integer greater than zero';
                  if (data.message === message) {
                    Utils.notification(data.message, 'white', 'red');
                    return;
                  }

                  message = 'Sorry, this order does not exists.';
                  if (data.message === message) {
                    Utils.notification('Sorry, this order does not exist', 'white', 'red');
                    return;
                  }

                  message = 'Sorry, this order cannot be updated at this time';
                  if (data.message === message) {
                    Utils.notification(data.message, 'white', 'red');
                    return;
                  }

                  message = 'Order is cancelled';
                  if (data.message === message) {
                    Utils.notification(`Order ${order.id} is cancelled`, 'white', 'green');
                  }
                })
                .catch((error) => {
                  console.log('Cancel order catch error', error);
                });
              dummyStatus.innerHTML = 'Cancelled';
            }
          };
          cancelId.addEventListener('click', cancelOrder);
          // End Cancel Order

          const processOrder = (event) => {
            if (event.target === processId) {
              fetch(`${baseURL}/orders/${order.id}/process`, {
                method: 'PUT',
                headers: {
                  Accept: 'application/json, text/plain, */*',
                  'Content-type': 'application/json',
                  Authorization: token
                }
              })
                .then(feedback => feedback.json())
                .then((data) => {
                  console.log('DATA', data);
                  let message = '';

                  message = 'Invalid URL. orderId should be a positive integer greater than zero';
                  if (data.message === message) {
                    Utils.notification(data.message, 'white', 'red');
                    return;
                  }

                  message = 'Sorry, this order does not exists.';
                  if (data.message === message) {
                    Utils.notification('Sorry, this order does not exist', 'white', 'red');
                    return;
                  }

                  message = 'Sorry, this order cannot be updated at this time';
                  if (data.message === message) {
                    Utils.notification(data.message, 'white', 'red');
                    return;
                  }

                  message = 'Order is currently processing';
                  if (data.message === message) {
                    Utils.notification(`Order ${order.id} is currently processing`, 'white', 'green');
                  }
                })
                .catch((error) => {
                  console.log('Process order catch error', error);
                });

              cancelId.style.display = 'none';
              processId.setAttribute('class', 'processing');
              processId.innerHTML = 'Processing';
              completeId.style.display = 'block';
            }
          };
          processId.addEventListener('click', processOrder);
        }, 500);
        // Modify status ends here
      });
      return allOrdersTable;
    })
    .catch((error) => {
      console.log('Catch get all orders error', error);
    });
};
getAllOrders();
