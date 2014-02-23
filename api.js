
/**
 * Define your API!
 */
module.exports = function (app) {

  /**
   * Index
   */
  app.get('/', function *() {

    this.body = '<h1>Koa app</h1><a href="/koa">Koa - next generation web framework for node.js</a>';
  });

  /**
   * Koa route
   */
  app.get('/koa', function *() {
    
    this.body = {
      'title': 'Koa - next generation web framework for node.js', 
      'description': 'Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs',
      'web': 'koajs.com'
    }
  });
}