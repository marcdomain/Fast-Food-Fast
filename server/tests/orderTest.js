import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test Homepage API Endpoint', () => {
  it('Should return status code 200 for success', (done) => {
    chai.request(app)
      .get('/api/v1')
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body.message).to.equal('Welcom to Fast-Food-Fast');
        done();
      });
  });
});
