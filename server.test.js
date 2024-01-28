import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './server.js';


chai.use(chaiHttp);

describe('Server', () => {
  it('should return a poll via GET request', (done) => {
    chai.request(app)
      .get('/votes')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.have.property('options');
        done();
      });
  });

  it('should handle a vote via POST request', (done) => {
    chai.request(app)
      .post('/vote')
      .send({ selectedOption: 'A' })
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.equal('Received vote for A');
        done();
      });
  });
  it('should handle a vote via POST request', (done) => {
    chai.request(app)
      .post('/vote')
      .send({ selectedOption: 'B' })
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.equal('Received vote for B');
        done();
      });
  });
  it('should handle a vote via POST request', (done) => {
    chai.request(app)
      .post('/vote')
      .send({ selectedOption: 'C' })
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.equal('Received vote for C');
        done();
      });
  });

});
