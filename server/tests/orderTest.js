import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import {
  successfulOrder, invalidLocationLength, invalidLocationCharacter, undefinedMealId,
  emptyMealId, invalidMealId, overMillionMealId, nonExistingMealId, undefinedQuantity,
  emptyQuantity, invalidQuantity, excessQuantity
} from './mockData/orderMock';

const { expect } = chai;

chai.use(chaiHttp);
let token;
let adminToken;

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

describe('Create Token for testing Order Endpoints', () => {
  it('should return token for successful login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'marcus2cu@yahoo.com',
        password: 'marcpass'
      })
      .end((error, response) => {
        expect(response).to.have.status(200);
        token = response.body.grabYourToken;
        console.log('USER TEST TOKEN', token);
        done();
      });
  });
  it('should return token for successful login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'admin@gmail.com',
        password: 'adminuser'
      })
      .end((error, response) => {
        expect(response).to.have.status(200);
        adminToken = response.body.grabYourToken;
        console.log('ADMIN TEST TOKEN', adminToken);
        done();
      });
  });
});

describe('Test for POST order', () => {
  it('Should return 201 for success', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(successfulOrder)
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body.message).to.equal('Order placed successfully');
        done();
      });
  });
  it('Should return 400 for invalid location length', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(invalidLocationLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Invalid location length. Please input alphanumeric characters of length 5 to 100');
        done();
      });
  });
  it('Should return 400 for invalid location character', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(invalidLocationCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Invalid location character. Length should be 5 to 100. Only alphanumeric characters, whitespace, comma, and hypen are accepted');
        done();
      });
  });
  it('Should return 400 for undefined menuId', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(undefinedMealId)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('mealId is undefined. It should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 400 for empty menuId', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(emptyMealId)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('mealId is empty. It should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 400 for invalid menuId', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(invalidMealId)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Invalid mealId detected. It should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 400 for over-million menuId', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(overMillionMealId)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Invalid mealId detected. It should be a positive integer greater than zero and less than a million');
        done();
      });
  });
  it('Should return 400 for non-existing menuId', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(nonExistingMealId)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.message).to.equal('Sorry, this menu does not exist');
        done();
      });
  });
  it('Should return 400 for undefined quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(undefinedQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Quantity is undefined. It should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 400 for empty quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(emptyQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Quantity is empty. It should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 400 for invalid quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(invalidQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body.message).to.equal('Invalid quantity detected. It should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 400 for excess quantity', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .set('authorization', token)
      .send(excessQuantity)
      .end((error, response) => {
        expect(response).to.have.status(406);
        expect(response.body).to.be.a('object');
        done();
      });
  });
});

describe('Test GET User Order History Endpoint', () => {
  it('Should return 200 for success when usertype = user', (done) => {
    chai.request(app)
      .get('/api/v1/users/2/orders')
      .set('authorization', token)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('orderHistory');
        done();
      });
  });
  it('Should return 200 for success when usertype = admin', (done) => {
    chai.request(app)
      .get('/api/v1/users/2/orders')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('orderHistory');
        done();
      });
  });
  it('Should return 401 for unauthorized user', (done) => {
    chai.request(app)
      .get('/api/v1/users/1/orders')
      .set('authorization', token)
      .end((error, response) => {
        expect(response).to.have.status(401);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Unauthorized access');
        done();
      });
  });
  it('Should return 400 for invalid userId format', (done) => {
    chai.request(app)
      .get('/api/v1/users/a/orders')
      .set('authorization', token)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid URL. userId should be a positive integer greater than zero');
        done();
      });
  });
});

describe('Test GET ALL ORDERS by Admin', () => {
  it('Should return 200 for success', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('allOrders');
        done();
      });
  });
});

describe('Test GET SPECIFIC ORDER by Admin', () => {
  it('Should return 200 for success', (done) => {
    chai.request(app)
      .get('/api/v1/orders/1')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body).to.have.property('foundOrder');
        done();
      });
  });
  it('Should return 400 for invalid orderId format', (done) => {
    chai.request(app)
      .get('/api/v1/orders/a')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid URL. orderId should be a positive integer greater than zero');
        done();
      });
  });
  it('Should return 404 for non-existing orderId', (done) => {
    chai.request(app)
      .get('/api/v1/orders/10000000')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Sorry, this order does not exist');
        done();
      });
  });
});

describe('Test UPDATE ORDER by Admin', () => {
  it('Should return 200 for success', (done) => {
    chai.request(app)
      .put('/api/v1/orders/1/process')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Order is currently processing');
        done();
      });
  });
  it('Should return 404 for non-existing orderId', (done) => {
    chai.request(app)
      .put('/api/v1/orders/100000/process')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Sorry, this order does not exists.');
        done();
      });
  });
  it('Should return 406 for already processing order', (done) => {
    chai.request(app)
      .put('/api/v1/orders/1/process')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(406);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Sorry, this order cannot be updated at this time');
        done();
      });
  });
  it('Should return 406 for already processing/Cancelled order', (done) => {
    chai.request(app)
      .put('/api/v1/orders/1/cancel')
      .set('authorization', adminToken)
      .end((error, response) => {
        expect(response).to.have.status(406);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Sorry, this order cannot be updated at this time');
        done();
      });
  });
});
