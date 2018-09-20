import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import { correctUser, undefinedName } from './mockData/userMock';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test for Signup User', () => {
  it('should return 201 for success', (done) => {
    chai.request(app)
      .post('api/v1/auth/signup')
      .send(correctUser)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body.message).to.equal('Signed up successfully');
        done();
      });
  });
});
