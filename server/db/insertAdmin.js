import pool from './connection';

const insertAdmin = `insert into users (name, email, phone, password, user_type) 
values ('Admin', 'admin@gmail.com', '08082300954', 'adminuser', 'admin')`;

pool.query(insertAdmin)
  .then((result => console.log(`Admin account ${result.command}ED`)))
  .catch((error) => {
    console.log(error);
  });
