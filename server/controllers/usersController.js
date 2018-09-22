import bcrypt from 'bcrypt';
import pool from '../db/connection';
import { createUser } from '../db/sqlQueries';

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
}

const { userSignup } = UserHandler;

export default userSignup;
