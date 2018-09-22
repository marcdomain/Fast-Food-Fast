import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import {
  correctUser, undefinedName, emptyName, invalidNameLength, invalidNameCharacter,
  undefinedEmail, emptyEmail, invalidEmailLength, invalidEmailCharacter,
  existingEmail, undefinedPhone, emptyPhone, invalidPhoneLength,
  invalidPhoneCharacter, existingPhone, undefinedPassword, emptyPassword,
  invalidPasswordLength, undefinedAddress, emptyAddress, invalidAddressLength,
  invalidAddressCharacter, whitespacePassword
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
        expect(response.body.message).to.equal('Name cannot be undefined. Input 4 to 50 alphabets');
        done();
      });
  });
  it('should return 400 for empty name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyName)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name cannot be empyt. Input 4 to 50 alphabets');
        done();
      });
  });
  it('should return 400 for invalid name length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidNameLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name should be 4 to 50 aplhabets long');
        done();
      });
  });
  it('should return 400 for invalid name character', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidNameCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Name accepts only alphabet and whitespace');
        done();
      });
  });
  it('should return 400 for undefined email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email cannot be undefined');
        done();
      });
  });
  it('should return 400 for empty email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email field cannot be empty. Input an email 10 to 50 characters');
        done();
      });
  });
  it('should return 400 for invalid email length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidEmailLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email should be 10 to 50 characters');
        done();
      });
  });
  it('should return 400 for invalid email character', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidEmailCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal("Please input a valid email format 'example@domain.com'");
        done();
      });
  });
  it('should return 400 for existing email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(existingEmail)
      .end((error, response) => {
        expect(response).to.have.status(409);
        expect(response.body.message).to.equal('Email already exist, please Signup with a new one');
        done();
      });
  });
  it('should return 400 for undefined phone', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone is undefined. Input integer of 7 to 13 characters long');
        done();
      });
  });
  it('should return 400 for empty phone field', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone field cannot be empty. Input integer of 7 to 13 characters long');
        done();
      });
  });
  it('should return 400 for invalid phone length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPhoneLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone should be integer of 7 to 13 characters long');
        done();
      });
  });
  it('should return 400 for invalid phone character', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPhoneCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone should be positive integer of length 7 to 13');
        done();
      });
  });
  it('should return 400 for existing phone', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(existingPhone)
      .end((error, response) => {
        expect(response).to.have.status(409);
        expect(response.body.message).to.equal('Phone number already exist, please Signup with a new one');
        done();
      });
  });
  it('should return 400 for undefined password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedPassword)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Password is undefined. Input 4 to 20 characters');
        done();
      });
  });
  it('should return 400 for empty password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyPassword)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Password cannot be empty. Input 4 to 20 characters');
        done();
      });
  });
  it('should return 400 for invalid password length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidPasswordLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Invalid password length. Input 4 to 20 characters');
        done();
      });
  });
  it('should return 400 for password having whitespace', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(whitespacePassword)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Remove whitespace from your password and input 4 to 20 characters');
        done();
      });
  });
  it('should return 400 for undefined address', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(undefinedAddress)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Address is undefined. Input 5 to 100 alphanumeric characters');
        done();
      });
  });
  it('should return 400 for empty address', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(emptyAddress)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Address is empty. Input 5 to 100 alphanumeric characters');
        done();
      });
  });
  it('should return 400 for invalid address length', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidAddressLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Address should be 5 to 100 alphanumeric characters');
        done();
      });
  });
  it('should return 400 for non-alphanumeric address', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(invalidAddressCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Address should be 5 to 100 alphanumeric characters and whitespace');
        done();
      });
  });
});
