var app = require('./../server');

var request = require('supertest').agent(app.listen());

describe('GET /', function () {
  it('should work"', function (done) {
    request
    .get('/')
    .expect(200)
    .expect('<h1>Koa app</h1><a href="/koa">Koa - next generation web framework for node.js</a>', done);
  });
});

describe('GET /koa', function () {
  it('should work"', function (done) {
    request
    .get('/koa')
    .expect(200)
    .expect({
      'title': 'Koa - next generation web framework for node.js', 
      'description': 'Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs',
      'web': 'koajs.com'
    }, done);
  });
});
