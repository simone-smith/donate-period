const app = require('../app');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);


describe('/GET charities', () => {
  it('it should GET all the charities', (done) => {
    chai.request(app)
      .get('/api/charities')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(20);
        done();
      });
  });
});

describe('/GET wishlist for one charity', () => {
  it('it should show the wishlist for a charity', (done) => {
    chai.request(app)
    .get('/api/charities/2201')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(2);
      done();
    })
  })
})
