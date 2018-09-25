import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

import {
  correctMenu, undefinedMenu, emptyMenu, invalidMenuLength, invalidMenuCharacter, existingMenu,
  undefinedDescription, emptyDescription, invalidDescriptionLength, invalidDescriptionCharacter,
  undefinedCategory, emptyCategory, invalidCategory, undefinedQuantity, emptyQuantity,
  invalidQuantityLength, invalidQuantity, invalidQuantityCharacter, undefinedPrice, emptyPrice,
  invalidPriceLength, invalidPrice, invalidPriceCharacter
} from './mockData/menuMock';

const { expect } = chai;

chai.use(chaiHttp);
let token;

describe('Create Token For non-admin user', () => {
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
        done();
      });
  });
});

describe('Test POST MENU endpoint for non-admin user', () => {
  it('should return 401 if not Admin userType', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .end((error, response) => {
        expect(response).to.have.status(401);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Hey! You need admin privilege to access this endpoint.');
        done();
      });
  });
});

describe('Create Token For Admin', () => {
  it('should return token for successful login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'admin@gmail.com',
        password: 'adminuser'
      })
      .end((error, response) => {
        expect(response).to.have.status(200);
        token = response.body.grabYourToken;
        done();
      });
  });
});

describe('Test POST MENU endpoint for admin userType', () => {
  it('should return 201 for success', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(correctMenu)
      .end((error, response) => {
        expect(response).to.have.status(201);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Menu created successfully');
        done();
      });
  });
  it('should return 400 for undefined menu', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(undefinedMenu)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Menu is undefined. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)');
        done();
      });
  });
  it('should return 400 for empty menu', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(emptyMenu)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Menu is empty. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)');
        done();
      });
  });
  it('should return 400 for invalid menu length', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidMenuLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid menu length. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)');
        done();
      });
  });
  it('should return 400 for invalid menu character', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidMenuCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid menu character detected. Input characters of length 3 to 30 (alphabets, whitespace, comma, hyphen)');
        done();
      });
  });
  it('should return 409 for existing menu', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(existingMenu)
      .end((error, response) => {
        expect(response).to.have.status(409);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Menu already exist. If you wish to update it, then use the modify menu endpoint');
        done();
      });
  });
  it('should return 400 for undefined description', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(undefinedDescription)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Description is undefined. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)');
        done();
      });
  });
  it('should return 400 for empty description', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(emptyDescription)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Description is empty. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)');
        done();
      });
  });
  it('should return 400 for empty description', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidDescriptionLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid description length. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)');
        done();
      });
  });
  it('should return 400 for invalid description character', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidDescriptionCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid description character detected. Input characters of length 5 to 100 (alphanumeric, whitespace, comma, hyphen, fullstop)');
        done();
      });
  });
  it('should return 400 for undefined category', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(undefinedCategory)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal("Category is undefined. Select 'local', 'pizza', 'rice', 'snacks', or 'others'");
        done();
      });
  });
  it('should return 400 for empty category', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(emptyCategory)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal("Category is empty. Select 'local', 'pizza', 'rice', 'snacks', or 'others'");
        done();
      });
  });
  it('should return 400 for invalid category', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidCategory)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal("Invalid category. Select 'local', 'pizza', 'rice', 'snacks', or 'others'");
        done();
      });
  });
  it('should return 400 for undefined quantity', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(undefinedQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Quantity is undefined. Input positive integer greater than zero and of length 1 to 4');
        done();
      });
  });
  it('should return 400 for empty quantity', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(emptyQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Quantity is empty. Input positive integer greater than zero and of length 1 to 4');
        done();
      });
  });
  it('should return 400 for invalid quantity length', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidQuantityLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid quantity length. Input positive integer greater than zero and of length 1 to 4');
        done();
      });
  });
  it('should return 400 for invalid quantity', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidQuantity)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid quantity. Input positive integer greater than zero and of length 1 to 4');
        done();
      });
  });
  it('should return 400 for invalid quantity character', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidQuantityCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid quantity character detected. Input positive integer greater than zero and of length 1 to 4');
        done();
      });
  });
  it('should return 400 for undefined price', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(undefinedPrice)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Price is undefined. Input positive integer characters of length 3 to 6');
        done();
      });
  });
  it('should return 400 for empty price', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(emptyPrice)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Price is empty. Input positive integer characters of length 3 to 6');
        done();
      });
  });
  it('should return 400 for invalid price length', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidPriceLength)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid price length. Input positive integer characters of length 3 to 6');
        done();
      });
  });
  it('should return 400 for invalid price', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidPrice)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid price. Input positive integers greater than zero and of length 3 to 6');
        done();
      });
  });
  it('should return 400 for invalid price', (done) => {
    chai.request(app)
      .post('/api/v1/menu')
      .set('authorization', token)
      .send(invalidPriceCharacter)
      .end((error, response) => {
        expect(response).to.have.status(400);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('Invalid price character detected. Input positive integer characters of length 3 to 6');
        done();
      });
  });
});

describe('GET All Available Menu', () => {
  it('Should return 200 for success', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a('object');
        expect(response.body.message).to.equal('List of Available Menu');
        done();
      });
  });
});
