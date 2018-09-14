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
        expect(response.body.message).to.equal('Welcome to Fast-Food-Fast');
        done();
      });
  });
});

describe('Test Invalid URL', () => {
  it('Should return status code 404', (done) => {
    chai.request(app)
      .get('/invalid/undefined/route')
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.message).to.equal('oooop! This page does not exist');
        done();
      });
  });
});
