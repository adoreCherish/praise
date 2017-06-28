import app  from '../app';
const request = require('supertest');
describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app.listen())
      .get('/index/update')
      .expect(200)
      .end(function(err, res) {
        if (res.data!=1) return done(err);
        done();
      });
  });
});