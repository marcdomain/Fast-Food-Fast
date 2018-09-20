const createUser = 'insert into users (name, email, phone, password) values ($1, $2, $3, $4) returning *';

export default createUser;
