import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import {
  successOrder, undefinedEmail, emptyEmail, invalidEmailFormat, invalidEmailLength, undefinedPhone,
  emptyPhone, invalidPhoneFormat, invalidPhoneLength,
  undefinedItem, emptyItem, invalidItemLength, invalidItemCharacter, undefinedPrice,
  emptyPrice, invalidPriceLength, invalidPriceCharacter, undefinedQuantity,
  emptyQuantity, invalidQuantityLength, invalidQuantityCharacter
} from './orderMock';

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

describe('Test for POST order', () => {
  it('Should return 201 for success', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(successOrder)
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body.message).to.equal('Thanks! order has been placed successfully');
        done();
      });
  });
  it('Should return 400 for undefined email', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(undefinedEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email field is undefined');
        done();
      });
  });
  it('Should return 400 for undefined email', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(emptyEmail)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email field cannot be empty');
        done();
      });
  });
  it('Should return 400 for invalid email length', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidEmailLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Email should be 8 to 50 characters long');
        done();
      });
  });
  it('Should return 400 for invalid email Format', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidEmailFormat)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Your email format is invalid');
        done();
      });
  });
  it('Should return 400 for Undefined phone', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(undefinedPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone field is undefined');
        done();
      });
  });
  it('Should return 400 for empty phone', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(emptyPhone)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone field cannot be empty');
        done();
      });
  });
  it('Should return 400 for invalid phone format', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidPhoneFormat)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone should be number characters');
        done();
      });
  });
  it('Should return 400 for invalid phone length', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidPhoneLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Phone should be 8 to 13 characters long');
        done();
      });
  });
  it('Should return 400 for Undefined Item', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(undefinedItem)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Item field is undefined');
        done();
      });
  });
  it('Should return 400 for empty Item', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(emptyItem)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Item field cannot be empty');
        done();
      });
  });
  it('Should return 400 for invalid Item length', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidItemLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Item should be 4 to 30 characters long');
        done();
      });
  });
  it('Should return 400 for invalid item caharacter', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidItemCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Item should be alphabets');
        done();
      });
  });
  it('Should return 400 for undefined price', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(undefinedPrice)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Price field is undefined');
        done();
      });
  });
  it('Should return 400 for empty price', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(emptyPrice)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Price field cannot be empty');
        done();
      });
  });
  it('Should return 400 for invalid price length', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidPriceLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Price should be 3 to 5 characters long');
        done();
      });
  });
  it('Should return 400 for invalid price character', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidPriceCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Price should be number characters');
        done();
      });
  });
  it('Should return 400 for undefined quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(undefinedQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('quantity field is undefined');
        done();
      });
  });
  it('Should return 400 for empty quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(emptyQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('quantity field cannot be empty');
        done();
      });
  });
  it('Should return 400 for empty quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidQuantityLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('quantity should be 1 to 2 characters long');
        done();
      });
  });
  it('Should return 400 for empty quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(invalidQuantityCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('quantity should be number characters');
        done();
      });
  });
});
