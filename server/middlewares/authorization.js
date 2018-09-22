import jwt from 'jsonwebtoken';
import 'dotenv/config';

const createToken = (payload) => {
  const token = jwt.sign({ payload }, process.env.SECRETEKEY, { expiresIn: '24hrs' });
  return token;
};

export default createToken;
