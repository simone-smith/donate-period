const app = require('../app');

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);


describe('/GET wishlist', () => {
  it('it should GET all the wishlists', (done) => {
    chai.request(app)
      .get('/wishlist')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(4);
        done();
      });
  });
});


describe('/POST wishlist', () => {
  it ('it should POST a new wishlist', (done) => {
    chai.request(app)
      .post('/wishlist')
      .send({ "item" : "kleenex" })
      .end(function (err, res){
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        expect(res.body[4]).to.have.property('item','kleenex');
        done();
      })
  })
});
