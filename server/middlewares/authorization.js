import jwt from 'jsonwebtoken';
import 'dotenv/config';

const createToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.SECRETEKEY, { expiresIn: '24hrs' });
  return token;
};

const verifyToken = (request, response, next) => {
  const token = request.headers.authorization || request.body.token;
  if (!token) {
    return response.status(403)
      .json({
        status: 'Fail',
        message: 'No token supplied',
      });
  }
  jwt.verify(token, process.env.SECRETEKEY, (error, authData) => {
    if (error) {
      if (error.message.includes('signature')) {
        return response.status(403)
          .json({
            status: 'Fail',
            message: 'Your input is not a valid token. Please input a correct one',
          });
      }
      return response.status(403)
        .json({
          message: error,
        });
    }
    request.authData = authData;
    return next();
  });
};

export { createToken, verifyToken };
