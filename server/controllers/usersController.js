import bcrypt, { compareSync } from 'bcrypt';
import pool from '../db/connection';
import { createUser, queryUsersByEmail } from '../db/sqlQueries';

class UserHandler {
  static userSignup(request, response) {
    const variables = [
      request.body.name,
      request.body.email,
      request.body.phone,
      request.body.address,
      bcrypt.hashSync(request.body.password, 10)
    ];
    pool.query(createUser, variables)
      .then(() => response.status(201)
        .json({
          message: 'Signed up successfully'
        }))
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }

  static userLogin(request, response) {
    const variable = [request.body.email];
    pool.query(queryUsersByEmail, variable)
      .then((result) => {
        if (result.rowCount !== 0) {
          const comparePassword = compareSync(request.body.password, result.rows[0].password);
          if (comparePassword) {
            const username = variable[0].split('@')[0];
            return response.status(200)
              .json({
                message: `Welcome back ${username}`
              });
          }
          response.status(401)
            .json({
              status: 'Fail',
              message: 'Incorrect password. Please input your correct password',
            });
        }
        if (result.rowCount === 0) {
          response.status(404)
            .json({
              status: 'Fail',
              message: 'Email not found. Please signup',
            });
        }
      })
      .catch((error) => {
        response.json({
          status: 'Fail',
          message: error.message,
        });
      });
  }
}

const { userSignup, userLogin } = UserHandler;

export { userSignup, userLogin };
