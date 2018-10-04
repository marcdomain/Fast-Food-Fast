const decodeUser = (t) => {
  const token = {};
  token.raw = t;
  token.header = JSON.parse(window.atob(t.split('.')[0]));
  token.payload = JSON.parse(window.atob(t.split('.')[1]));
  return (token);
};

let token = localStorage.getItem('token');
let decoded = decodeUser(token);

if (decoded.payload.payload.usertype !== 'admin') {
  location.assign('unauthorized.html');
};
