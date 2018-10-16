const fetchAllMenu = () => {
  const token = localStorage.getItem('token');
  fetch(`${baseURL}/menu/admin`, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json',
      Authorization: token
    }
  })
    .then(response => response.json())
    .then((data) => {
      console.log('MENU DATA', data);
      const allmenuTable = document.querySelector('.all-menu-table');

      data.allMenu.forEach((foodItem) => {
        const newTableRow = document.createElement('TR');
        newTableRow.innerHTML = `
          <td>${foodItem.id}</td>
          <td>${foodItem.menu}</td>
          <td><img src="${foodItem.imageurl}" class="menu-image"></td>
          <td>${foodItem.category}</td>
          <td>${foodItem.description}</td>
          <td>${foodItem.quantity}</td>
          <td>&#8358;${foodItem.price}</td>
          <td width="75">
            <div class="modify">
              <span class="delete">&#10006;</span>&ensp;
              <span class="edit">&#9998;</span>
            </div>
          </td>
        `;
        allmenuTable.appendChild(newTableRow);
      });
    })
    .catch((error) => {
      console.log('Catch fetch all menu error', error);
    });
};

window.onload = fetchAllMenu();
