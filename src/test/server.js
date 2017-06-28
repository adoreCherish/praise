'use strict';

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = require('supertest');
describe('GET /users', function () {
  it('respond with json', function (done) {
    request(_app2.default.listen()).get('/index/update').expect(200).end(function (err, res) {
      if (res.data != 1) return done(err);
      done();
    });
  });
});
