import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import {
  correctUser, undefinedName, emptyName, invalidNameLength, invalidNameCharacter,
  undefinedEmail, emptyEmail, invalidEmailLength, invalidEmailCharacter,
  existingEmail, undefinedPhone, emptyPhone, invalidPhoneLength,
  invalidPhoneCharacter, existingPhone, undefinedPassword, emptyPassword,
  invalidPasswordLength
} from './mockData/userMock';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test for Signup User', () => {
  it('should return 201 for success', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(correctUser)
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body.message).to.equal('Signed up successfully');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedName)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name is undefined');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyName)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name cannot be empyt. Please input you name');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidNameLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name should be 4 to 50 characters long');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidNameCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name should be accepts alphabet and whitespace');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email is undefined');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email field cannot be empty');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidEmailLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email should be 10 to 50 characters');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidEmailCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Please input a valid email');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(existingEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email already exist, please Signup with a new email');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone is undefined');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone field cannot be empty');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPhoneLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone should be 7 to 13 characters');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPhoneCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone should be positive integer');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(existingPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone number already exist. Signup with a new one');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedPassword)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Password is undefined');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyPassword)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Password field cannot be empty');
        done();
      });
  });
  it('should return 400 for undefined name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPasswordLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Password should be 4 to 20 characters');
        done();
      });
  });
});
