import bcrypt from 'bcrypt';
import pool from '../connection';

const sql = 'insert into users (name, email, phone, address, password, usertype) values ($1, $2, $3, $4, $5, $6)';
const password = bcrypt.hashSync('adminuser', 10);
const variables = ['Admin', 'admin@gmail.com', '08082300954', 'Andela EPIC Tower', password, 'admin'];

class InsertAdminHandler {
  static createAdmin() {
    const create = pool.query(sql, variables)
      .then((() => console.log('Admin signed up successfully')))
      .catch((error) => {
        console.log(error);
      });
    return create;
  }
}

const { createAdmin } = InsertAdminHandler;

export default createAdmin;
