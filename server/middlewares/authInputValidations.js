import pool from '../db/connection';
import { queryUsersByEmail, queryUsersByPhone } from '../db/sqlQueries';

/**
  * @description class representing Validations of user input
  *
  * @class UserValidationHandler
  */

class UserValidationHandler {
  /**
  * @description - This method is responsible for validating signup inputs
  *
  * @static
  * @param {object} request - Request sent to the middleware
  * @param {object} response - Response sent from the middleware
  * @param {object} next - callback function to transfer to the next method
  *
  * @returns {object} - status and object representing fail message
  *
  * @memberof UserValidationHandler
  */

  static signupValidator(request, response, next) {
    let {
      name, email, phone, address, password
    } = request.body;

    if (name === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Name cannot be undefined. Input 4 to 50 alphabets'
        });
    }
    if (name === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Name cannot be empyt. Input 4 to 50 alphabets'
        });
    }
    name = name.trim().replace(/  +/g, ' ');
    if (name.length < 4 || name.length > 50) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Name should be 4 to 50 aplhabets long'
        });
    }
    const validNameCharacters = /^[a-z ]+$/i;
    if (!validNameCharacters.test(name)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Name accepts only alphabet and whitespace'
        });
    }

    if (email === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email cannot be undefined'
        });
    }
    if (email === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email field cannot be empty. Input an email 10 to 50 characters'
        });
    }
    const validEmailCharacter = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!validEmailCharacter.test(email)) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: "Please input a valid email format 'example@domain.com'",
        });
    }
    email = email.toLowerCase().trim();
    if (email.length < 10 || email.length > 50) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email should be 10 to 50 characters',
        });
    }
    pool.query(queryUsersByEmail, [email])
      .then((data) => {
        if (data.rowCount !== 0) {
          return response.status(409)
            .json({
              status: 'Fail',
              message: 'Email already exist, please Signup with a new one'
            });
        }
        if (phone === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Phone is undefined. Input integer of 7 to 13 characters long'
            });
        }
        if (phone === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Phone field cannot be empty. Input integer of 7 to 13 characters long'
            });
        }
        phone = phone.trim();
        if (phone.length < 7 || phone.length > 13) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Phone should be integer of 7 to 13 characters long'
            });
        }
        const validPhoneCharacter = /^[0-9]+$/;
        if (!validPhoneCharacter.test(phone)) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Phone should be positive integer of length 7 to 13'
            });
        }
        pool.query(queryUsersByPhone, [phone])
          .then((result) => {
            if (result.rowCount !== 0) {
              return response.status(409)
                .json({
                  status: 'Fail',
                  message: 'Phone number already exist, please Signup with a new one'
                });
            }
            if (address === undefined) {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Address is undefined. Input 5 to 100 alphanumeric characters'
                });
            }
            if (address === '') {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Address is empty. Input 5 to 100 alphanumeric characters'
                });
            }
            address = address.trim().replace(/  +/g, ' ');
            if (address.length < 5 || address.length > 100) {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Address should be 5 to 100 alphanumeric characters'
                });
            }
            const validAddressCharacter = /^[a-z0-9 ]+$/i;
            if (!validAddressCharacter.test(address)) {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Address should be 5 to 100 alphanumeric characters and whitespace'
                });
            }
            if (password === undefined) {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Password is undefined. Input 4 to 20 characters'
                });
            }
            if (password === '') {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Password cannot be empty. Input 4 to 20 characters'
                });
            }
            password = password.trim();
            if (password.length < 4 || password.length > 20) {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Invalid password length. Input 4 to 20 characters'
                });
            }
            if (password.includes(' ')) {
              return response.status(400)
                .json({
                  status: 'Fail',
                  message: 'Remove whitespace from your password and input 4 to 20 characters',
                });
            }
            request.body.name = name;
            request.body.email = email;
            request.body.phone = phone;
            request.body.address = address;
            request.body.password = password;
            next();
          });
      })
      .catch(error => response.status(500)
        .json({
          status: 'Fail',
          message: error.message
        }));
  }

  /**
  * @description - This method is responsible for validating login inputs
  *
  * @static
  * @param {object} request - Request sent to the middleware
  * @param {object} response - Response sent from the middleware
  * @param {object} next - callback function to transfer to the next method
  *
  * @returns {object} - status and object representing fail message
  *
  * @memberof UserValidationHandler
  */

  static loginValidator(request, response, next) {
    let { email, password } = request.body;
    if (email === undefined) {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email is undefined. Input your email',
        });
    }
    email = email.toLowerCase().trim();
    if (email === '') {
      return response.status(400)
        .json({
          status: 'Fail',
          message: 'Email cannot be empty. Input a valid email',
        });
    }
    pool.query(queryUsersByEmail, [email])
      .then((result) => {
        if (result.rowCount === 0) {
          return response.status(404)
            .json({
              status: 'Fail',
              message: 'Email not found. Please signup',
            });
        }
        if (password === undefined) {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Password is undefined. Please input your password',
            });
        }
        password = password.trim();
        if (password === '') {
          return response.status(400)
            .json({
              status: 'Fail',
              message: 'Password is empty. Please input your password',
            });
        }

        request.body.password = password;
        request.body.email = email;
        next();
      })
      .catch(error => response.status(500)
        .json({
          message: error.message
        }));
  }
}

const { signupValidator, loginValidator } = UserValidationHandler;

export { signupValidator, loginValidator };
