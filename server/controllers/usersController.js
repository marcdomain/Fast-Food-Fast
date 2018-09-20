import bcrypt from 'bcrypt';
import pool from '../db/connection';
import createUser from '../db/sqlQueries';

class UserHandler {
  static userSignup(request, response) {
    const { name, email, phone } = request.body;
    const variables = [
      name,
      email,
      phone,
      bcrypt.hashSync(request.body.password, 10)
    ];
    pool.query(createUser, variables)
      .then((result) => {
        console.log('CREATE USER RESULT', result);
        return response.status(201)
          .json({
            message: 'Signed up successfully'
          });
      });
  }
}

const { userSignup } = UserHandler;

export default userSignup;
